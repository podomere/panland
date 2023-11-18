---
title: "How Can I Test Mac IP Settings"
subtitle: "Gamification?"
layout: research
ip_v4_address: "149.136.6.166"
date: 2023-11-18T19:34:26+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When connecting to the Internet, you will be assigned a unique public IPv4 address, such as ```149.136.6.166```, or an IPv6 address like ```2000:198f:6c3d:9786:9dde:e41d:5728:c913```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, as well as MAC addresses like ```9d:25:3c:9d:42:33```, to individuals who are not tech-savvy can lead to errors and complications. Moreover, this method does not provide historical data, especially for past issues.
## Navigating the World Wide Web

When accessing a webpage, such as https://hermiston.co, you initially connect to a DNS server to convert the host part (hermiston) combined with the Top Level Domain (co) of the URL into an IP address, such as ```14.195.69.67```. Moreover, your computer and browser transmit their type with all web requests, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. It assigns a default gateway like ```192.168.14.96``` (commonly ending in .1 or .254 depending on the scope size), where your computer directs all its traffic to be routed onwards. For ```IPv6```, detailed instructions can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you may verify it on Mac or Linux by: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.14.96    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d4f4:1473:6f34:3be1%en0  UGcg   en0
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
domain_name_server (ip_mult): {126.95.80.78, 222.229.114.101}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9d:25:3c:9d:42:33
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8e:8f:ce:d2:e0:fa
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Strategies for Apple Devices Running macOS / OSX
Regardless of whether you are using OSX or macOS version ```10.14.9```, ```11.2.5```, or ```12.0.8```, there are a variety of troubleshooting tools available. However, these manual actions and scripts do not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that have adopted remote work and have embraced the idea of Working From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
An incredibly useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless-related settings on the CLI and can also generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although many of these logs are only relevant to wireless connections, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool can be run in the background, and the logs will be written to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, you can run ```sudo /usr/bin/sysdiagnose```, although it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Just be mindful of the file sizes, which are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
