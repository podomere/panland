---
title: "How Do You Troubleshoot MacOS Connectivity"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "181.2.100.130"
date: 2023-11-18T17:51:12+00:00
draft: false
---

## How Internet Addressing Functions

When using the Internet, your device may have a Public IPv4 address, such as ```181.2.100.130```, or an IPv6 address like ```2000:a2a6:b447:d608:ae13:93c7:e1ab:a2e1```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not tech-savvy, conveying these addresses or MAC addresses like ```e2:2a:e6:10:83:14``` can be prone to errors and quickly becomes complex. Moreover, it does not provide historical data, especially when past issues occurred.
## Navigating the World Wide Web
In order to visit a web page such as https://parker.com, you initially connect to a DNS server to convert the host portion (parker) combined with the Top Level Domain (com) of the URL into an IP address like ```11.235.108.71```. Your computer and browser always include its type with all web requests, for instance:
```<br>Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways
Your default gateway is typically an automatically provided address through DHCP. It may be a default gateway like ```192.168.88.113``` (although they typically end in .1 or .254 depending on the scope size) where your computer sends all traffic to be routed onwards. For ```IPv6```, there is a comprehensive guide available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also check on Mac or Linux using the following command:<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.88.113    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d622:a11a:80e6:e914%en0  UGcg   en0
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
domain_name_server (ip_mult): {226.187.34.79, 226.55.248.47}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e2:2a:e6:10:83:14
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 10:04:64:e5:ea:b1
}</pre>




## Finding Solutions for Wired and Wireless Connectivity Issues
Whether you are using a wired or wireless (Wi-Fi) medium at the physical and data layer to transmit data to your router, troubleshooting connectivity issues is essential.
### Navigating Apple macOS / OSX for Solutions
Regardless of the version of OSX/macOS you are using, whether it's ```10.15.5```, ```11.1.3```, or ```12.3.7```, there are numerous tools available for troubleshooting. However, these tools do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are accustomed to remote work and working from any location.
#### Utilizing In-Built Scripts for Assistance
A useful tool on OSX/macOS is the ```sudo wdutil info```, which offers a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be utilized to generate a variety of logs, although much of it is only relevant to wireless settings at a given point in time, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* experience, you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to navigate to the location. However, be cautious of file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
