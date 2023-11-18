---
title: "How To Troubleshoot Mac No-access"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "39.61.200.13"
date: 2023-11-18T19:25:10+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, you are assigned a Public IPv4 or IPv6 address such as ```39.61.200.13``` or ```2000:5146:ed56:a042:431a:2c5c:e317:a107```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not technologically inclined can be prone to errors and can become complex, especially when dealing with MAC addresses like ```ab:c1:7a:f2:d8:0a```. Moreover, it does not provide any historical data, particularly from previous issues.
## Navigating the World Wide Web
When you want to visit a website such as https://haag.net, your computer first contacts a DNS server to convert the host portion (haag) along with the Top Level Domain (net) of the URL to an IP address, for example, ```136.201.236.59```. During this process, your computer and browser include details about its type in all web requests, for example:
```html
Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0
```
## Significance of Default Gateways
Your default gateway is typically an automatically assigned address through DHCP, such as ```172.24.106.98``` (though they commonly end in .1 or .254 depending on the scope size). This is the point where your computer sends all its traffic to be routed further. For ```IPv6```, you can refer to a detailed explanation in our post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/); alternatively, you can check on Mac or Linux with the following command:
```html
ip -6 route
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.24.106.98    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8e06:34c5:3717:48be%en0  UGcg   en0
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
domain_name_server (ip_mult): {68.177.47.29, 193.70.133.113}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ab:c1:7a:f2:d8:0a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr cd:dd:a8:17:4f:ce
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may rely on either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Steps for Apple macOS / OSX
No matter which version of OSX/macOS you're using - whether it's 10.15.8, 11.3.4, or 12.1.2 - there are a variety of tools available for troubleshooting. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One particularly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface, and can be configured to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only related to wireless at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute it in the background and write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can run ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to direct Finder to the path. Just be mindful of the file sizes, which are around 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
