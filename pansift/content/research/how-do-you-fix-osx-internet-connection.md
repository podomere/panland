---
title: "How Do You Fix OSX Internet Connection"
subtitle: "Ideate?"
layout: research
ip_v4_address: "249.169.248.169"
date: 2023-11-18T18:26:59+00:00
draft: false
---

## Demystifying Internet Addressing

When connecting to the Internet, you are assigned a unique address, such as ```249.169.248.169``` for IPv4 or ```2000:ceb0:bd9c:832b:d2c0:5feb:da2f:2ce3``` for IPv6. To verify this, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing or communicating these addresses, and even mentioning MAC addresses like ```60:0f:e0:38:8b:7c```, can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data, especially from previous issues.
## Navigating the World Wide Web

To access a website, such as https://auer.net, your computer first consults a DNS server to translate the host name (auer) and the Top Level Domain (net) of the URL into an IP address, such as ```176.28.180.12```. In fact, your computer and browser communicate their types with every web request, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Understanding the Significance of Default Gateways

Your default gateway is typically a DHCP-configured address. It usually ends with .1 or .254, depending on the scope size, such as ```192.0.0.254```. This is where your computer directs all its traffic to be routed onward. For ```IPv6```, you can find in-depth details on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.254    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   a47c:242e:c3:446e:4411:a20d:b2db:f3a%en0  UGcg   en0
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
domain_name_server (ip_mult): {93.65.53.168, 234.189.106.201}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 60:0f:e0:38:8b:7c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 7f:92:66:b5:35:d5
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are using OSX/macOS versions such as `10.11.7`, `11.0.6`, or `12.2.7`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that are fully embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Another comprehensive tool is the `sysdiagnose`, which can generate a wide range of logs (though much of it is only related to wireless settings at a specific point in time, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz`. If you prefer to run it *interactively* (although there is minimal interaction), you can use `sudo /usr/bin/sysdiagnose`, which will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
