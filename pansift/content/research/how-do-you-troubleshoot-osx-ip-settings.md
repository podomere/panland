---
title: "How Do You Troubleshoot OSX IP Settings"
subtitle: "Snackable Content?"
layout: research
ip_v4_address: "149.31.11.139"
date: 2023-11-18T18:29:51+00:00
draft: false
---

## Understanding the Functionality of Internet Addressing

When using the Internet, it's common to have either a Public IPv4 address, such as ```149.31.11.139```, or an IPv6 address, such as ```2000:c0bd:70b2:cc7c:57d7:3a22:dee1:8215```. Verification of this information can be done through [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses, or MAC addresses like ```71:93:47:e1:a4:c9```, can be complex and susceptible to errors, particularly for those with limited technical knowledge. Furthermore, historical data is not available when addressing past issues.
## Navigating the Internet

In order to access a website like https://crooks.net, you make an initial connection to a DNS server to convert the host portion (crooks) combined with the Top Level Domain (net) of the URL into an IP address, such as ```227.135.151.1```. Your computer and browser specifies its type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways

By default, your gateway is an address that is usually automatically configured via DHCP. A default gateway, such as ```192.0.0.59``` (typically ending in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, you can refer to our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or utilize Mac or Linux to check.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.59    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d6a7:f189:e31a:72c1%en0  UGcg   en0
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
domain_name_server (ip_mult): {132.79.4.249, 175.70.94.238}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 71:93:47:e1:a4:c9
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 79:41:e5:59:92:57
}</pre>




## How to Resolve Issues with Wired or Wireless Connections

When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Users

Regardless of your version of OSX/macOS - whether it's ```10.13.4```, ```11.0.6```, or ```12.0.2``` - there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Effective Built-in Scripts for Troubleshooting

One useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and this can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, logs will be written to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can execute ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
