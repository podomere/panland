---
title: "How To DiagnOSe Wifi Router Issues"
subtitle: "Circle Back?"
layout: research
ip_v4_address: "47.16.126.239"
date: 2023-11-18T20:53:45+00:00
draft: false
---

## Demystifying Internet Addressing

When you connect to the Internet, your device is assigned a Public IPv4 address, such as ```47.16.126.239```, or an IPv6 address, such as ```68:a7:7933:dc85:43ae:f8cf:c8fc:b7e6```. You can verify these addresses by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, when it comes to communicating these addresses or MAC addresses, such as ```db:a0:27:97:87:c3```, with individuals who are not tech-savvy, it can quickly become complicated and error-prone. Additionally, this method does not provide any historical data of previous issues.
## Navigating the World Wide Web

In order to access a website, like https://hermann-veum.info, your device initially contacts a DNS server to translate the host portion (hermann-veum) combined with the Top Level Domain (info) of the URL into an IP address, such as ```146.199.23.163```. When making web requests, your computer and browser also send information about their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Understanding the Significance of Default Gateways

Your default gateway is typically automatically configured through DHCP and is usually assigned an address, such as ```192.168.132.117``` (although they often end in .1 or .254, depending on the scope size). This is the point to which your computer sends all of its traffic to be routed onwards. For an in-depth understanding of the default gateway for ```IPv6```, you can refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can verify this information by:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.132.117    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1906:3949:c737:4f58%en0  UGcg   en0
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
domain_name_server (ip_mult): {3.120.75.136, 169.68.134.220}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr db:a0:27:97:87:c3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ce:95:53:3a:43:8c
}</pre>




## Resolving Connection Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer. 
### Troubleshooting Solutions for Apple macOS / OSX
Regardless of whether you're running OSX or macOS versions like `10.13.2`, `11.4.4`, or `12.2.9`, there are various troubleshooting tools available. While manual actions and scripts can be helpful, they don't provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that adopt remote work and Work From Anywhere (WFA).
#### Embedded Tools for Assistance
An extremely useful tool on OSX/macOS is ```sudo wdutil info``` which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool offers a more comprehensive option, generating a wide range of logs (although many are only relevant to wireless at a specific moment, similar to wdutil).

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool will run in the background and write logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (although there won't be much interaction), you can execute<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Be cautious of the file sizes, which can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
