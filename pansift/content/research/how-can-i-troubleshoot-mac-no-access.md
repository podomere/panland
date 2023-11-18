---
title: "How Can I Troubleshoot Mac No-access"
subtitle: "Make It Actionable?"
layout: research
ip_v4_address: "126.215.253.172"
date: 2023-11-18T19:33:30+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```126.215.253.172``` or an IPv6 address like ```2000:29f:40f0:f7a5:4243:d57e:e441:1ca7```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or even discussing these addresses, or even MAC addresses like ```a2:79:11:e9:60:2f```, with individuals who are not technologically savvy can be prone to errors and become complex. Additionally, this method does not provide any historical data, especially regarding previous issues.
## Navigating the World Wide Web
When attempting to reach a web page, such as https://oconnell-douglas.info, you initially connect to a DNS server to translate the host portion (oconnell-douglas) combined with the Top Level Domain (info) of the URL to an IP address like ```195.199.50.163```. Your computer and browser actually sends its type with all web requests, for example: ```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways
Your default gateway is typically an automatically configured address through DHCP. This default gateway, such as ```10.39.201.14``` (usually ending in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be routed onwards. For information regarding ```IPv6```, there is an in-depth guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, you can also check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.39.201.14    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c2f9:8191:aa18:1841%en0  UGcg   en0
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
domain_name_server (ip_mult): {69.33.237.115, 66.225.67.241}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a2:79:11:e9:60:2f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2e:df:db:3e:73:9c
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX
Regardless of which version of OSX/macOS you're operating on, whether it's 10.15.7, 11.0.3, or 12.1.4, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes extremely beneficial, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Built-in Tools That Can be Utilized
An extremely useful tool on OSX/macOS is "sudo wdutil info" which provides a dump to the command line interface of current wireless related settings. It can also be configured to generate specific logs for troubleshooting. Additionally, the "sysdiagnose" tool can be used to generate a wide array of logs, although much of it is point-in-time related to wireless, similar to wdutil.

To run "sysdiagnose" in the background and write logs to "/var/tmp/<blah>.tar.gz", use the command "sudo nohup /usr/bin/sysdiagnose -u &". If you prefer to run it interactively, use the command "sudo /usr/bin/sysdiagnose", which will open Finder in the correct location or allow you to navigate to "/var/tmp" to access the logs. Keep in mind that the file sizes are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
