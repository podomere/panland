---
title: "How Can I Check Mac IP Settings"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "14.213.227.38"
date: 2023-11-18T19:35:30+00:00
draft: false
---

## Understanding Internet Protocol Addresses

When using the Internet, you are assigned a specific Internet Protocol (IP) address. This can be in the form of a Public IPv4 address such as ```14.213.227.38``` or an IPv6 address like ```2000:bd4:72f3:8f63:c98e:431:565a:730f```. You can verify your IP address by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, relaying these addresses, or even referring to MAC addresses like ```dd:4c:dd:a9:78:69```, can be complex and prone to errors, especially for those not well-versed in technology. 
## Navigating the World Wide Web
When typing in a web address, for example, https://hand.name, your computer first contacts a Domain Name System (DNS) server. The host portion (hand) combined with the Top Level Domain (name) is translated into an IP address, such as ```185.249.13.182```. Additionally, your computer and browser share crucial information with all web requests, such as the type of browser being used <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```.
## The Significance of Default Gateways
The default gateway is typically an address assigned through Dynamic Host Configuration Protocol (DHCP). This address, such as ```10.98.100.119``` (commonly ending in .1 or .254 based on the scope size), is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can be verified on Mac or Linux using the following query: 

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.98.100.119    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f1d6:63ae:2c92:b4d4%en0  UGcg   en0
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
domain_name_server (ip_mult): {250.68.68.4, 243.29.226.81}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr dd:4c:dd:a9:78:69
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 70:b6:6f:d4:e4:68
}</pre>




## Troubleshooting and Resolving Wired and Wireless Issues
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are using, whether it's ```10.13.2```, ```11.4.1```, or ```12.1.9```, there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
A highly useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to create a wide range of logs, although much of it is only in relation to wireless, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, logs will be written to ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (although there isn't much interaction), you can execute ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
