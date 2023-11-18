---
title: "DiagnOSe MacOS Internet Connection"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "136.59.216.23"
date: 2023-11-18T22:22:06+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```136.59.216.23```, or an IPv6 address, like ```2000:d7ff:808d:87a3:807e:f41a:d1a3:fe31```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses to non-technical individuals, or even referencing MAC addresses like ```5b:46:fb:98:0d:0d```, can be prone to errors and become complex. Furthermore, this method does not provide historical data, particularly from past issues.
## Navigating the Web and the Process of Lookups

When accessing a website such as https://bogan.io, you first contact a DNS server to convert the host portion (bogan) combined with the Top Level Domain (io) of the URL into an IP address, like ```224.86.183.142```. Your computer and browser transmit its type with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

Your default gateway is usually an automatically assigned address via DHCP, such as ```172.30.2.150``` (although they normally end in .1 or .254 depending on the scope size). This is where your computer sends all its traffic to be routed onwards. For ```IPv6```, you can refer to an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.30.2.150    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:135b:cf0f:a621:acb8%en0  UGcg   en0
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
domain_name_server (ip_mult): {210.142.90.160, 146.233.62.65}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5b:46:fb:98:0d:0d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 66:19:41:f3:65:23
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you're running OSX/macOS version 10.11.3, 11.4.5, or 12.1.6, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).

  #### Useful Built-in Scripts and Commands
  A very helpful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless related settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time in relation to wireless, similar to wdutil.

  To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will give a privacy warning. If not run in the background, it should open Finder in the correct location or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind that the file sizes are about 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
