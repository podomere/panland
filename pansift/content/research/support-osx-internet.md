---
title: "Support OSX Internet"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "95.206.181.47"
date: 2023-11-18T18:05:18+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When connecting to the Internet, one may be assigned a public IPv4 address such as ```95.206.181.47``` or an IPv6 address like ```2000:7c99:d89a:2f38:ccac:8aaa:99b6:da48```. These addresses can be verified using [https://test-ipv6.com/](https://test-ipv6.com/). However, articulating and working with these addresses, including MAC addresses such as ```75:6d:ea:3c:92:fd```, can be complex and prone to errors, especially for individuals who are not well-versed in technology. Moreover, this method does not provide any historical data related to past issues.
## Navigating Websites

When trying to reach a website like https://rolfson.info, the first step involves accessing a DNS server to translate the URL's host portion (rolfson) combined with its Top Level Domain (info) to an IP address such as ```178.218.49.4```. The computer and browser also transmit information about their type with every web request, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

Typically, the default gateway is an address that is automatically configured through DHCP. It is the point to which all of the computer's traffic is routed, with examples of default gateways being addresses like ```192.168.36.93``` (commonly ending in .1 or .254 depending on the scope size). Those seeking to delve into ```IPv6``` and troubleshoot can find in-depth information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and Mac or Linux users can verify this information using the command:

```bash
command-goes-here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.36.93    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:622a:8caa:3305:b62f%en0  UGcg   en0
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
domain_name_server (ip_mult): {35.45.246.133, 174.172.245.118}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 75:6d:ea:3c:92:fd
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr bd:42:5b:e2:75:3b
}</pre>




## Fixing Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you may utilize a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are currently using, whether it's ```10.14.8```, ```11.2.2```, or ```12.2.4```, there are various tools available for troubleshooting. However, these tools do not provide a series of correlated values over time, unlike automated remote troubleshooting, which is particularly beneficial for remote work and Work From Anywhere (WFA) teams.
#### Utilizing Built-in Scripts
An extremely useful tool for OSX/macOS troubleshooting is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool is even more comprehensive and can generate a wide range of logs, though many are only relevant to wireless at a specific moment, similar to wdutil.

To run it in the background and generate logs, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```, which will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose``` (although there is not much interaction) and it will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
