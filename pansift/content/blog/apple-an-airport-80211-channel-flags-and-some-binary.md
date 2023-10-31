---
layout: post
date: "2023-10-27T15:35:00"
subtitle: From Data to Information
author: Donal
tags:
  - pcaps
  - radiotap
  - programming
  - macos
  - assurance
  - remote_working
  - work_from_anywhere
  - support
  - troubleshooting
  - guides
categories:
  - troubleshooting
image: /images/blog/binary_apple_v2.png
published: true
title: Apple, an Airport, 802.11 Channel Flags, and Some Binary
---

Apple M2 chips support the `6GHz` RF(Radio Frequency) spectrum for **Wi-Fi**. If you don't know what that means, then this post is probably not for you. However, if you do know your `2.4GHz` from your `5GHz` , then read on for some reverse engineering relating to; packet captures, custom bitmasks, and how to figure out which **WLAN bands** and **channel widths** are around your Mac (without having to use Apple's <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a> or clicking the Wi-Fi icon <img src="/images/blog/wifi_icon_v1.png" class="inline-block rounded" height="22" width="21"> in the menubar part of the UI).

**TL;DR** Used some old Apple header fields from 2015 to figure out the airport utility `CHANNEL_FLAGS` bit mask which doesn't map directly to 802.11 radiotap headers. This technique is being rolled in to the latest PanSift agent as the agent doesn't actively query <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a>.

<hr>

💡 This is not going to be an <a target="_blank" href="https://www.ieee.org/">**IEEE**</a> `802.11` wireless LAN history lesson, but suffice to say, the `802.11` standard and protocol, the one that underpins **Wi-Fi**, is revised and updated with new functionality _relatively_ frequently and has a naming convention that uses lettered versioning such as `802.11a` , `802.11b` , `802.11g` , `802.11n` , `802.11ac` , `802.11ax` , and `802.11be`. Each `802.11*` standard has some unique properties and often builds off what has come before. 

There are differences in **RF** bands, modulation, encoding, and then some sprinkles of additional features, all in an attempt to pack greater amounts of data in to radio waves. As our thirst for data grows, each successive standard tries to bundle ever more bits in to the air. Partly, this is an attempt to have devices get on and off the medium as quickly as possible as only one device can speak on a specific channel frequency at a time (half-duplex) once within range. **Wi-Fi** is a shared medium designed to serve multiple devices _almost_ concurrently. It tries to avoid collisions as it is unable to detect them, but I digress... finding clear channels to reduce **contention** and **interference** is crucial to **optimal** performance. 


<hr>

So, one of the latest'ish <a target="_blank" href="https://www.ieee.org/">**IEEE**</a> standards for Wi-Fi is `802.11ax`. The existing naming convention led the Wi-Fi Alliance to rebrand `802.11ax` as **Wi-Fi 6** for marketing purposes. 

🚩 And here's where my problem begins and continues! 🚩 

`802.11ax` for **Wi-Fi 6** is somewhat like `802.11n` in that it runs on both the `2.4GHz` and `5GHz` frequency bands. Irrespective of this `802.11ax` `PHY mode` , channel numbers are unique across `2.4GHz` and `5GHz`. 

All good so far. This means that if you can quickly find out the active/primary channel, any channels from `1 - 14` are in the `2.4GHz` band and any channel from `32 - 177` are in the `5GHz` band. 

A **simple heuristic** that _had_ worked for a long time. 

🚩 But apparently naming things has to get harder 🚩. 

The amendment to `802.11ax` that enabled the `6GHz` frequency range (**yay!**) was named by the <a target="_blank" href="https://www.wi-fi.org/who-we-are">**Wi-Fi Alliance**</a> as **Wi-Fi 6E**. They effectively broke their own simple marketing naming standard and tacked on letters rather than incremental digits to differentiate capabilities (in the vain hope of clear messaging!). 

