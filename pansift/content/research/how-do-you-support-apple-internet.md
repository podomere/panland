---
title: "How Do You Support Apple Internet"
subtitle: "Ideate?"
layout: research
ip_v4_address: "128.98.46.64"
date: 2023-11-18T19:10:19+00:00
draft: false
---

## Understanding Internet Addressing System

When using the Internet, individuals may be assigned a Public IPv4 address such as ```128.98.46.64``` or an IPv6 address like ```2000:343c:5bb2:d5de:f749:70d4:1a1c:7905```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, attempting to convey these addresses or even referring to MAC addresses like ```10:c5:21:a1:75:cc``` can be prone to errors and can become convoluted. Furthermore, this approach does not provide historical data, particularly when past issues occurred.
## Navigating the World Wide Web

In order to access a website such as https://lockman.io, it is necessary to initially contact a DNS server to translate the host portion (lockman) combined with the Top Level Domain (io) of the URL into an IP address, as in the case of ```203.29.137.223```. It is important to note that the computer and browser include specific details with every web request, such as <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. A default gateway address such as ```192.168.224.3``` is assigned, although they typically conclude with .1 or .254 depending on the scope size. This is the location your computer forwards all its traffic to be routed onwards. For information pertaining to ```IPV6```, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). To verify this on Mac or Linux, the following commands can be used:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.224.3    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:fe85:56ff:c2f2:65ab%en0  UGcg   en0
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
domain_name_server (ip_mult): {133.251.86.11, 109.216.115.206}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 10:c5:21:a1:75:cc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr de:8e:60:fc:d7:e7
}</pre>




## Resolving Issues with Wired and Wireless Connections
When transferring data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Irrespective of the version of OSX/macOS you are using, whether it's 10.11.3, 11.3.8, or 12.0.9, there are numerous tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes vital, especially for teams that have adopted remote work and Work From Anywhere (WFA) policies.
#### Embedded Scripts That Offer Assistance
An extremely useful tool on OSX/macOS is 'sudo wdutil info', which provides a dump of the current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the 'sysdiagnose' tool can be used to generate a wide range of logs, although much of it pertains to wireless settings at a specific point in time, similar to wdutil.

The command 'sudo nohup /usr/bin/sysdiagnose -u &' will run 'sysdiagnose' in the background and write logs to '/var/tmp/<blah>.tar.gz'. If you prefer to run it interactively, you can use 'sudo /usr/bin/sysdiagnose', which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to '/var/tmp' using Finder with Cmd+Shift+G. However, be cautious about the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
