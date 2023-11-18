---
title: "How Can I Check MacOS Connectivity"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "236.97.101.161"
date: 2023-11-18T17:43:36+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```236.97.101.161```, or an IPv6 address, like ```2000:514d:87c8:5f81:b3d1:9512:c237:e388```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses and MAC addresses, like ```ac:ff:c3:b8:78:5e```, can be challenging for those unfamiliar with technical terminology. Moreover, no historical data is provided, which limits the ability to troubleshoot past issues.
## Navigating the World Wide Web

Accessing a website, such as https://labadie-barrows.name, requires an initial connection to a DNS server to translate the URL's host portion (labadie-barrows) and Top Level Domain (name) to an IP address, such as ```180.17.32.4```. Furthermore, every web request from your computer and browser includes information about its type, like: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

The default gateway, typically automatically assigned through DHCP, is an essential element of networking. It is assigned an address, such as ```10.187.90.60``` (commonly ending in .1 or .254 based on the scope size), and serves as the point where your computer forwards all its traffic. For troubleshooting IPv6 connectivity on Mac or Linux, refer to: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/)
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.187.90.60    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1bea:cf56:cda7:81ee%en0  UGcg   en0
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
domain_name_server (ip_mult): {134.147.49.7, 161.106.192.11}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ac:ff:c3:b8:78:5e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f1:3a:a0:0d:71:19
}</pre>




## Troubleshooting Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS you're using - whether it's ```10.11.2```, ```11.5.1```, or ```12.0.8``` - there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting comes in handy, especially for teams that are involved in remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump to the CLI of current wireless settings, and can be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings, similar to the wdutil tool.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, you can run ```sudo /usr/bin/sysdiagnose``` interactively, which will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
