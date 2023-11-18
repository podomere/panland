---
title: "How Do You Troubleshoot Mac IP Settings"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "212.54.174.184"
date: 2023-11-18T19:41:36+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```212.54.174.184```, or an IPv6 address, like ```2000:b9e1:6ec6:ff0c:346b:a404:9b51:e0fb```. You can verify these addresses on [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even MAC addresses like ```d8:42:08:44:53:29```, to individuals who are not technologically savvy can be prone to errors and can become complex. This method also does not provide historical data, especially when previous issues occurred.
## Navigating the World Wide Web

When accessing a web page, such as https://parker.net, you first connect to a DNS server to convert the host portion (parker) combined with the Top Level Domain (net) of the URL to an IP address, like ```189.121.118.85```. Your computer and browser send their type with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

Your default gateway is typically an automatically configured address via DHCP. You are assigned a default gateway, such as ```172.26.150.213``` (although they typically end in .1 or .254 depending upon the scope size), and this is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, you can delve deeper into this topic by visiting [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify on Mac or Linux systems using the following command: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.26.150.213    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1db:9b77:9d77:3242%en0  UGcg   en0
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
domain_name_server (ip_mult): {30.103.45.222, 92.143.213.108}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d8:42:08:44:53:29
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 11:5d:d7:53:dc:39
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to sending data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS - be it 10.15.8, 11.6.1, or 12.0.8 - there are several troubleshooting tools available for you. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that are embracing remote work and the concept of Work From Anywhere (WFA).
#### Useful Built-in Scripts
One tool that you can use on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only related to wireless settings at a specific point in time, similar to wdutil.

To run the sysdiagnose tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, which will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
