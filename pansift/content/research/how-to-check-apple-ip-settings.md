---
title: "How To Check Apple IP Settings"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "179.117.232.125"
date: 2023-11-18T18:51:47+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals are assigned either a Public IPv4 address, such as ```179.117.232.125```, or an IPv6 address, like ```2000:929a:dcec:c41d:6d60:7980:e92d:49a9```. These addresses can be verified using the [test-ipv6.com](https://test-ipv6.com/) website. However, for those who are not knowledgeable in technology, relay these addresses, or even mention MAC addresses, it can quickly become complicated and prone to errors. It also lacks the ability to provide historical data, especially for past issues.
## Navigating the Internet
Accessing a website, such as https://white.io, involves contacting a DNS server to convert the host section (white) along with the Top Level Domain (io) of the URL into an IP address, such as ```186.156.99.201```. Your computer and web browser includes its specifications in all web requests, for example: 
```html
Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16
```
## The Significance of Default Gateways
The default gateway is usually an address that is automatically configured through DHCP. This address, such as ```172.24.38.169``` (typically ending in .1 or .254 based on the scope size), is the location where your computer sends all of its traffic to be routed further. For those using ```IPv6```, more detailed information can be found in our blog post titled: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can also check on Mac or Linux by using the following command:
```html
```bash
command
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.24.38.169    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:eb05:361a:583a:1aed%en0  UGcg   en0
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
domain_name_server (ip_mult): {144.192.190.163, 170.46.1.247}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 63:8d:69:97:02:10
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 5f:73:b6:96:52:0b
}</pre>




## Fixing Connectivity Issues in Wired or Wireless Networks

When it comes to transmitting data at the physical and data layer, you may be utilizing either a wired or wireless (Wi-Fi) medium to convey this data to your router.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are currently using, whether it's ```10.14.6```, ```11.6.5```, or ```12.3.3```, there are various tools available for troubleshooting. However, these manual interventions and scripts lack the ability to provide a series of correlated values over time. This is where automated remote troubleshooting becomes incredibly useful, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Useful Built-in Command Line Tools
An extremely useful tool for OSX/macOS users is ```sudo wdutil info```, which provides a dump of the current wireless settings to the command line interface, and can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although much of it is limited to point-in-time information in relation to wireless issues, like wdutil.

To run the ```sysdiagnose``` tool in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the following command: ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can execute ```sudo /usr/bin/sysdiagnose```, which will also prompt a privacy warning. When run in the foreground, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are usually around 300MB.
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
