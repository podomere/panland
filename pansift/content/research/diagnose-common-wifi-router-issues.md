---
title: "DiagnOSe Common Wifi Router Issues"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "223.170.172.240"
date: 2023-11-18T21:09:37+00:00
draft: false
---

## Understanding Internet Addressing

When connected to the Internet, you are assigned a unique address, either in the form of Public IPv4 like ```223.170.172.240``` or an IPv6 address like ```2000:f204:ba10:9459:9f9c:1476:132f:4ab7```. You can verify your assigned address at [https://test-ipv6.com/](https://test-ipv6.com/). However, the complexity of communicating these addresses, as well as MAC addresses like ```06:e7:a5:db:34:85```, poses a challenge, particularly for those who are not technically inclined. Moreover, historical data cannot be obtained easily, especially pertaining to past issues.
## Navigating the World Wide Web
Accessing a website such as https://ratke.io requires you to first contact a DNS server to convert the host portion (ratke) combined with the Top Level Domain (io) of the URL into an IP address like ```5.87.11.46```. With each web request, your computer and browser also transmit information about its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
Your default gateway is typically an address that is automatically configured through DHCP. This gateway, such as ```192.0.0.76``` (although it usually ends in .1 or .254, depending on the scope size), is where your computer forwards all its traffic to be routed further. For ```IPv6```, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can perform checks on Mac or Linux with the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.76    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4d11:6942:1640:ddca%en0  UGcg   en0
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
domain_name_server (ip_mult): {157.172.136.186, 146.3.112.250}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 06:e7:a5:db:34:85
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 29:e6:e4:4c:2b:58
}</pre>




## Solutions for Resolving Issues with Wired and Wireless Connections

When transferring data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Efficient Measures for Apple macOS / OSX Users

Regardless of the version of OSX/macOS you are operating on - be it 10.11.4, 11.0.3, or 12.3.8 - there exists a variety of tools to address troubleshooting issues. However, these manual actions and scripts fail to provide a sequence of correlated values over a period of time. This is where automated remote troubleshooting becomes crucial, particularly for teams that have adopted remote work and the Work From Anywhere (WFA) concept.
#### Effective Built-in Scripts That Offer Assistance

An extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a comprehensive dump of current wireless settings to the CLI, and can also be configured to generate specific troubleshooting logs. Furthermore, a more extensive tool, `sysdiagnose`, can be utilized to generate a wide range of logs (although much of it is only relevant to wireless at a specific moment, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background, writing logs to `/var/tmp/<blah>.tar.gz`. If you prefer to run it interactively, you can execute `sudo /usr/bin/sysdiagnose`, which will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Just keep in mind that the file sizes are approximately 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
