---
layout: post
date: "2023-10-27T15:35:00"
subtitle: From Data to Information in Plain Sight
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
image: /images/blog/channel_flags_v2.png
published: true
title: Apple, an Airport, 802.11 Channel Flags, and Some Binary
---

Apple M2 chips support the `6GHz` RF(Radio Frequency) spectrum for **Wi-Fi**. If you don't know what that means, then this post is probably not for you. However, if you do know your `2.4GHz` from your `5GHz` , then read on for some reverse engineering relating to; packet captures, custom bitmasks, and how to figure out which **WLAN bands** and **channel widths** are around you and your Mac (without having to use Apple's CoreWLAN or clicking in the UI).

This is not an `IEEE 802.11` wireless LAN history lesson, but suffice to say, the `802.11` standard and protocol (that underpins **Wi-Fi**) is revised and updated with new functionality relatively frequently and has a naming convention that uses lettered versioning such as `802.11a` , `802.11b` , `802.11g` , `802.11n` , `802.11ac` , `802.11ax` , and `802.11be`. 

Each have some unique properties, but often build off what has come before. There are often differences in **RF** bands, modulation, encoding, and then some sprinkles of additional features all in an attempt to pack greater amounts of data in to radio waves. As our thirst for data and usage grows, each successive standard tries to bundle ever more bits in to the air. Partly, this is an attempt to have devices get on and off the medium as quickly as possible. Only one device can speak on one frequency at a time (half-duplex) within a certain range. **Wi-Fi** is a shared medium designed to serve multiple devices _almost_ concurrently (effectively within a shared cell). It tries to avoid collisions and is unable to detect them, but I digress...

So, one of the latest'ish IEEE standards for Wi-Fi is `802.11ax` and it led to the Wi-Fi Alliance re-branding `802.11ax` as **Wi-Fi 6** for marketing purposes. 

🚩 And here's where my problem begins and continues! 🚩 

`802.11ax` for **Wi-Fi 6** is somewhat like `802.11n` in that it runs on both the `2.4GHz` and `5GHz` frequency bands. Irrespective of this `802.11ax` `PHY mode` , channel numbers are unique across `2.4GHz` and `5GHz`. 

All good so far. This means that if you can quickly find out the active/primary channel, any channels from `1 - 14` are in the `2.4GHz` band and any channel from `32 - 177` are in the `5GHz` band. 

A **simple heuristic** that _had_ worked for a long time. 

But apparently naming things has to get harder 🚩. The amendment to `802.11ax` that enabled the `6GHz` frequency range (**yay!**) was named by the Wi-Fi Alliance as **Wi-Fi 6E**. They effectively broke their own simple marketing naming standard and tacked on letters rather than incremental digits to differentiate capabilities (and the associated benefits). 

Not only is this somewhat confusing from a consumer perspective (looking for *Wi-Fi **6*** vs *Wi-Fi **6E*** capable access points and devices) but **Wi-Fi 6E** also **re-uses existing channel numbers** in the `6GHz` range. This channel catastrophe however is perhaps a legacy thing and not just an IEEE car crash. 

So the previously simple channel based heuristic **now fails** to correctly and easily identify the frequency band! 
<br>
<br>
`Channel 1` can now be either in the `2.4GHz` or `6GHz` band. 
<br>
<br>
🚩 In fact, the channel numbers `1`,`3`,`5`,`7`,`9`,`11`,`13`,`149`,`151`,`157`,`161`,`165`,`169`,`173`,`177` overlap directly from the `2.4GHz` and `5GHz` bands **with** the channel numbers (but not frequencies) in the `6GHz` range.  

So how do you know which channel is in which band ❓ 

Conveniently, the **macOS** UI(User Interface) will tell you (if you _Alt or Option Click_ the Wi-Fi airport icon!). But what if you want to find out progammatically via the command line and without learning new languages?

