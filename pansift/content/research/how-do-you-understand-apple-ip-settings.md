---
title: "How Do You Understand Apple IP Settings"
subtitle: "Gamification?"
layout: research
ip_v4_address: "158.143.135.4"
date: 2023-11-18T19:12:09+00:00
draft: false
---

## Functionality of Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address such as ```158.143.135.4``` or an IPv6 address like ```2000:c3c3:26ba:e228:a748:eac7:65f0:d6f0```. These details can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even referencing MAC addresses like ```e0:a1:48:19:6c:00```, can be complex and susceptible to errors, especially for those without technical expertise. Furthermore, this method does not provide any historical data, which is particularly problematic in resolving past issues.
## Procedure to Reach the World Wide Web
When attempting to access a web page such as https://oconner.com, the first step involves contacting a DNS server to convert the host portion (oconner) combined with the Top Level Domain (com) of the URL into an IP address like ```151.128.253.46```. Every web request from your computer and browser also includes its type, such as <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways
The default gateway is typically an automatically configured address obtained through DHCP. It usually ends in .1 or .254 based on the scope size, and could be something like ```172.30.131.93```. This is the location where your computer directs all its traffic to be routed further. For ```IPv6```, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify it on Mac or Linux using the following commands:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.30.131.93    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ca61:6c12:8736:10ac%en0  UGcg   en0
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
domain_name_server (ip_mult): {205.47.9.145, 204.74.86.163}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e0:a1:48:19:6c:00
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e0:aa:20:77:f7:77
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you might be using either a wired connection or a wireless (Wi-Fi) medium at the physical and data layer.
### Apple macOS / OSX Troubleshooting Guide
Regardless of the version of OSX/macOS you have, whether it's ```10.13.1```, ```11.1.9```, or ```12.2.8```, there are various troubleshooting tools available. However, the manual actions and scripts don't provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts for macOS Troubleshooting
A valuable tool for troubleshooting on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also generate specific logs for troubleshooting. Additionally, the more comprehensive ```sysdiagnose``` tool can be utilized to generate a wide range of logs (although much of it is only relevant to wireless settings, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs in ```/var/tmp/<blah>.tar.gz```. Alternatively, you can run ```sudo /usr/bin/sysdiagnose``` interactively, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Keep in mind that the file sizes can be around 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
