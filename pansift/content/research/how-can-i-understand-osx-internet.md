---
title: "How Can I Understand OSX Internet"
subtitle: "Ideate?"
layout: research
ip_v4_address: "222.82.192.10"
date: 2023-11-18T18:25:24+00:00
draft: false
---

## Functioning of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```222.82.192.10```, or an IPv6 address, like ```2000:32af:72de:9e4c:1638:a3b9:8101:d6b0```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not very tech-savvy, communicating these addresses or even referencing MAC addresses, such as ```36:34:9e:01:e0:39```, can be prone to errors and become complicated very quickly. Furthermore, this does not provide any historical data, especially with regards to previous issues.
## Navigating the Internet

In order to access a website, such as https://keebler-kessler.com, you first connect to a DNS server to translate the host portion (keebler-kessler) along with the Top Level Domain (com) of the URL into an IP address, such as ```88.132.27.66```. Your computer and browser automatically include its type in all web requests, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## The Significance of Default Gateways

Your default gateway is typically an address that is automatically configured via DHCP. A default gateway, such as ```172.25.139.43``` (although they usually end in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, there is an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can also check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.25.139.43    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:95ba:1675:106b:4ac6%en0  UGcg   en0
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
domain_name_server (ip_mult): {121.162.89.255, 241.135.183.80}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 36:34:9e:01:e0:39
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 40:e7:30:03:b0:b6
}</pre>




## Ways to Resolve Connectivity Issues with Wired and Wireless Networks

When it comes to transmitting data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions such as ```10.11.3```, ```11.0.5```, or ```12.2.1```, there is a variety of troubleshooting tools available. However, these manual interventions and scripts do not provide a series of interconnected values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One tool that is particularly useful on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI, and can also be configured to generate specific troubleshooting logs. Furthermore, for a more comprehensive range of logs related to wireless networks, the ```sysdiagnose``` tool can be utilized (although much of it is only relevant at a specific point in time, similar to wdutil).

To run the ```sysdiagnose``` tool in the background and generate logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, although it will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
