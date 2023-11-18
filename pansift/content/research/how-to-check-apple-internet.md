---
title: "How To Check Apple Internet"
subtitle: "Bleeding Edge?"
layout: research
ip_v4_address: "62.125.120.30"
date: 2023-11-18T18:51:19+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you will be assigned a Public IPv4 address, such as ```62.125.120.30```, or an IPv6 address, such as ```2000:9f01:2c8b:743:f7be:ac82:c9ae:3d4c```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses to individuals who are not familiar with technology, or even mentioning MAC addresses like ```a9:1d:b1:91:bd:84```, can be prone to errors and become complex quickly. Furthermore, this method does not provide any historical data, especially when past issues arise.
## Navigating the World Wide Web
In order to access a website like https://barrows-schroeder.io, you first contact a DNS server to convert the host portion (barrows-schroeder) combined with the Top Level Domain (io) of the URL to an IP address, such as ```207.57.131.247```. When making web requests, your computer and browser actually transmit their type, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways
Your default gateway is typically an automatically configured address obtained via DHCP. A default gateway, such as ```192.0.0.213``` (usually ending in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be routed onward. For ```IPv6```, a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, but on Mac or Linux, you can perform a check with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.213    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2e11:b634:6336:5719%en0  UGcg   en0
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
domain_name_server (ip_mult): {88.206.181.186, 41.216.234.60}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a9:1d:b1:91:bd:84
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f2:d1:d1:ea:c6:f7
}</pre>




## Resolve Issues with Wired and Wireless Networks

When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Actions to Take for Apple's macOS / OSX

No matter which version of OSX/macOS you are operating on, whether it's ```10.14.3```, ```11.2.4```, or ```12.1.7```, there are various tools available for addressing issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where the automated remote troubleshooting becomes essential, especially for teams that are adopting remote work and Work From Anywhere (WFA). 
#### Utilize the In-Built Scripts

An extremely helpful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI, and can be configured to generate specific troubleshooting logs as well. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although most of them are only relevant to wireless settings just like wdutil. 

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, you can run it *interactively* by using ```sudo /usr/bin/sysdiagnose```, which will give a privacy warning. When it is not run in the background, it should open Finder in the correct location or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to point Finder to the path. However, be cautious of the file sizes which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
