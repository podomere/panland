---
title: "How Can I Fix MacOS Connectivity"
subtitle: "Penetrate The Market?"
layout: research
ip_v4_address: "147.53.239.119"
date: 2023-11-18T17:37:54+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals may receive a Public IPv4 address like ```147.53.239.119``` or an IPv6 address like ```2000:c13b:2236:8129:4e8f:406b:86e8:d6a0```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical people, or even mentioning MAC addresses like ```68:35:52:20:d7:30```, can be susceptible to errors and becomes complex rapidly. Additionally, this does not provide any historical data, particularly when past issues occurred.
## Navigating the Internet
When attempting to access a website like https://cassin-veum.io, the first step is to contact a DNS server to convert the host portion (cassin-veum) combined with the Top Level Domain (io) of the URL to an IP address like ```153.177.59.169```. Your computer and browser include its type with all web requests, such as 
```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways
Typically, the default gateway is an automatically configured address via DHCP. A default gateway like ```172.21.56.121``` (usually ending in .1 or .254, depending on the scope size) is where your computer sends all its traffic to be routed onwards. For ```IPv6```, there is a detailed explanation available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, this can be verified by using:
``` <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.56.121    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:bfa:d7ea:b6eb:203f%en0  UGcg   en0
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
domain_name_server (ip_mult): {138.26.243.42, 233.107.231.29}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 68:35:52:20:d7:30
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 74:cb:7a:b6:08:2e
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks

When it comes to sending data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX Users
Regardless of whether you are using OSX or macOS versions like ```10.15.9```, ```11.5.5```, or ```12.0.7```, there are various troubleshooting tools available. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that are embracing remote work and the concept of Work From Anywhere (WFA).
#### Useful Built-in Scripts for macOS Users
An extremely useful tool for OSX/macOS users is the ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI. This tool can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although many of them are only point-in-time related to wireless, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and generate logs in the ```/var/tmp/<blah>.tar.gz``` location, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, for interactive use, run ```sudo /usr/bin/sysdiagnose```, but be mindful of the file sizes, which can be around 300MB. After running the command, the logs will be located in the ```/var/tmp``` directory.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