Not only is this **confusing** from a consumer perspective (looking for *Wi-Fi **6*** vs *Wi-Fi **6E*** capable access points and devices), but **Wi-Fi 6E** also **re-uses existing channel numbers** in the `6GHz` range. This channel car crash 💥, however, is perhaps a legacy thing owed to the <a target="_blank" href="https://www.ieee.org/">**IEEE**</a> who were trying to be consistent across regulatory domains. 

So, the previously simple _channel_ based heuristic **now fails** to correctly and easily identify the **RF** frequency band! 
<hr>

**Channel `1` can now refer to _either_ the `2.4GHz` or `6GHz` band**.
<hr>

🚩 In fact, the channel numbers `1`, `3`, `5`, `7`, `9`, `11`, `13`, `149`, `151`, `157`, `161`, `165`, `169`, `173`, `177` overlap directly from the `2.4GHz` and `5GHz` bands, **with** the channel numbers in the `6GHz` range (_but not frequencies_).  

So how do you know which channel is in which band on a Mac ❓ 

The most reliable way to get at **WLAN** information in **macOS** is to query the <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a> framework. <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a>, as Apple states, _"provides APIs for querying AirPort interfaces and choosing networks."_ Though, to natively query this information requires the ability to write <a target="_blank" href="https://en.wikipedia.org/wiki/Objective-C">**Objective-C**</a> _syntax_ based code (which I don't currently have) or use Apple's <a target="_blank" href="https://developer.apple.com/swift/">**Swift**</a> language. 

Also, the **macOS** UI(User Interface) will tell you (if you _Alt or Option Click_ the Wi-Fi airport icon <img src="/images/blog/wifi_icon_v1.png" class="inline-block rounded" height="22" width="21">!). But what if you want to find out _progammatically_ via the command line and _without_ learning a new language? Well, there's also the `airport` command line utility and even some `system_profiler` keys to query.

As an ex-network engineer with a computer science degree (and a some proficiency in software development), I've been building [**PanSift**](/) using <a target="_blank" href="https://rubyonrails.org/">Ruby on Rails</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a>, and good old <a target="_blank" href="https://www.gnu.org/software/bash/">Bash</a> scripting. Much of the design of [**PanSift**](/) is outlined [**here**](/design) (in case you're interested), but whereas I could previously use the `airport` command line utility to rapidly infer frequencies from channels, with the introduction of `6GHz`, it's became problematic, or has it?

The Apple macOS `airport` utility can be used from the command line to output information about the currently connected Wi-Fi network or scan surrounding networks. It's super handy for basic scripting but has limitations. 

Some people alias or soft link the `airport` binary from ```/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport``` to facilitate the ability to just type `airport` directly in the terminal without modifying their paths:

So, let's see what we can do using the `airport` binary with the `-I` getinfo switch:

<pre>
minis-Mac-mini:Pansift mini$ airport -I
     agrCtlRSSI: -76
     agrExtRSSI: 0
    agrCtlNoise: -102
    agrExtNoise: 0
          state: running
        op mode: station
     lastTxRate: 104
        maxRate: 144
lastAssocStatus: 0
    802.11 auth: open
      link auth: wpa2-psk
          BSSID:
           SSID: podomere-legacy
            MCS: 14
  guardInterval: 800
            NSS: 2
        channel: 1
</pre>
<small>Note: In later macOS versions the `BSSID` (MAC address) is hidden for privacy purposes.</small>

I had been using the command line airport utility in the [PanSift](/) agent to grab information about the currently connected WLAN and also to **scan** what Wi-Fi networks were around using the `-s` scanning switch (inc. some other switches mentioned below). You can output some very useful information to the terminal in human readable format.

<pre>
minis-Mac-mini:Pansift mini$ airport -s
         SSID BSSID          RSSI CHANNEL  HT CC SECURITY (auth/unicast/group)
 OfficeJet Pro 9010                   -91  6       Y  -- RSN(PSK/AES/AES)
           SKYFXTKT                   -89  36      Y  -- RSN(PSK/AES/AES)
           SKYSJL4E                   -86  1       Y  -- RSN(PSK/AES/AES)
       podomere-iot                   -82  1       Y  -- RSN(PSK/AES/AES)
    podomere-legacy                   -74  1       Y  -- RSN(PSK/AES/AES)
         podomere-a                   -72  52      Y  -- RSN(PSK/AES/AES)
           SKYFXTKT                   -70  6       Y  -- RSN(PSK/AES/AES)