The most reliable way to get at WLAN information in **macOS** is actually to query the [**CoreWLAN**](https://developer.apple.com/documentation/corewlan) framework. [**CoreWLAN**](https://developer.apple.com/documentation/corewlan), as Apple states, _"provides APIs for querying AirPort interfaces and choosing networks."_ To natively query this information requires the ability to write [**Objective-C**](https://en.wikipedia.org/wiki/Objective-C) formatted code (which I don't currently have) or use [**Apple's Swift**](https://developer.apple.com/swift/) language. 

As an ex-network engineer with a computer science degree (and a some proficiency in software development), I've been building [**PanSift**](/) using Ruby on Rails, Javascript, and good old BASH scripting. Much of the design of PanSift is outlined [**here**](/design) (in case you're interested), but whereas I could previously use the `airport` command line utility to rapidly infer frequencies from channels, with the introduction of `6GHz`, it became problematic, or did it?

The Apple macOS airport utility can be used from the command line to output information about the currently connected Wi-Fi network or scan surrounding networks. It's super handy for basic scripting but has limitations. 

Some people alias or soft link the `airport` binary ```/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport``` to facilitate just typing `airport` directly in the terminal without modifying any paths:

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

I had been using the command line airport utility in the [PanSift](/) agent to grab information about the currently connected WLAN and also to **scan** what Wi-Fi networks were around using the `-s` scanning switch (inc. some other switches). You can output some very useful information to the terminal in human readable format.

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

But you can actually output more information from the airport utility using the additional `-x` flag to get an `XML` _plist_ formatted output (either for current info or to scan). 

🚩 Keep an eye on the `CHANNEL_FLAGS` key, value, and value type in the output below...

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

I wondered if and how the key/value fields lined up with any of the standard 802.11 ones, so I started looking at some packet captures, and spoiler... (more below) but they do **not** map exactly and in some cases **not at all** :) 

