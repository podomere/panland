---
title: "How To Fix Wifi No Access"
subtitle: "Streamline?"
layout: research
ip_v4_address: "252.32.39.253"
date: 2022-05-05T14:28:25+01:00
draft: false
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like ```252.32.39.253``` or an IPv6 address like ```2000:ec32:d2c:bf3a:7716:6bbc:d60e:8fc4```. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```d7:a1:2e:4e:26:93```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://krajcik.io you initially access a DNS server to translate the host portion (krajcik) combined with the Top Level Domain (io) of the URL, to an IP address like ```21.203.123.168```. Your computer and browser actually sends its type with all web requests e.g. <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```192.0.0.224``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.224    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 actvive the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8a3d:da7:e489:4735%en0  UGcg   en0
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
domain_name_server (ip_mult): {174.167.230.25, 96.53.46.246}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d7:a1:2e:4e:26:93
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 22:b6:39:e0:b8:d3
}</pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.13.1```, ```11.1.3```, or ```12.3.8```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=3jqYwFQSqnE" data-lity><img src="https://i.ytimg.com/vi/3jqYwFQSqnE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=3jqYwFQSqnE" data-lity>802.11 Aggregation - Friend or Foe?     Wes Purvis   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=8GQaWCjS-vk" data-lity><img src="https://i.ytimg.com/vi/8GQaWCjS-vk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=8GQaWCjS-vk" data-lity>WLAN Analysis Tricks   Peter Mackenzie   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=vtfnlgTj_-A" data-lity><img src="https://i.ytimg.com/vi/vtfnlgTj_-A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=vtfnlgTj_-A" data-lity>Indoor Location Detection using Wifi   Marko Tisler   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=4Ua2lI6HBhE" data-lity><img src="https://i.ytimg.com/vi/4Ua2lI6HBhE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=4Ua2lI6HBhE" data-lity>Effects of 802.11k/r/v   Andrew McHale   WLPC Prague 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qRs_5K4EgnM" data-lity><img src="https://i.ytimg.com/vi/qRs_5K4EgnM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qRs_5K4EgnM" data-lity>802.11ax Lessons Learned   Wes Purvis   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
