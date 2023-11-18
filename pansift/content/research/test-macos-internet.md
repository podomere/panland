---
title: "Test MacOS Internet"
subtitle: "Granular?"
layout: research
ip_v4_address: "100.31.114.23"
date: 2023-11-18T17:18:07+00:00
draft: false
---

## Understanding the Function of Internet Addresses

When using the Internet, you may be assigned a Public IPv4 address such as ```100.31.114.23``` or an IPv6 address like ```2000:2c94:569c:2066:9da0:d776:7c4d:7216```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even referencing MAC addresses like ```94:7b:c1:bc:56:0a```, can be complex and error-prone, especially for those who are not technologically inclined. Furthermore, this method does not provide any historical information, particularly pertaining to past issues.
## Navigating the World Wide Web
When attempting to access a website such as https://sanford-weissnat.name, you first connect to a DNS server to convert the host section (sanford-weissnat), in combination with the Top Level Domain (name) of the URL, into an IP address like ```119.166.87.197```. Your computer and browser actually transmits its type with each web request, for example: <br>
```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
Your default gateway is typically a dynamically configured address through DHCP. You will receive a default gateway such as ```192.168.189.68``` (although they generally end in .1 or .254, depending on the scope size), and this is where your computer directs all its traffic to be routed onward. For ```IPv6```, refer to our comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux, you can verify this by using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.189.68    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4523:2f43:f740:5e13%en0  UGcg   en0
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
domain_name_server (ip_mult): {165.74.26.136, 6.222.5.18}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 94:7b:c1:bc:56:0a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9d:51:4d:88:8d:7e
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to the physical and data layer, you might be utilizing either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Troubleshooting on Apple macOS / OSX
Regardless of which version of OSX/macOS you are running - whether it's 10.13.9, 11.2.4, or 12.3.4 - there are various tools available for resolving connectivity issues. However, these manual actions and scripts do not provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that adopt remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although many of them are only point-in-time data related to wireless, similar to wdutil.

To run sysdiagnose in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose``` (although there is minimal interaction), which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
