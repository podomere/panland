---
title: "How To Fix MacOS Connectivity"
subtitle: "Data Points?"
layout: research
ip_v4_address: "106.18.149.19"
date: 2023-11-18T17:23:25+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address, such as ```106.18.149.19```, or an IPv6 address, like ```2000:dbf4:9ece:6937:1bbe:12f9:f33a:6f76```. A simple way to verify this is through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not technologically inclined can be challenging and error-prone, even when dealing with MAC addresses, such as ```cf:6c:0e:69:30:dc```. Moreover, it does not provide any historical data, particularly from previous issues.
## Navigating the Internet
When attempting to access a web page, like https://mccullough.net, you initially interact with a DNS server to convert the host portion (mccullough) in combination with the Top Level Domain (net) of the URL into an IP address, such as ```9.246.253.238```. In addition, your computer and browser include information about their type in all web requests, for example:
<br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways
The default gateway is typically an automatically configured address via DHCP. It usually ends in .1 or .254, depending upon the scope size, such as ```192.0.0.95```, and it is where your computer forwards all its traffic to be routed. For ```IPv6```, further details are available in a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), although you can check on Mac or Linux by utilizing:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.95    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e0b2:c92:2ab0:dd7f%en0  UGcg   en0
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
domain_name_server (ip_mult): {84.178.18.164, 209.113.252.148}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr cf:6c:0e:69:30:dc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d7:2e:a6:98:22:cc
}</pre>




## Resolve Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are using OSX/macOS versions such as "10.14.3", "11.4.7", or "12.0.1", there is a wide range of troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts 
One particularly beneficial tool on OSX/macOS is "sudo wdutil info", which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the "sysdiagnose" tool can generate a comprehensive range of logs, although much of it is only relevant to wireless at a particular point in time, similar to wdutil.

To run it in the background and write logs to "/var/tmp/<blah>.tar.gz", use the command "sudo nohup /usr/bin/sysdiagnose -u &". If you prefer to run it interactively, use "sudo /usr/bin/sysdiagnose", which will open Finder in the correct location or allow you to navigate to "/var/tmp", or use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind that the file sizes are approximately 300MB or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
