---
title: "DiagnOSe OSX IP Settings"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "230.71.11.202"
date: 2023-11-18T18:00:19+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```230.71.11.202```, or an IPv6 address, like ```2000:3646:d709:ff03:92fd:9315:96e5:2ee2```. To verify your address, visit [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those not familiar with technology, or even mentioning MAC addresses like ```a5:85:7e:e4:4b:48```, can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data, particularly when dealing with past issues.
## Navigating the World Wide Web

When attempting to access a webpage, such as https://fay.org, you first connect to a DNS server to translate the host portion (fay) and the Top Level Domain (org) of the URL into an IP address, such as ```82.218.204.210```. Your computer and browser automatically send their type with all web requests, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways

Your default gateway is typically an address configured automatically via DHCP. This gateway, such as ```10.65.15.243``` (usually ending in .1 or .254 depending on scope size), is where your computer sends all its traffic to be routed onward. For more information on setting up IPv6, visit our in-depth guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, you can check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.65.15.243    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:83a2:49ff:95e5:cd18%en0  UGcg   en0
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
domain_name_server (ip_mult): {104.99.91.101, 90.210.111.163}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a5:85:7e:e4:4b:48
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fd:a9:3a:39:31:47
}</pre>




## Resolving Issues with Wired or Wireless Connections

When transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Irrespective of the version of OSX/macOS you are using, be it 10.12.5, 11.0.9, or 12.1.2, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
A highly useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless related settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the `sysdiagnose` tool can be utilized to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to the wdutil tool.

To run it in the background and write logs to `/var/tmp/<blah>.tar.gz`, use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it *interactively* with a privacy warning, you can use the command `sudo /usr/bin/sysdiagnose`. When not run in the background, it should open Finder in the correct location or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Just keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
