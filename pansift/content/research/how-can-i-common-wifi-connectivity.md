---
title: "How Can I Common Wifi Connectivity"
subtitle: "Two-way Street?"
layout: research
ip_v4_address: "149.11.80.237"
date: 2022-11-19T19:13:09+00:00
draft: false
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like ```149.11.80.237``` or an IPv6 address like ```2000:8d5:65b3:3f7:3fe8:9f1a:d05d:56e5```. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```a7:73:49:c4:95:87```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://bradtke.info you initially access a DNS server to translate the host portion (bradtke) combined with the Top Level Domain (info) of the URL, to an IP address like ```219.214.86.81```. Your computer and browser actually sends its type with all web requests e.g. <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.27.254.41``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.254.41    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2f4e:24a7:719d:c7a8%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.

# DHCP for IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {240.147.26.13, 178.196.107.169}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a7:73:49:c4:95:87
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c0:83:e8:10:71:99
}</pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.15.2```, ```11.6.5```, or ```12.3.3```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

### Scripts
One very helpful tool on OSX/macOS is ```sudo wdutil info``` which gives a dump to the CLI of current wireless related settings, and this can be configured to also generate specific logs for troubleshooting. Additionally, and perhaps more comprehensively the ```sysdiagnose``` tool can be used to generate a whole host of logs (though much is point in time only in relation to wireless just like wdutil).

```sudo nohup /usr/bin/sysdiagnose -u &``` will run it in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you want to run it *interactively* (though there is not much interaction) you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background it should open Finder in the correct location or you can then navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just beware the file sizes of about 300MB more or less.

<br><br>
# Possible Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=vtfnlgTj_-A" data-lity><img src="https://i.ytimg.com/vi/vtfnlgTj_-A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=vtfnlgTj_-A" data-lity>Indoor Location Detection using Wifi   Marko Tisler   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=V05dSfoopLE" data-lity><img src="https://i.ytimg.com/vi/V05dSfoopLE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=V05dSfoopLE" data-lity>Know Your PHY</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=gjdHpZWxujA" data-lity><img src="https://i.ytimg.com/vi/gjdHpZWxujA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=gjdHpZWxujA" data-lity>OFDMA – The Secret Sauce of 802.11ax   David Coleman   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=QBiBPbME5tY" data-lity><img src="https://i.ytimg.com/vi/QBiBPbME5tY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=QBiBPbME5tY" data-lity>MCS Table and How You Can Use it</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
