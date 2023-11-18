---
title: "Fix MacOS Internet Connection"
subtitle: "Penetrate The Market?"
layout: research
ip_v4_address: "90.110.146.220"
date: 2023-11-18T22:21:20+00:00
draft: false
---

## The Fundamentals of Internet Addressing

When using the Internet, individuals may have a public IPv4 address, such as ```90.110.146.220```, or an IPv6 address, like```2000:2467:a3b0:e72f:c91b:81d4:763e:e3fe```. These addresses can be checked using [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, communicating and using addresses like these, or even referring to MAC addresses such as ```47:67:e1:55:c4:5f```, can quickly become complicated and error-prone. Furthermore, they do not provide any historical data, particularly from previous issues.
## Navigating the Web and the Mechanics of Lookups

When accessing a webpage like https://rosenbaum.info, users first reach out to a DNS server to convert the host part (rosenbaum) and the Top Level Domain (info) of the URL into an IP address, such as ```213.155.43.155```. Additionally, all web requests from a user's computer and browser include information about their type, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

Typically, default gateways are automatically configured addresses through DHCP. Users will receive a default gateway, such as ```192.0.0.106``` (usually ending in .1 or .254, depending on the scope size), to which their computer will send all its traffic to be further routed. For a more extensive guide on ```IPv6```, visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.106    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:26f9:f16f:6656:2595%en0  UGcg   en0
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
domain_name_server (ip_mult): {74.198.16.231, 10.231.250.105}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 47:67:e1:55:c4:5f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f8:f9:d7:49:cf:aa
}</pre>




## Resolving Connection Issues for Wired and Wireless Setups
When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are running OSX or macOS versions such as 10.15.7, 11.4.5, or 12.3.3, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes essential, especially for teams operating remotely and embracing the concept of Work From Anywhere (WFA).
#### Utilizing Built-in Scripts and Commands for Assistance
One particularly useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant at a specific point in time in relation to wireless, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* approach, you can run ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes will be around 300MB more or less.
## Useful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