</pre>

But you can actually output more information from the airport utility using the additional `-x` flag to get an `XML` <a target="_blank" href="https://developer.apple.com/documentation/bundleresources/information_property_list">plist</a> formatted output (either for current info or to scan). 

🚩 Keep an eye on the `CHANNEL_FLAGS` key, value, and value type from the output below...

```

minis-Mac-mini:Pansift mini$ airport -Ix
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AUTH_LOWER</key>
	<integer>1</integer>
	<key>AUTH_UPPER</key>
	<integer>8</integer>
	<key>CHANNEL</key>
	<integer>1</integer>
	<key>CHANNEL_FLAGS</key> 🚩
	<integer>10</integer> 🚩
	<key>GI</key>
	<integer>800</integer>
	<key>MCS_INDEX</key>
	<integer>14</integer>
	<key>NOISE_CTL_AGR</key>
	<integer>-102</integer>
	<key>NOISE_UNIT</key>
	<integer>0</integer>
	<key>NSS</key>
	<integer>2</integer>
	<key>PHYMODE_ACTIVE</key>
	<integer>16</integer>
	<key>PHYMODE_SUPPORTED</key>
	<integer>415</integer>
	<key>RSSI_CTL_AGR</key>
	<integer>-76</integer>
	<key>RSSI_CTL_LIST</key>
	<array>
		<integer>-78</integer>
		<integer>-75</integer>
	</array>
	<key>RSSI_EXT_AGR</key>
	<integer>0</integer>
	<key>RSSI_EXT_LIST</key>
	<array>
		<integer>0</integer>
		<integer>0</integer>
	</array>
	<key>RSSI_UNIT</key>
	<integer>0</integer>
</dict>
</plist>
```

I wondered if, and how, the key/value fields lined up with any of the standard 802.11 ones. So, I started looking at some packet captures, and spoiler... (more below) but they do **not** map exactly and in some cases **not at all** :) 

The Apple <a target="_blank" href="https://developer.apple.com/documentation/bundleresources/information_property_list">plist</a> key output is also not consistent across major OS releases (irrespective of the `PHY` type!). Now I could be missing something, as the OS is now proprietary and closed, but some historical digging and research really helped out a lot! I was also interested in finding out _progammatically_ what the channel widths were without using <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a>. 

At this point I pivoted a bit to other command line utilities such as ```system_profiler``` looking at the ```SPAirPortDataType``` which actually gives (at least in macOS Ventura 13.x) some additional information about supported, currently connected, and recently scanned cached 🚩 WLAN networks (including the channel bands and widths ✅). 

<small>Note: There's nothing wrong with a cache 🚩 of scan information, just that we needed fresher data for our time series troubleshooting solution.</small>

