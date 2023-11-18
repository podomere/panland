---
title: "How Can I DiagnOSe Apple IP Settings"
subtitle: "Circle Back?"
layout: research
ip_v4_address: "225.44.3.28"
date: 2023-11-18T18:56:57+00:00
draft: false
---

## Understanding Internet Protocol Addresses

When connecting to the Internet, you are assigned a Public IPv4 address, such as ```225.44.3.28```, or an IPv6 address, like ```2000:4dfc:bae:91bb:2dd:275a:1812:b1c0```. Verification of this assignment can be done through [https://test-ipv6.com/](https://test-ipv6.com/), but the challenge arises when attempting to communicate these addresses, and even more so when dealing with MAC addresses, such as ```1e:2f:91:14:67:92```. Furthermore, historical data regarding previous complications is not provided.
## Navigating the World Wide Web

In the pursuit of accessing a website such as https://rosenbaum.co, the process begins with contacting a DNS server to convert the host portion (rosenbaum) alongside the Top Level Domain (co) of the URL into an IP address, like ```229.190.204.243```. Additionally, it is noteworthy that your computer and browser specify their type with every web request, for instance:
```html
Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0
```
## Significance of Default Gateways

The default gateway, typically an automatically configured address via DHCP, plays a crucial role in routing all traffic from your computer. An example of the default gateway is ```10.44.77.6```, although the ending may vary depending on the scope size. For ```IPv6```, a comprehensive guide on this topic can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and verification can be done on Mac or Linux using the following method:
```html
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.44.77.6    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:99d0:eb91:c11b:d3bd%en0  UGcg   en0
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
domain_name_server (ip_mult): {173.138.218.182, 236.55.55.15}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 1e:2f:91:14:67:92
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ee:33:fe:b3:a3:e1
}</pre>




## Resolving Connectivity Issues: Wired vs. Wireless
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX
Irrespective of the version of OSX/macOS you are running, whether it's ```10.12.3```, ```11.3.4```, or ```12.1.9```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that adopt remote work and the Work From Anywhere (WFA) concept.
#### Utility Scripts Offered by Operating System
An extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump to the CLI of current wireless settings and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although much of it is limited to point-in-time data in relation to wireless, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, logs will be written to ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (although not much interaction is required), you can execute ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using the Finder's Cmd+Shift+G shortcut. However, be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
