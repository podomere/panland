---
title: "Understand Apple Internet"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "159.123.181.173"
date: 2023-11-18T18:44:34+00:00
draft: false
---

## The Functionality of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address such as ```159.123.181.173``` or an IPv6 address like ```2000:678e:8f4f:8e5d:dd72:680f:93e0:c298```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, attempting to communicate these addresses, or even reciting MAC addresses like ```5e:5b:cd:cc:6e:8e```, can lead to errors and complications. Moreover, this method does not provide any historical data, particularly when past issues have arisen.
## Navigating the Internet
When attempting to access a website such as https://strosin.net, the first step involves contacting a DNS server to convert the host section (strosin) in combination with the Top Level Domain (net) of the URL into an IP address, for example, ```72.238.123.167```. With every web request, your computer and browser actually transmit its type, such as <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
Typically, your default gateway is an automatically configured address obtained via DHCP. A default gateway like ```192.168.74.229``` (often ending in .1 or .254, based on the scope size) is where your computer directs all its traffic to be routed onwards. For ```IPv6```, we have a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), although you can verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.74.229    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:bf52:3620:d0d0:37c0%en0  UGcg   en0
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
domain_name_server (ip_mult): {177.90.46.211, 159.155.148.227}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5e:5b:cd:cc:6e:8e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ab:9c:49:23:c7:de
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX
Regardless of whether you are running ```10.15.8```, ```11.5.6```, or ```12.1.8```, there are various troubleshooting tools available for Apple macOS / OSX. However, these manual actions and scripts do not provide a series of correlated values over time. Automated remote troubleshooting becomes essential, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Effective Built-in Tools for Troubleshooting
A very useful tool for troubleshooting on OSX/macOS is ```sudo wdutil info```, which provides a dump to the CLI of current wireless settings and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, though much of it is point-in-time only in relation to wireless, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you want to run it interactively, use the command ```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to the ```/var/tmp``` folder using Finder with Cmd+Shift+G. Keep in mind that the file sizes are about 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