```
mini# system_profiler SPAirPortDataType
Wi-Fi:

      Software Versions:
          CoreWLAN: 16.0 (1657)
          CoreWLANKit: 16.0 (1657)
          Menu Extra: 17.0 (1728)
          System Information: 15.0 (1502)
          IO80211 Family: 12.0 (1200.13.0)
          Diagnostics: 11.0 (1163)
          AirPort Utility: 6.3.9 (639.21)
      Interfaces:
        en1:
          Card Type: Wi-Fi  (0x14E4, 0x4378)
          Firmware Version: wl0: May 13 2023 07:20:48 version 18.20.383.15.7.8.150.. 
          MAC Address: 00:8a:76:xx:xx:xx
          Locale: ETSI
          Country Code: IE
          Supported PHY Modes: 802.11 a/b/g/n/ac/ax
          Supported Channels: ✅ 1 (2GHz), 2 (2GHz), 3 (2GHz), 4 (2GHz), 5 (2GHz),
 	6 (2GHz), 7 (2GHz), 8 (2GHz), 9 (2GHz), 10 (2GHz), 11 (2GHz), 12 (2GHz),
 	13 (2GHz), 36 (5GHz), 40 (5GHz), 44 (5GHz), 48 (5GHz), 52 (5GHz), 56 (5GHz),
 	60 (5GHz), 64 (5GHz), 100 (5GHz), 104 (5GHz), 108 (5GHz), 112 (5GHz), 
 	116 (5GHz), 120 (5GHz), 124 (5GHz), 128 (5GHz), 132 (5GHz), 136 (5GHz), 
 	140 (5GHz), 149 (5GHz), 153 (5GHz), 157 (5GHz), 161 (5GHz), 165 (5GHz) ✅
          Wake On Wireless: Supported
          AirDrop: Supported
          AirDrop Channel: 44
          Auto Unlock: Supported
          Status: Connected
          Current Network Information:
            podomere-legacy:
              PHY Mode: 802.11n
              Channel: 1 (2GHz, 20MHz) ✅
              Country Code: IE
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -75 dBm / -101 dBm
              Transmit Rate: 144
              MCS Index: 15
          Other Local Wi-Fi Networks: 🚩
            SDI AP 01:
              PHY Mode: 802.11
              Channel: 40 (5GHz, 80MHz) ✅
              Network Type: Infrastructure
              Security: WPA/WPA2 Personal
              Signal / Noise: -94 dBm / -96 dBm
		...
```

and an example with `6GHz`:

```
mini-6GHz# system_profiler SPAirPortDataType
Wi-Fi:

      Software Versions:
          CoreWLAN: 16.0 (1657)
          CoreWLANKit: 16.0 (1657)
          Menu Extra: 17.0 (1728)
          System Information: 15.0 (1502)
          IO80211 Family: 12.0 (1200.13.0)
          Diagnostics: 11.0 (1163)
          AirPort Utility: 6.3.9 (639.21)
      Interfaces:
        en1:
          Card Type: Wi-Fi  (0x14E4, 0x4388)
          Firmware Version: wl0: Apr 15 2023 07:46:47 version 23.20.84.0.40.50.94..
          MAC Address: 5c:1b:f4:xx:xx:xx
          Locale: ETSI
          Country Code: IE
          Supported PHY Modes: 802.11 a/b/g/n/ac/ax
          Supported Channels: ✅ 1 (2GHz), 2 (2GHz), 3 (2GHz), 4 (2GHz), 5 (2GHz),
	6 (2GHz), 7 (2GHz), 8 (2GHz), 9 (2GHz), 10 (2GHz), 11 (2GHz), 12 (2GHz), 
	13 (2GHz), 36 (5GHz), 40 (5GHz), 44 (5GHz), 48 (5GHz), 52 (5GHz), 56 (5GHz), 
	60 (5GHz), 64 (5GHz), 100 (5GHz), 104 (5GHz), 108 (5GHz), 112 (5GHz), 
	116 (5GHz), 120 (5GHz), 124 (5GHz), 128 (5GHz), 132 (5GHz), 136 (5GHz), 
	140 (5GHz), 149 (5GHz), 153 (5GHz), 157 (5GHz), 161 (5GHz), 165 (5GHz), ✅
	🚩 1 (6GHz), 5 (6GHz), 9 (6GHz), 13 (6GHz),🚩 17 (6GHz), 21 (6GHz), 25 (6GHz), 
	29 (6GHz), 33 (6GHz), 37 (6GHz), 41 (6GHz), 45 (6GHz), 49 (6GHz), 53 (6GHz), 
	57 (6GHz), 61 (6GHz), 65 (6GHz), 69 (6GHz), 73 (6GHz), 77 (6GHz), 81 (6GHz), 
	85 (6GHz), 89 (6GHz), 93 (6GHz) ✅
          Wake On Wireless: Supported
          AirDrop: Supported
          AirDrop Channel: 44
          Auto Unlock: Supported
          Status: Connected
          Current Network Information:
            podomere-legacy:
              PHY Mode: 802.11n
              Channel: 1 (2GHz, 20MHz) ✅
              Country Code: IE
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -69 dBm / -91 dBm
              Transmit Rate: 144
              MCS Index: 15
          Other Local Wi-Fi Networks: 🚩
            SKYFXTKT:
              PHY Mode: 802.11
              Channel: 11 (2GHz, 20MHz)
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -66 dBm / 0 dBm
...
```

