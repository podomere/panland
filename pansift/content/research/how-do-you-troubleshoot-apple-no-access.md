---
title: "How Do You Troubleshoot Apple No-access"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "192.76.212.193"
date: 2023-11-18T19:07:06+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When using the Internet, individuals are assigned Public IPv4 and IPv6 addresses to enable communication and connectivity. For example, a Public IPv4 address may appear as ```192.76.212.193``` while an IPv6 address may appear as ```2000:f5e0:addb:d128:35:7192:5494:cd01```. These addresses can be verified using [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical individuals or referencing MAC addresses such as ```91:b4:d2:d5:40:67``` can be prone to errors and complexity. Also, this method does not provide any historical data, particularly regarding past issues.
## Navigating the World Wide Web
When attempting to access a webpage like https://lind-bruen.biz, the initial step involves consulting a DNS server to convert the host portion (lind-bruen) combined with the Top Level Domain (biz) into an IP address, such as ```103.106.122.49```. Interestingly, every web request contains information about the computer and browser type, for instance: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways
The default gateway typically receives an automatically configured address via DHCP, resulting in an address like ```10.117.165.56``` (although often ending in .1 or .254 based on the scope size). This default gateway is where a computer sends all its traffic to be routed onwards. For ```IPv6``` troubleshooting, there is a comprehensive guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Moreover, users can verify this information on Mac or Linux platforms using the following methods: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.117.165.56    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b9b2:257:aa17:eee7%en0  UGcg   en0
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
domain_name_server (ip_mult): {236.91.220.218, 201.65.23.175}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 91:b4:d2:d5:40:67
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 5d:36:24:ef:9f:a2
}</pre>




## Solutions for Resolving Wired and Wireless Issues
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips and Tricks for Apple macOS / OSX Users
No matter which version of OSX/macOS you're running, whether it's ```10.14.7```, ```11.0.7```, or ```12.1.9```, there is a variety of troubleshooting tools available. However, these manual actions and scripts don't provide a set of correlated values over time which is where remote troubleshooting becomes essential, especially for teams that operate remotely and embrace the Work From Anywhere (WFA) approach.
#### Useful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is incredibly useful as it provides current wireless settings and can also be configured to generate specific troubleshooting logs. In addition, the ```sysdiagnose``` tool is even more comprehensive as it can generate a wide range of logs, although it is mostly point-in-time in relation to wireless, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, or to run it interactively, users can execute ```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not run in the background, it should open Finder in the correct location, or users can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. However, keep in mind that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
