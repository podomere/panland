---
title: "How Can I Fix OSX Internet Connection"
subtitle: "T-shirt Sizes?"
layout: research
ip_v4_address: "44.145.175.247"
date: 2023-11-18T18:17:30+00:00
draft: false
---

## The Fundamentals of Internet Addressing

When using the Internet, you are typically assigned a Public IPv4 address like ```44.145.175.247``` or an IPv6 address like ```2000:fa09:90f4:abeb:6702:1455:2264:a9c3```. The verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, the process of communicating or identifying MAC addresses like ```d5:0e:98:fa:0a:13``` can quickly become confusing and prone to errors. Furthermore, this method does not provide any historical data, particularly relevant during past issues.
## Navigating the World Wide Web
In order to access a webpage such as https://towne-mills.net, the first step involves connecting to a DNS server, which translates the host portion (towne-mills) combined with the Top Level Domain (net) of the URL into an IP address like ```46.4.141.241```. With every web request, your computer and browser also send specific types, for instance, <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Understanding the Significance of Default Gateways
Your default gateway is typically an automatically configured address via DHCP. This address, such as ```192.168.12.119``` (although they usually end in .1 or .254, depending on the scope size), is where your computer directs all its traffic to be routed onwards. For ```IPv6```, you can find more detailed information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can perform a check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.12.119    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c8ef:c846:b6f0:86ce%en0  UGcg   en0
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
domain_name_server (ip_mult): {110.102.67.251, 12.63.91.135}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d5:0e:98:fa:0a:13
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c2:d9:87:ac:f3:f7
}</pre>




## Resolving Wired or Wireless Connectivity Issues
When it comes to transmitting data, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer to send the data to your router.
### Troubleshooting Techniques for Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's 10.12.3, 11.3.5, or 12.2.5, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Pre-Installed Scripts for Assistance
A highly useful tool on OSX/macOS is `sudo wdutil info`, which provides a dump of the current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting purposes. Moreover, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is limited to the wireless settings, similar to wdutil.

The command `sudo nohup /usr/bin/sysdiagnose -u &` will run this tool in the background and it will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose` and it will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G to locate the files. It's important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