Yay, well kinda... we could potentially parse the information here for what is needed but the scan data is not necessarily up to date... and, if you are on earlier **OS X** versions or **macOS 11.x** then ```system_profiler SPAirPortDataType``` doesn't contain the channel band **or** width (with the exception of the odd channel offset!).
```

laptop# system_profiler SPAirPortDataType
Wi-Fi:

      Software Versions:
          CoreWLAN: 16.0 (1657)
          CoreWLANKit: 16.0 (1657)
          Menu Extra: 17.0 (1728)
          System Information: 15.0 (1502)
          IO80211 Family: 12.0 (1200.12.2b1)
          Diagnostics: 11.0 (1163)
          AirPort Utility: 6.3.9 (639.15)
      Interfaces:
        en0:
          Card Type: AirPort Extreme
          Firmware Version: wl0: Aug 18 2021 22:48:53 version 18.50.40.11.7.8.123.. 
          MAC Address: 50:ed:3c:xx:xx:xx
          Locale: ETSI
          Country Code: IE
          Supported PHY Modes: 802.11 a/b/g/n/ac/ax
          Supported Channels: 🚩 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 36, 40, 
	44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 
	140, 149, 153, 157, 161, 165 🚩
          Wake On Wireless: Supported
          AirDrop: Supported
          AirDrop Channel: 44
          Auto Unlock: Supported
          Status: Connected
          Current Network Information:
            podomere-legacy:
              PHY Mode: 802.11n
              BSSID: 18:64:72:57:32:03
              Channel: 1 🚩
              Country Code: IE
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -68 dBm / -100 dBm
              Transmit Rate: 144
              MCS Index: 15
          Other Local Wi-Fi Networks:
            Horizon Wi-Free:
              PHY Mode: 802.11
              BSSID: ae:f8:cc:65:5a:96
              Channel: 6
              Country Code: GB
              Network Type: Infrastructure
              Security: WPA2 Enterprise
              Signal / Noise: -90 dBm / -92 dBm
```

<hr>

❓ So where am I going with all of this. I needed a **simple** way to establish, from the **command line**, and with a range of **OS X** / **macOS** versions (including `6GHz` on the new **M2** chip), what **band** we were operating in, quickly and reliably (using **consistent** commands!). 

**Note:** One [**PanSift**](/) feature is to find clean air space to use over a defined period of time, so it's really important to us. I wanted to write _simple_ logic to be able to discern and then recommend potentially clear **Wi-Fi** channels across `2.4GHz`, `5GHz`, and `6GHz` bands for a queried time range (hence the _channel widths_ would be needed too!). 

<hr>

I went back to the ```airport``` utility's `XML` output and decided to try and figure out what the hell was this `CHANNEL_FLAGS` key  🚩 and associated integer values like `10`. 

```
...
<key>CHANNEL_FLAGS</key>
<integer>10</integer>
...
```

It _seemed_ to be consistently present across most **OS X** and **macOS** versions and it was in both the `-I` getinfo and `-s` scan output, but what did it mean and what did it encode exactly? So, pcaps or it didn't happen! 

The packet captures I took below (via Wireshark) did indeed show `802.11` channel flags, but only really in the radiotap headers. Sure, there was the presence or absence of `HT`, `VHT`, or `HE` IEs and `Tags` for `Operating Class` but Apple wasn't giving me all the keys I needed via the `airport` utility.

<img src="/images/blog/podomere-legacy-pcap.png">
<br><br>

I was really at a loss for how the `CHANNEL_FLAGS` in the airport utility's output lined up with the monitor mode captures "_radiotap.channel.flags_". Try as I did, I could not get the integer values to line up with the HEX for networks like "_podomere-legacy_" in the **pcaps** above. 

