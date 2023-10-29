---
title: "How To Check Common Wifi Connectivity"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "251.23.77.225"
date: 2023-10-29T15:13:12+00:00
draft: false
---

## Internet Addressing
On the Internet you may have a Public IPv4 address like ```251.23.77.225``` or an IPv6 address like ```2000:ad23:38ac:3e6f:7529:97c3:1fa6:d82```. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```2a:9f:0b:18:27:a9```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

## Accessing the Web
To get to a web page like https://hilll.io you initially access a DNS server to translate the host portion (hilll) combined with the Top Level Domain (io) of the URL, to an IP address like ```104.126.69.159```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```

## Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```192.168.125.42``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

### IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.125.42    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:dd92:940f:ae42:11c5%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.

## DHCP for IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {91.55.71.71, 98.30.140.185}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2a:9f:0b:18:27:a9
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ab:8f:1c:09:38:6b
}</pre>

## Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

### Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.13.3```, ```11.3.8```, or ```12.3.2```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

#### Scripts
One very helpful tool on OSX/macOS is ```sudo wdutil info``` which gives a dump to the CLI of current wireless related settings, and this can be configured to also generate specific logs for troubleshooting. Additionally, and perhaps more comprehensively the ```sysdiagnose``` tool can be used to generate a whole host of logs (though much is point in time only in relation to wireless just like wdutil).

```sudo nohup /usr/bin/sysdiagnose -u &``` will run it in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you want to run it *interactively* (though there is not much interaction) you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background it should open Finder in the correct location or you can then navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just beware the file sizes of about 300MB more or less.

<br><br>
## Possible Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=QBiBPbME5tY" data-lity><img src="https://i.ytimg.com/vi/QBiBPbME5tY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=QBiBPbME5tY" data-lity>MCS Table and How You Can Use it</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=V05dSfoopLE" data-lity><img src="https://i.ytimg.com/vi/V05dSfoopLE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=V05dSfoopLE" data-lity>Know Your PHY</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1qeGT-x5M6A" data-lity><img src="https://i.ytimg.com/vi/1qeGT-x5M6A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1qeGT-x5M6A" data-lity>Wi-Fi 7 Heaven or Wi-Fi 7 Deadly Sins?   David Coleman   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hV3xDxkuM8I" data-lity><img src="https://i.ytimg.com/vi/hV3xDxkuM8I/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hV3xDxkuM8I" data-lity>Pwnie Express PwnPhone Wi-Fi Pentetration Testing   Rick Farina   WLPC US Dallas 2015</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qrrZFlnxA_s" data-lity><img src="https://i.ytimg.com/vi/qrrZFlnxA_s/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qrrZFlnxA_s" data-lity>Deploy Wi-Fi 6E Now; or Wait For Wi-Fi 7?   Jatin Parekh   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
