---
title: "How Can I Troubleshoot OSX Internet"
subtitle: "Synergy?"
layout: research
ip_v4_address: "53.190.89.103"
date: 2023-11-18T18:20:00+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address such as ```53.190.89.103``` or an IPv6 address like ```2000:c876:4b42:304f:aaad:e3e0:382:b575```. This can be confirmed by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even referencing MAC addresses such as ```e2:06:4c:d4:56:91```, can be prone to error and quickly becomes complex, especially for those who are not technologically inclined. Furthermore, these addresses do not provide historical data, particularly from past issues.
## Navigating the Internet
When attempting to access a website like https://harvey.info, the first step is to consult a DNS server to convert the host portion (harvey) combined with the Top Level Domain (info) of the URL into an IP address, such as ```134.87.167.182```. Whenever a web request is made, the computer and browser both disclose their type, for example: ```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```.
## Understanding the Significance of Default Gateways
Your default gateway is typically an address that is automatically configured through DHCP. This can manifest as a default gateway like ```172.16.68.58``` (often ending in .1 or .254 depending on the scope size), and is where a computer directs all of its traffic to be forwarded. While there is a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for ```IPv6``` concerns, it can also be verified on Mac or Linux through the following steps:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.16.68.58    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:24bb:de5f:1740:f00a%en0  UGcg   en0
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
domain_name_server (ip_mult): {132.201.81.227, 10.124.64.92}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e2:06:4c:d4:56:91
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fe:50:f1:17:a0:04
}</pre>




## How to Resolve Issues with Wired and Wireless Connections
When transferring data to your router, it's essential to troubleshoot any issues that may arise when using wired or wireless (Wi-Fi) connections.
### Troubleshooting Tips for Apple macOS / OSX Users
Whether you're running macOS or OSX versions such as ```10.11.2```, ```11.0.4```, or ```12.2.5```, there are various tools available for troubleshooting. However, these manual actions and scripts don't provide a comprehensive set of correlated values over an extended period of time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that are adopting remote work and Work From Anywhere (WFA) practices.
#### Effective Built-in Scripts
A useful tool on OSX/macOS is ```sudo wdutil info```, which provides a detailed dump of the current wireless settings through the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although much of it is only relevant to a specific point in time in relation to wireless, similar to the functionality of wdutil.

To run the sysdiagnose tool in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, although this will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G to locate the files. Keep in mind that the file sizes can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