The Apple [plist](https://developer.apple.com/documentation/bundleresources/information_property_list) keys outputed are also not consistent across major OS releases (irrespective of the `PHY` type!). Now I could be missing something, as the OS is now proprietary and closed, but some historical digging and research really helped out a lot! I was also interested in finding out _progammatically_ what the channel widths are without [**CoreWLAN**](https://developer.apple.com/documentation/corewlan). 

At this point I pivoted a bit to poke around using other command line utilities such as ```system_profiler SPAirPortDataType``` which actually gives (at least in macOS Ventura 13.x) some added information about supported, currently connected, and recently scanned cached 🚩 networks (including the channel bands and widths ✅). 

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
            SKYFXTKT:
              PHY Mode: 802.11
              Channel: 6 (2GHz, 20MHz)
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -74 dBm / -96 dBm
		...
```

Yay, well kinda... we could potentially parse the information here for what is needed but the scan data is not necessarily up to date... and, if you are on earlier OS X versions or macOS 11.x then the command ```system_profiler SPAirPortDataType``` doesn't contain the band **or** width (with the exception of the odd channel offset!).
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
            DIRECT-19-HP OfficeJet Pro 9010:
              PHY Mode: 802.11
              BSSID: 86:2a:fd:99:6b:19
              Channel: 6
              Network Type: Infrastructure
              Security: WPA2 Personal
              Signal / Noise: -86 dBm / -92 dBm
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

❓ So where am I going with all of this. I needed a **simple** way to establish, from the command line, and with a range of OS X/macOS versions (including `6GHz` on the new **M2** chip), what **band** we were operating in both quickly and reliably (using **consistent** commands). I wanted to write _simple_ logic to be able to discern and then recommend potentially clear Wi-Fi channels for use a specified time period (hence the channel widths would be needed too!). 

<hr>

I went back to the ```airport``` utilities `XML` output and decided to try and figure out what the hell was contained in the `CHANNEL_FLAGS` key  🚩 (and associated values). It _seemed_ to be consistently present across most **OS X** and **macOS** versions. It looked like a simple decimal value, but what did it mean and what did it encode exactly? 

```
...
<key>CHANNEL_FLAGS</key>
<integer>10</integer>
...
```

The packet captures I took did indeed show `802.11` channel flags but only really in the radiotap headers. Sure, there was the presence or absence of `HT`, `VHT`, or `HE` IEs and `Tags` for `Operating Class` but Apple wasn't giving them to me via the `airport` utility. 

<img src="/images/blog/podomere-legacy-pcap.png">
<br><br>

I was really at a loss for how the `CHANNEL_FLAGS` in the airport utility's output lined up with the monitor mode captures "_radiotap.channel.flags_". Try as I did, I could not get the integer values to line up with the HEX for networks like "_podomere-legacy_" in the **pcaps** above.

How does an integer of `10` map to a HEX value of `0x0480`? Maybe I should have been looking elsewhere in one of the "Tags" but how would I know in advance if there was going to be `HT`, `VHT`, or `HE` tags. Messy logic that would be slow and tediuos?

I racked my brain. Decimal `10` is `0xA` i.e. `A` in hex. Hex `0x0408` is `1032` in decimal (base 10) as an integer. None of the networks or values lined up 🚩. 

Then I started wondering if there were only nibbles of the bitmask being used somehow? Desperation, I know.

<hr>

💡 It took me a while, but then I found this [**https://newosxbook.com/articles/11208ellpA-II.html**](https://newosxbook.com/articles/11208ellpA-II.html) from [Jonathan Levin](https://twitter.com/technologeeks) and some great info referencing the early Apple 80211 headers -> specifically **apple80211_var.h**. 

His post also provided an old copy of the header files! (🙏 Jonathan)! They were from an old **OS X 10.5 SDK** (before Apple pulled the file). I eagerly read his [post](https://newosxbook.com/articles/11208ellpA-II.html) from 2015 and dove in to the header files... yikes, look at the below!

<hr>

<small>**Note:** These headers were what I **really needed** ✅.</small> 

```
enum apple80211_channel_flag
 {
 	APPLE80211_C_FLAG_NONE		= 0x0,		// no flags
 	APPLE80211_C_FLAG_10MHZ		= 0x1,		// 10 MHz wide
 	APPLE80211_C_FLAG_20MHZ		= 0x2,		// 20 MHz wide  ✅
 	APPLE80211_C_FLAG_40MHZ		= 0x4,		// 40 MHz wide
 	APPLE80211_C_FLAG_2GHZ		= 0x8,		// 2.4 GHz  ✅
 	APPLE80211_C_FLAG_5GHZ		= 0x10,		// 5 GHz
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

OK, now we are getting somewhere. The `10` integer for "**podomere-legacy**" in the `airport -Ix` `XML` plist output: 

```
...
<key>CHANNEL_FLAGS</key>
<integer>10</integer>
...
```

is `1010` in binary. This maps to (8) `2.4GHz` and (2) giving `20MHz` wide from the Apple header definitions! 


```
enum apple80211_channel_flag
 {
 	APPLE80211_C_FLAG_NONE		= 0x0,		// no flags
 	APPLE80211_C_FLAG_10MHZ		= 0x1,		// 10 MHz wide
 	APPLE80211_C_FLAG_20MHZ		= 0x2,		// 20 MHz wide  ✅
 	APPLE80211_C_FLAG_40MHZ		= 0x4,		// 40 MHz wide
 	APPLE80211_C_FLAG_2GHZ		= 0x8,		// 2.4 GHz  ✅
...
}
```
Then we can left pad the value (we could pad to 16 [as only 10 bits listed in the old header file] or perhaps a max of 32 bits as this is a bitmask for a **uint32** AFAIK!]. I padded it to 16 for now as I figured out from test scans and captures that some of the higher order bits were **on** e.g. `1` for 80MHz networks (but if anyone has access to a newer "**apple80211_var.h**" I would be eternally grateful!).

<hr>

✅ I then set about applying this learning to the `XML` scan data which also contains Apple's `CHANNEL_FLAGS` in the output from `airport -s -x`. This will be rolled out in the next PanSift agent update from version `0.6.1` current to `0.6.2` soon.

<hr>

With a little bit more testing on `6GHz` using `80MHz` and `160MHz` channel widths, I can establish the exact higher order bits relevance (without access to the latest header files). 

It means we can also infer things like **if** the bits for `2.4GHz` and `5GHz` are **not** on e.g. both `0` **and** `0`, then it's a `6GHz` network via `CHANNEL_FLAGS`. This `CHANNEL_FLAGS` approach works for old versions of OS X and macOS for now, so Apple, please don't deprecate the `airport` utility, I'll have to do some funky stuff with Python and [PyObjC](https://pypi.org/project/pyobjc/) :)

Big ups to [Jonathan Levin](https://twitter.com/technologeeks)!
<br>
<br>
