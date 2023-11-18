---
title: "How To Understand Apple Issues"
subtitle: "Data Points?"
layout: research
ip_v4_address: "50.132.83.223"
date: 2023-11-18T18:53:31+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned an IP address, such as the Public IPv4 address ```50.132.83.223``` or an IPv6 address like ```2000:17d2:1b8:c389:8f29:8af7:f1cc:fc3a```. These can be verified through [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses or MAC addresses such as ```a4:32:53:27:21:12``` can be error-prone and complicated for those who are not tech-savvy. Furthermore, it does not provide historical data, particularly when dealing with past issues.
## Navigating the World Wide Web

When attempting to access a web page, such as https://turner-rutherford.com, the process begins by reaching out to a DNS server to translate the host portion (turner-rutherford) integrated with the Top Level Domain (com) of the URL into an IP address, such as ```73.155.248.80```. Interestingly, your computer and browser transmit their type with all web requests, as evidenced by the example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Significance of Default Gateways

The default gateway is typically an address that is automatically configured via DHCP. This address, such as ```10.116.81.234``` (which usually ends in .1 or .254 depending on the scope size), serves as the point where your computer dispatches all its traffic to be directed elsewhere. For ```IPv6```, there is an in-depth guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, the default gateway on Mac or Linux can be checked utilizing the following commands:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.116.81.234    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b5d5:c48c:8255:5c66%en0  UGcg   en0
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
domain_name_server (ip_mult): {92.47.77.15, 239.169.178.160}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a4:32:53:27:21:12
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 47:40:a3:64:61:27
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS you are currently running, whether it's `10.14.8`, `11.0.7`, or `12.1.3`, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool for OSX/macOS is `sudo wdutil info`, which provides a dump of the current wireless related settings to the CLI and can also be configured to generate specific logs for troubleshooting. In addition, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings at a particular point in time, just like wdutil.

To run `sysdiagnose` in the background and write logs to `/var/tmp/<blah>.tar.gz`, you can use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, although there is not much interaction involved. Just be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