In the `airport` utility output there were some `HT`, `VHT`, and `HE` keys in scan data, but selective ones like the odd channel offset or center and secondary channel. Helpful, but super messy logic if trying to test for the absence or presence of lots of keys (especially for scans that still lacked crucial data).

🚩 Basically though, an integer value of `10` doesn't map to a HEX value of `0x0480`! I racked my brain. Decimal `10` is `0xA` i.e. `A` in hex. Hex `0x0408` is `1032` in decimal (base `10`) as an integer. None of the networks or values lined up 🚩. 

Then I started wondering if there were only _nibbles_ of the bitmask being used somehow? **Desperation had set in**.

<hr>

💡 It took me a while, but then I found this <a target="_blank" href="https://newosxbook.com/articles/11208ellpA-II.html">**https://newosxbook.com/articles/11208ellpA-II.html**</a> from [Jonathan Levin](https://twitter.com/technologeeks) and some really **great** info referencing the early Apple `802.11` headers and specifically "**apple80211_var.h**". 

His post also provided an old copy of the header files! (🙏 Jonathan)! They were from an old **OS X 10.5 SDK** (before Apple pulled the file). I eagerly read his <a target="_blank" href="https://newosxbook.com/articles/11208ellpA-II.html">post</a> from 2015 and dove in to the header files... yikes, look at the below!

<hr>

<small>**Note:** These headers were what I **really needed** ✅.</small> 

```
enum apple80211_channel_flag
 {
 	APPLE80211_C_FLAG_NONE		= 0x0,		// no flags
 	APPLE80211_C_FLAG_10MHZ		= 0x1,		// 10 MHz wide
 	APPLE80211_C_FLAG_20MHZ		= 0x2,		// 20 MHz wide   ✅
 	APPLE80211_C_FLAG_40MHZ		= 0x4,		// 40 MHz wide   ✅
 	APPLE80211_C_FLAG_2GHZ		= 0x8,		// 2.4 GHz       ✅
 	APPLE80211_C_FLAG_5GHZ		= 0x10,		// 5 GHz         ✅
 	APPLE80211_C_FLAG_IBSS		= 0x20,		// IBSS supported
 	APPLE80211_C_FLAG_HOST_AP	= 0x40,		// HOST AP mode supported
 	APPLE80211_C_FLAG_ACTIVE	= 0x80,		// active scanning supported
 	APPLE80211_C_FLAG_DFS		= 0x100,	// DFS required
 	APPLE80211_C_FLAG_EXT_ABV	= 0x200,	// If 40 Mhz, extension channel above.
 											// If this flag is not set, then the
 											// extension channel is below.
};
```
<small>And they look quite different from the _radiotap.headers_ **channel flags** from the pcap :)</small>

<center><img src="/images/blog/podomere-legacy-pcap-subset.png"></center>
<br><br>

OK, now we are getting somewhere. The `CHANNEL_FLAGS` for my `2GHz` , `20MHz` wide "**podomere-legacy**" network output from `airport -Ix` is below: 

```
...
<key>CHANNEL_FLAGS</key>
<integer>10</integer>
...
```

Decimal `10` is `1010` in binary.


```
enum apple80211_channel_flag
 {
 	APPLE80211_C_FLAG_NONE		= 0x0,		// no flags
 	APPLE80211_C_FLAG_10MHZ		= 0x1,		// 10 MHz wide
 	APPLE80211_C_FLAG_20MHZ		= 0x2,		// 20 MHz wide  ✅
 	APPLE80211_C_FLAG_40MHZ		= 0x4,		// 40 MHz wide
 	APPLE80211_C_FLAG_2GHZ		= 0x8,		// 2.4 GHz      ✅
 	APPLE80211_C_FLAG_5GHZ		= 0x10,		// 5 GHz
...
}
```

We can then left pad the value to `16` bits (as only `10` bits are listed in the old header file) or perhaps we should use a max of `32`, as this is a bitmask for a **uint32** AFAIK!. Anyway, I padded it to `16` bits for now.

