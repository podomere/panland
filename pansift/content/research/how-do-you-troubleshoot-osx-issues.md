---
title: "How Do You Troubleshoot OSX Issues"
subtitle: "Bandwidth-constrained?"
layout: research
ip_v4_address: "164.3.16.208"
date: 2023-11-18T18:28:55+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```164.3.16.208```, or an IPv6 address like ```2000:1b8:bf56:779a:2912:b7f2:297d:c96a```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technologically inclined, conveying these addresses, or even referencing MAC addresses like ```c2:f4:a1:ba:cf:c5```, can lead to errors and complications. Furthermore, this method does not provide any historical data, especially when addressing past issues.
## Navigating the Internet

In order to reach a website such as https://macgyver-nikolaus.net, the initial step is to access a DNS server to convert the host portion (macgyver-nikolaus) along with the Top Level Domain (net) of the URL into an IP address, such as ```131.86.41.156```. The computer and browser transmit their specific type with every web request, for example: 
```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## The Significance of Default Gateways

Conventional default gateways are typically automatically allocated addresses via DHCP. A typical default gateway might be something like ```192.168.4.67```, although they generally end in .1 or .254 based on the scope size. This is the location where the computer directs all of its traffic to be further routed. For an in-depth resource on ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, Mac or Linux users can perform a check with the following command:
```sh
ifconfig | grep "inet6 addr"
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.4.67    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4c15:9e12:ce1f:6a97%en0  UGcg   en0
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
domain_name_server (ip_mult): {119.222.207.129, 197.91.206.206}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c2:f4:a1:ba:cf:c5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 03:18:a0:f8:13:7a
}</pre>




## Resolve Troubles with Wired and Wireless Networks
In the realm of physical and data connectivity, you may find yourself utilizing either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Actions for Apple macOS / OSX Users
Regardless of the specific version of OSX or macOS that you are operating on, whether it's ```10.11.4```, ```11.6.5```, or ```12.3.8```, there exist an array of tools designed for diagnosing and resolving network issues. However, the manual procedures and scripts available do not provide a comprehensive set of correlated values over a period of time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that have adopted remote work and Work From Anywhere (WFA).
#### Pre-installed Utilities for Assistance
A highly beneficial tool available on OSX/macOS is ```sudo wdutil info``` which offers a comprehensive display of current wireless settings via the CLI, with the option to generate specific logs for troubleshooting purposes. Moreover, for a more extensive approach, the ```sysdiagnose``` tool can be employed to generate a wide range of logs (although many are only applicable to the present moment in terms of wireless issues, similar to wdutil).

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool will operate in the background and produce logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to execute it *interactively* (despite minimal interaction), you can run<br>```sudo /usr/bin/sysdiagnose``` and it will prompt a privacy warning. When not executed in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G to pinpoint the exact path. However, be cautious of the file sizes, which typically hover around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
