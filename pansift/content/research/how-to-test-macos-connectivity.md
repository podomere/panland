---
title: "How To Test MacOS Connectivity"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "27.70.179.72"
date: 2023-11-18T17:27:25+00:00
draft: false
---

## The Functioning of Internet Addressing

When connected to the Internet, you will receive a unique Public IPv4 address such as ```27.70.179.72``` or an IPv6 address like ```2000:c8e8:2b4e:8477:2593:ea92:5e24:1ae5```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses or even referencing MAC addresses like ```65:e6:0e:ca:d1:6c``` to those not well-versed in technology can lead to errors and complexity. Furthermore, this method fails to provide any historical data, particularly when recurring issues are involved.
## Navigating the Internet

When attempting to access a website such as https://oconnell.name, the first step is to contact a DNS server to convert the host portion (oconnell) in conjunction with the Top Level Domain (name) of the URL to an IP address, such as ```45.62.151.0```. In all web requests, your computer and browser transmit its type, for instance: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```.
## The Significance of Default Gateways

Typically, your default gateway is assigned automatically through DHCP, resulting in a default gateway address such as ```10.148.232.227``` (often ending in .1 or .254 based on the scope size). This address is where your computer forwards all its traffic to be routed further. For ```IPv6```, you can delve deeply into the topic using [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also verify it on Mac or Linux by using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.148.232.227    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8fda:f5a2:bb57:b2b0%en0  UGcg   en0
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
domain_name_server (ip_mult): {165.161.191.15, 143.173.39.237}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 65:e6:0e:ca:d1:6c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 54:b2:2e:21:4c:fd
}</pre>




## Solutions for Resolving Issues with Wired and Wireless Connectivity
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Techniques for Apple macOS / OSX Users
Regardless of whether you are running OSX/macOS version ```10.15.7```, ```11.5.3```, or ```12.3.1```, there is a variety of tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are adapting to remote work and embracing the concept of Work From Anywhere (WFA).
#### Embedded Scripts for Assistance
A useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless-related settings to the command-line interface. This can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although most of the information is only relevant to wireless connectivity, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool can be executed in the background, and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you wish to run it *interactively* (although there isn't much interaction involved), you can execute```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` manually or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
