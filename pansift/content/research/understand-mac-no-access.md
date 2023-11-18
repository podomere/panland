---
title: "Understand Mac No-access"
subtitle: "Rubber Meets The Road?"
layout: research
ip_v4_address: "111.46.141.113"
date: 2023-11-18T19:21:16+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, individuals may possess a Public IPv4 address such as ```111.46.141.113``` or an IPv6 address such as ```2000:45f6:1cb8:1770:b51d:efe3:52af:2fe7```. These addresses can be verified using [https://test-ipv6.com/](https://test-ipv6.com/). Conveying these addresses, or even mentioning MAC addresses like ```36:0f:4d:c3:fc:9d```, can be error-prone and complicated, especially for those who are not technologically inclined. Additionally, historical data is not provided, which can be important for understanding past issues.
## Navigating the World Wide Web

When attempting to access a website, such as https://walsh-hickle.biz, the first step is to contact a DNS server. This server translates the host portion (walsh-hickle) in conjunction with the Top Level Domain (biz) of the URL, into an IP address like ```67.19.127.171```. Furthermore, the computer and browser include their type when making web requests, for example: <br> ```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
The default gateway is typically an address that is automatically configured via DHCP. A default gateway, such as ```172.22.32.43``` (usually ending in .1 or .254 based on the scope size), is where a computer sends all of its traffic to be routed forward. For ```IPv6```, a comprehensive explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and individuals utilizing Mac or Linux operating systems can verify this using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.22.32.43    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b85b:95:71a4:f0b4%en0  UGcg   en0
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
domain_name_server (ip_mult): {136.43.151.104, 184.46.42.217}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 36:0f:4d:c3:fc:9d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 65:04:6e:0e:b9:1b
}</pre>




## How to Address Issues with Wired and Wireless Connectivity
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether your operating system is OSX/macOS version ```10.12.3```, ```11.6.4```, or ```12.0.9```, there are various troubleshooting tools available. However, these tools do not provide a series of correlated values over time, and this is where automated remote troubleshooting becomes especially valuable, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Scripts
One tool that can be very helpful on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs related to wireless issues, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, but be cautious of the large file sizes of about 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
