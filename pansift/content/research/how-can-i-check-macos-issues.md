---
title: "How Can I Check MacOS Issues"
subtitle: "Sales Funnel?"
layout: research
ip_v4_address: "20.40.201.185"
date: 2023-11-18T17:43:20+00:00
draft: false
---

## A Look into the Functioning of Internet Addresses

When browsing the web, you are assigned a Public IPv4 address such as ```20.40.201.185``` or an IPv6 address like ```2000:889b:593e:fe4b:335d:b44d:56c4:656a``` while being on the Internet. To verify these addresses, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals not well-versed in technology or even mentioning MAC addresses like ```b9:37:bb:78:f1:a7``` can lead to errors and become complex quickly. Moreover, this method does not provide any historical data, particularly from the time when previous issues occurred.
## Navigating through the Internet
Upon wanting to visit a webpage like https://ledner-powlowski.name, you first encounter a DNS server that translates the host portion (ledner-powlowski) along with the Top Level Domain (name) of the URL to an IP address such as ```143.157.148.40```. Whenever making web requests, your computer and browser include its type, for instance ```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```.
## Understanding the Significance of Default Gateways
Typically, your default gateway is an automatically configured address via DHCP. You are provided with a default gateway like ```172.28.225.60``` (usually ending in .1 or .254 based on the scope size), and this is where your computer directs all its traffic to be routed further. For ```IPv6```, we delve into details in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or you can verify on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.28.225.60    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:24f0:873a:ecaf:b668%en0  UGcg   en0
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
domain_name_server (ip_mult): {147.38.181.255, 94.160.111.32}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b9:37:bb:78:f1:a7
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 75:1e:12:ba:8c:f8
}</pre>




## Solutions for Resolving Issues with Wired or Wireless Connections

When it comes to transmitting data to your router, you have the option to do so through a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Steps to Take on Apple macOS / OSX Systems

Regardless of which version of macOS or OSX you are using, whether it's `10.15.6`, `11.6.8`, or `12.0.6`, there are various tools available for troubleshooting. However, the manual actions and scripts are unable to provide a set of correlated values over time. This is where automated remote troubleshooting proves to be beneficial, especially for teams that adopt remote work and Work From Anywhere (WFA).
#### Pre-Installed Scripts That Are Useful

One useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless-related settings to the command line interface (CLI) and can be configured to generate specific logs for troubleshooting purposes. Furthermore, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (even though there isn't much interaction), you can use the command `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder's Cmd+Shift+G shortcut. Just be cautious of the file sizes, which are approximately 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
