---
title: "How Can I Understand Common Wifi No Access"
subtitle: "Snackable Content?"
layout: research
ip_v4_address: "193.111.104.66"
date: 2023-11-18T21:23:15+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a unique Public IPv4 or IPv6 address, such as ```193.111.104.66``` or ```2000:fe1b:d335:ff6c:9933:6300:cc77:d85b```. Verifying this information can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing and communicating these addresses can be challenging, especially when dealing with MAC addresses like ```32:6f:2e:03:8c:e6```, and doesn't provide historical data about previous issues.
## Navigating the World Wide Web
When accessing a website like https://cole.co, your computer first contacts a DNS server to transform the host part (cole) and the Top Level Domain (co) of the URL into an IP address, such as ```214.4.227.194```. All web requests from your computer and browser include the type, as seen in the example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
Your default gateway is typically assigned automatically via DHCP, and commonly ends in .1 or .254, depending on the scope size, such as ```192.0.0.192```. This gateway serves as the point where your computer forwards all its traffic for routing. For ```IPv6``` troubleshooting, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and specific commands for Mac or Linux include: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.192    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f4b9:13:f557:6524%en0  UGcg   en0
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
domain_name_server (ip_mult): {214.222.178.103, 2.161.181.112}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 32:6f:2e:03:8c:e6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 3b:4d:4a:d3:60:d9
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to sending data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### How to Address Problems on Apple's macOS / OSX
Regardless of the version of OSX/macOS you are using - whether it's 10.12.5, 11.1.4, or 12.1.8 - there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are embracing remote work and the Work From Anywhere (WFA) concept.
#### Utilizing Built-in Scripts for Assistance
One tool that proves to be very helpful on OSX/macOS is sudo wdutil info, which provides a dump of current wireless related settings to the CLI, and can be configured to generate specific logs for troubleshooting. Furthermore, the sysdiagnose tool can be used to generate a wide range of logs, although much of it is only point-in-time in relation to wireless, similar to wdutil.

To run sysdiagnose in the background and write logs to /var/tmp/<blah>.tar.gz, you can use the command sudo nohup /usr/bin/sysdiagnose -u &. If you prefer to run it interactively, you can use sudo /usr/bin/sysdiagnose, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to /var/tmp or use Finder with Cmd+Shift+G to point Finder to the path. However, be aware of the file sizes, which are approximately 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