Decimal **10** in `16` bit binary is <span style="font-size: 3em;">`0000` `0000` `0000` `1010`</span><br><br>

This maps the LSB(Least Significant Bit) second position (from the right) for (`0x2`) -> `20MHz` wide ✅ and the fourth (`0x8`) -> `2.4GHz` ✅

<hr>

✅ My "__podomere-a__" `5GHz` test `802.11ac` network is `80MHz` wide and its `CHANNEL_FLAGS` are decimal integer **1040**. I figured out from test scans and captures that some of the higher order MSB(Most Significant Bits) were **on** e.g. `1` for `80MHz`.

```
...
<key>CHANNEL_FLAGS</key>
<integer>1040</integer>
...
```

Decimal **1040** in `16` bit binary is <span style="font-size: 3em;">`0000` `0100` `0001` `0000`</span><br><br>The MSB(Most Significant Bit) position `6` (from the left) represents decimal **1024** (the `80MHz` bit?) + position `12` represents decimal value **16** (the `5GHz` bit, which we know for sure) i.e. **1024** + **16** = **1040**. 

```
enum apple80211_channel_flag
 {
 	APPLE80211_C_FLAG_NONE		= 0x0,		// no flags
 	APPLE80211_C_FLAG_10MHZ		= 0x1,		// 10 MHz wide
 	APPLE80211_C_FLAG_20MHZ		= 0x2,		// 20 MHz wide
 	APPLE80211_C_FLAG_40MHZ		= 0x4,		// 40 MHz wide
 	APPLE80211_C_FLAG_2GHZ		= 0x8,		// 2.4 GHz      
 	APPLE80211_C_FLAG_5GHZ		= 0x10,		// 5 GHz        ✅
...
 	/** APPLE80211_C_FLAG_80MHZ 	= 0x400,*/ 	// 80MHz  ??? 	✅ <---- This are my guesses ???
 	/** APPLE80211_C_FLAG_160MHZ 	= 0x800,*/ 	// 160MHz ??? 	   <---- Can we keep going for 320MHz
}
```


And these bits marry with other `80MHz` wide `5GHz` networks... but more testing on the way for `160MHz` and `6GHz` !

<hr>

❓ But if anyone has access to a newer "**apple80211_var.h**" or any suggestions, I would be eternally grateful!

<hr>

✅ I then set about applying this learning to the `XML` plist based scan data which also has `CHANNEL_FLAGS` in the output from the command `airport -s -x`. This will be rolled out in the next [**PanSift**](/) agent update from the current version `0.6.1` to `0.6.3` real soon!

<hr>

It means we can infer things like **if** the bits for `2.4GHz` and `5GHz` are **not** on e.g. both `0` **and** `0`, then it's a `6GHz` network for now (until more spectrum is released in the future and more bits needed ?)

This `CHANNEL_FLAGS` approach works for old versions of **OS X** and **macOS**, so Apple, please don't deprecate the `airport` utility, I'd have to do some funky stuff with Python and <a target="_blank" href="https://pypi.org/project/pyobjc/">**PyObjC**</a> :)
<hr>
<br>

**Summary:** The airport utility is a very handy command line tool. It outputs additional information in `XML` format if you ask for it. This additional data summarizes some very useful fields about **Wi-Fi** networks around you but in a custom format. With some digging, building on others deep work, and then some inferences from observations, it has saved writing custom scripts or a re-write of the whole PanSift agent. <a target="_blank" href="https://developer.apple.com/documentation/corewlan">**CoreWLAN**</a> remains the source of truth for querying what the OS sees in the air but there are other ways to get at this data. I hope you got something out of this exploration and it might motivate you to poke around a little deeper yourself or try one of our free [**PanSift**](/) agents that give you historical insight in to your **Wi-Fi** and even some recommendations on better channels to use ;)
<br>
<br>
📝 Big ups to <a target="_blank" href="https://twitter.com/technologeeks">Jonathan Levin</a> and I'd love any reader comments, suggestions, ideas, or criticisms you have [**here 💬**](/contact).
<br>
<br>
