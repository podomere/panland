---
title: "How Can I Understand Wifi Internet Issues"
subtitle: "Customer Journey?"
layout: research
ip_v4_address: "206.49.155.165"
date: 2023-11-18T21:02:13+00:00
draft: false
---

## How Internet Addressing Works: A Simplified Explanation

When it comes to the Internet, you're assigned a Public IPv4 address such as ```206.49.155.165``` or an IPv6 address like ```2000:446e:4671:c280:c49c:93d7:1caa:ef47```. A quick way to check this is by visiting [https://test-ipv6.com/](https://test-ipv6.com/). For those who aren't tech-savvy, attempting to communicate these addresses or even mentioning MAC addresses like ```e6:5e:05:74:f7:3b``` can be prone to errors and can become complex. Moreover, this method lacks historical data, especially regarding past issues.
## Navigating the World Wide Web

Accessing a website such as https://brekke.com involves reaching out to a DNS server to convert the host portion (brekke) combined with the Top Level Domain (com) of the URL into an IP address, such as ```146.230.18.56```. When making web requests, your computer and browser actually include its type, for example:
```<br>Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically configured address through DHCP, such as ```192.0.0.39``` (although they usually end in .1 or .254 depending on the scope size). This gateway is where your computer sends all its traffic to be routed onwards. We have an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for ```IPv6```, but you can also check on Mac or Linux with:
```<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.39    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e0d6:58bd:701c:5d5%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.
<br>

## Debugging DHCP for both IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {5.93.209.178, 191.120.255.65}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e6:5e:05:74:f7:3b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2b:92:85:6c:bf:8d
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transferring data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
No matter which version you are using - whether it's OSX/macOS 10.12.6, 11.2.5, or 12.3.7 - there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a series of connected values over a period of time. This is where automated remote troubleshooting becomes valuable, especially for remote work and Work From Anywhere (WFA) teams.
#### Utilizing In-Built Scripts for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info`, which gives a dump of the current wireless settings in the CLI. It can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a variety of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

To run `sysdiagnose` in the background and write logs to `/var/tmp/<blah>.tar.gz`, use the command `sudo nohup /usr/bin/sysdiagnose -u &`. For an *interactive* run, which doesn't require much interaction, use `sudo /usr/bin/sysdiagnose` and note that it will give a privacy warning. If not run in the background, it should open Finder in the correct location or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
