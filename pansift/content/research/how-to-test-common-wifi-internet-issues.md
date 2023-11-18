---
title: "How To Test Common Wifi Internet Issues"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "214.10.16.152"
date: 2023-11-18T21:15:52+00:00
draft: false
---

## Understanding IP Addresses

When connecting to the internet, you are assigned a Public IPv4 address such as ```214.10.16.152``` or an IPv6 address like ```2000:7bb5:e514:1057:25a0:e0fa:8554:f00c```. You can verify these addresses on [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, conveying these addresses, or even referencing MAC addresses like ```59:80:aa:09:a3:84```, can be prone to errors and become complicated fast. Furthermore, this method does not provide any historical data, particularly during previous issues.
## A Guide to Navigating the World Wide Web
Accessing a website such as https://nikolaus.biz involves the initial step of reaching a DNS server to translate the host portion (nikolaus) combined with the Top Level Domain (biz) of the URL into an IP address like ```163.93.195.58```. With each web request, your computer and browser send their type, for instance: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Understanding the Significance of Default Gateways
The default gateway is typically automatically assigned via DHCP. It is in the form of an address such as ```10.19.115.118``` (usually ending in .1 or .254 depending on the scope size) and serves as the point where your computer sends all its traffic to be routed onwards. For ```IPv6```, one can refer to the detailed explanation provided in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or check on Mac or Linux using the following code:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.19.115.118    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:826e:5470:da38:522f%en0  UGcg   en0
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
domain_name_server (ip_mult): {235.183.21.62, 226.12.148.217}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 59:80:aa:09:a3:84
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e6:df:59:36:b4:a9
}</pre>




## Resolving Issues with Wired or Wireless Connections
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are currently using - whether it's 10.15.4, 11.3.4, or 12.3.7 - there are various troubleshooting tools available. However, the manual actions and scripts may not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that are embracing remote work and the idea of Working From Anywhere (WFA).
#### Useful Built-in Scripts
A very useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it only pertains to wireless at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz`. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, although it will come with a privacy warning. When not run in the background, it will open Finder in the correct location, or you can navigate to `/var/tmp`. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
