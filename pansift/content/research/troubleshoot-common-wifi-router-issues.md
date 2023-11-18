---
title: "Troubleshoot Common Wifi Router Issues"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "152.229.56.25"
date: 2023-11-18T21:10:27+00:00
draft: false
---

## Understanding Internet Addressing

When it comes to the Internet, there are various types of IP addresses that can be used, such as the Public IPv4 address or the IPv6 address. These addresses can be checked at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses to non-technical individuals or even referring to MAC addresses can quickly become complex and error-prone. Moreover, obtaining historical data, especially from previous issues, remains a challenge.
## Navigating the World Wide Web

Accessing a website like https://shields.net entails contacting a DNS server to translate the URL into an IP address. Your computer and browser include specific information in all web requests, such as the type of browser. 
## The Significance of Default Gateways

The default gateway is typically automatically configured through DHCP and serves as the point to which your computer sends all its traffic to be routed onwards. The default gateway is usually designated with an address that ends in .1 or .254, depending on the size of the scope. For IPv6, you can refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for detailed information on how to check this on Mac or Linux.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.82.45    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a7aa:8912:9975:ac5f%en0  UGcg   en0
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
domain_name_server (ip_mult): {150.103.28.155, 112.177.116.157}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 77:dd:ac:98:7b:3b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 46:e6:b4:b2:79:79
}</pre>




## Resolving Issues with Wired and Wireless Connection
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are running OSX/macOS versions such as `10.11.3`, `11.6.4`, or `12.0.3`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that are practicing remote work and embracing the concept of Work From Anywhere (WFA).
#### Useful Built-in Scripts
For users of OSX/macOS, the `sudo wdutil info` tool is incredibly helpful as it provides a dump of current wireless related settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Moreover, the `sysdiagnose` tool can be used to generate a wide range of logs, although most of the information is only available at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will run the sysdiagnose tool in the background and create logs in `/var/tmp/<blah>.tar.gz` for the user. If you prefer to run it interactively, you can execute `sudo /usr/bin/sysdiagnose`, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location or you can navigate to `/var/tmp` and use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind that the file sizes are usually around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
