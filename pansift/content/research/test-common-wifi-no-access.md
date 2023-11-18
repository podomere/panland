---
title: "Test Common Wifi No Access"
subtitle: "Give You Some Time Back?"
layout: research
ip_v4_address: "21.168.87.29"
date: 2023-11-18T21:11:01+00:00
draft: false
---

## A Guide to Internet Addressing

When using the Internet, you are assigned an address that allows you to access it. This could be a Public IPv4 address, such as ```21.168.87.29```, or an IPv6 address, such as ```2000:ca87:1ad0:3f80:d048:4c7e:1677:414e```. You can verify this using a tool like [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, as well as MAC addresses like ```d1:8c:e9:d9:3d:dd```, can be complicated and prone to errors, especially for those who are not tech-savvy. Additionally, this method does not provide any historical data, particularly from previous issues.
## A Look into Web Access

To reach a web page, like https://abshire.name, you first need to access a DNS server. This server translates the host portion (abshire) and the Top Level Domain (name) of the URL into an IP address, such as ```10.24.170.217```. When making web requests, your computer and browser also send their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically assigned address via DHCP. This address, like ```172.19.57.22```, (commonly ending in .1 or .254 depending on the scope size) is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available. On Mac or Linux, you can check this using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.19.57.22    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1bca:aa04:e984:8e6a%en0  UGcg   en0
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
domain_name_server (ip_mult): {161.21.246.159, 18.215.63.225}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d1:8c:e9:d9:3d:dd
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a7:54:4f:4b:65:24
}</pre>




## Fixing Wired and Wireless Connection Issues

When it comes to sending data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Steps for Apple macOS / OSX
No matter which version of OSX/macOS you are currently using—whether it's ```10.14.9```, ```11.5.8```, or ```12.0.9```—there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Helpful Built-in Scripts
One valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a comprehensive range of logs, although much of it is point-in-time only in relation to wireless, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, or to run it interactively, use ```sudo /usr/bin/sysdiagnose```. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
