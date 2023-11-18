---
title: "Understand Mac IP Settings"
subtitle: "Put A Bow On It?"
layout: research
ip_v4_address: "225.195.118.167"
date: 2023-11-18T19:21:02+00:00
draft: false
---

## Understanding Internet Address Assignment

When you connect to the Internet, you are assigned a unique Public IPv4 address, such as ```225.195.118.167```, or a newer IPv6 address, like ```2000:cfa6:d633:9d1:8aca:d44a:7af8:800```. You can verify your address at [https://test-ipv6.com/](https://test-ipv6.com/). However, these addresses can be difficult to communicate for those who are not familiar with technical terms, and even specifying MAC addresses like ```50:80:b1:80:5c:dc``` can be error-prone and complex. Furthermore, this method does not provide any historical data.
## How the Internet Access is Facilitated

In order to access a website, such as https://little-batz.co, you initially query a DNS server to convert the domain name (little-batz) and the Top Level Domain (co) of the URL into an IP address, such as ```170.170.136.103```. Every web request from your computer and browser includes detailed information about its type, for example:
```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## The Significance of Default Gateways

The default gateway is typically an address that is automatically assigned through DHCP. This gateway, like ```172.20.207.98``` (usually ending in .1 or .254 depending on the scope size), is where your computer forwards all its network traffic. A comprehensive explanation of configuring ```IPv6``` connectivity can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but it can also be verified on Mac or Linux using the following command:
``` bash
ip -6 route show
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.207.98    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:76dc:236d:1ff9:4c2c%en0  UGcg   en0
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
domain_name_server (ip_mult): {64.234.213.42, 121.64.108.205}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 50:80:b1:80:5c:dc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 84:f0:a3:83:79:00
}</pre>




## Solving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer. 
### Strategies for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you have - whether it's ```10.11.2```, ```11.2.7```, or ```12.1.8``` - there are various troubleshooting tools available. However, the manual actions and scripts may not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Useful Built-in Scripts
One of the helpful tools on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time in relation to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use the command ```sudo /usr/bin/sysdiagnose```, which will give a privacy warning and open Finder in the correct location. Carefully consider the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
