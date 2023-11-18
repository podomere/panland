---
title: "How Do You DiagnOSe Mac Issues"
subtitle: "Bleeding Edge?"
layout: research
ip_v4_address: "212.124.27.152"
date: 2023-11-18T19:39:35+00:00
draft: false
---

## Understanding How Internet Addressing Functions

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```212.124.27.152```, or an IPv6 address, like ```2000:ee4:1563:fac8:8a37:32a6:f6f9:263b```. To verify this, visit [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, as well as MAC addresses like ```c6:4d:34:d4:ec:e4```, can be error-prone and complex for those who are not tech-savvy. Moreover, it does not provide historical data, especially regarding past issues.
## Navigating the Internet
When attempting to access a webpage, such as https://witting.org, the first step is to access a DNS server to convert the host portion (witting) and the Top Level Domain (org) of the URL into an IP address, such as ```118.159.242.110```. Each web request from your computer and browser also includes its type, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
In most cases, the default gateway is an address that is automatically configured via DHCP. This default gateway, such as ```10.34.31.237``` (usually ending in .1 or .254 based on the scope size), is where a computer sends all its traffic to be routed further. For a detailed guide on configuring it for ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check it on Mac or Linux using the following command.
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.34.31.237    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4d2a:8401:9189:e8bf%en0  UGcg   en0
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
domain_name_server (ip_mult): {137.178.221.146, 216.177.128.48}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c6:4d:34:d4:ec:e4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e1:56:71:02:9f:38
}</pre>




## Resolving Issues with Wired and Wireless Connectivity

When it comes to sending data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple's macOS / OSX
Regardless of which version of OSX/macOS you are using, whether it's ```10.11.8```, ```11.6.4```, or ```12.1.5```, there are several tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
On OSX/macOS, a useful tool is ```sudo wdutil info```, which dumps current wireless related settings to the CLI and can also generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to the wireless issues, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* option (even though there is minimal interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will prompt a privacy warning. If not run in the background, it should open Finder in the correct location. Otherwise, you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
