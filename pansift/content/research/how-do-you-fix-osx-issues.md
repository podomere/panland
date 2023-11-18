---
title: "How Do You Fix OSX Issues"
subtitle: "Penetrate The Market?"
layout: research
ip_v4_address: "224.57.255.246"
date: 2023-11-18T18:26:20+00:00
draft: false
---

## The Operational Mechanism of Internet Addressing

When using the Internet, one might receive a Public IPv4 address such as ```224.57.255.246``` or an IPv6 address like ```2000:5192:201c:65de:78c3:92a2:4766:30eb```. This information can be verified on [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not technology-savvy, conveying these addresses, or even referencing MAC addresses like ```71:87:45:3d:37:7f```, can lead to errors and complexity. Furthermore, this does not offer any historical data, especially when past issues occurred.
## Navigating the World Wide Web

Accessing a web page such as https://lebsack.biz involves initially connecting to a DNS server to convert the host section (lebsack) along with the Top Level Domain (biz) of the URL into an IP address like ```107.34.85.182```. Your computer and browser also send their specifications with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways

A default gateway is typically an automatically assigned address through DHCP. You receive a default gateway like ```192.0.0.77``` (although they commonly end in .1 or .254 depending on the scope size) and this is the location where your computer directs all its traffic for further routing. As for ```IPv6```, there is an in-depth discussion available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.77    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:11aa:5572:ac6d:d3%en0  UGcg   en0
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
domain_name_server (ip_mult): {216.251.46.24, 189.35.124.7}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 71:87:45:3d:37:7f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 32:b2:3e:90:e5:18
}</pre>




## Troubleshooting Connection Issues
When it comes to transferring data to your router, you might be using a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Tips for Resolving Network Problems on Apple Devices
No matter which version of macOS you have, whether it's 10.15.2, 11.6.6, or 12.2.2, there are various methods for troubleshooting network issues. However, these manual methods and scripts do not provide a series of interconnected values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that support remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools
One useful tool on macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the command line interface, and can also be configured to generate specific logs for troubleshooting. Additionally, the more comprehensive ```sysdiagnose``` tool can be used to generate a wide range of logs (though much of it is only related to wireless settings at a specific point in time, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in the ```/var/tmp/<blah>.tar.gz``` directory. If you prefer to run it interactively, you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
