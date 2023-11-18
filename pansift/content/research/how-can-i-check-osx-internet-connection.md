---
title: "How Can I Check OSX Internet Connection"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "72.224.224.95"
date: 2023-11-18T18:22:51+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```72.224.224.95```, or an IPv6 address like ```2000:b6ef:2e2b:53ee:405b:d497:d58a:5e0```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or even referencing MAC addresses like ```56:71:11:f7:55:0e```, can be prone to errors and become complex, especially for those not well-versed in technology. Moreover, this method lacks the provision of historical data, especially pertaining to previous issues.
## Navigating the Internet
Accessing a website like https://bergnaum-cassin.org involves an initial contact with a DNS server, which is responsible for converting the host component (bergnaum-cassin) in combination with the Top Level Domain (org) of the URL into an IP address, such as ```156.65.56.176```. Whenever a web request is made, your computer and browser also communicate their type, for instance <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
The default gateway is usually an address that is automatically configured through DHCP. It serves as the destination for all the traffic that your computer sends for further routing. Commonly, a default gateway is assigned, such as ```192.168.197.120```, with it typically ending in .1 or .254 depending on the scope size. Those wanting to explore more about ```IPv6``` can refer to a comprehensive guide at: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On a Mac or Linux system, the default gateway can be verified with the following command:<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.197.120    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:10b:8cac:751a:270a%en0  UGcg   en0
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
domain_name_server (ip_mult): {248.29.149.119, 122.155.136.179}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 56:71:11:f7:55:0e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 67:11:ce:f9:70:d6
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transferring data to your router, the medium you use, whether wired or wireless (Wi-Fi), operates at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS version ```10.12.5```, ```11.4.2```, or ```12.3.9```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a CLI dump of current wireless settings, and can also be configured to generate specific troubleshooting logs. Another comprehensive tool is the ```sysdiagnose``` tool, which can generate a range of logs, although most of it is only relevant to wireless issues similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* experience, run ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, allowing you to navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. However, be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
