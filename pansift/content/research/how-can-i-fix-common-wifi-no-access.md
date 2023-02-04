---
title: "How Can I Fix Common Wifi No Access"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "164.147.87.111"
date: 2023-02-04T17:07:42+00:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like ```164.147.87.111``` or an IPv6 address like ```2000:d4e1:91db:9cfc:7aed:4d12:9824:e5c5```. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```bb:f5:a4:fa:e8:2d```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://stracke.name you initially access a DNS server to translate the host portion (stracke) combined with the Top Level Domain (name) of the URL, to an IP address like ```44.36.171.61```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.30.17.129``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.30.17.129    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a396:4133:8b3:cc8%en0  UGcg   en0
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
domain_name_server (ip_mult): {174.139.50.236, 251.139.54.100}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr bb:f5:a4:fa:e8:2d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b9:70:c8:87:be:5d
}</pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.11.9```, ```11.1.4```, or ```12.2.7```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=z2HZ7BJ6rGw" data-lity><img src="https://i.ytimg.com/vi/z2HZ7BJ6rGw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=z2HZ7BJ6rGw" data-lity>What Is Wi-Fi HaLow-802.11ah?   Scott McDermott   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=SgL53Lh5TJE" data-lity><img src="https://i.ytimg.com/vi/SgL53Lh5TJE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=SgL53Lh5TJE" data-lity>Wi-Fi 6E: It’s Almost Like Wi-Fi is Being Born Again!   David Coleman   WLPC 2022 Phoenix</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=BzPdEnHVc1Y" data-lity><img src="https://i.ytimg.com/vi/BzPdEnHVc1Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=BzPdEnHVc1Y" data-lity>60GHZ What you need to know about 802 11ad and 802 11ay   Jason Hintersteiner   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hV3xDxkuM8I" data-lity><img src="https://i.ytimg.com/vi/hV3xDxkuM8I/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hV3xDxkuM8I" data-lity>Pwnie Express PwnPhone Wi-Fi Pentetration Testing   Rick Farina   WLPC US Dallas 2015</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r_ERuoLBFoM" data-lity><img src="https://i.ytimg.com/vi/r_ERuoLBFoM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r_ERuoLBFoM" data-lity>High Efficiency Wi-Fi- 802.11ax   Dr. Eldad Perahia   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
