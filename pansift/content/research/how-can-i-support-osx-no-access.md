---
title: "How Can I Support OSX No-access"
subtitle: "Sales Funnel?"
layout: research
ip_v4_address: "65.83.22.193"
date: 2023-11-18T18:24:45+00:00
draft: false
---

## Understanding Internet Protocol Addresses

When using the Internet, you are assigned a unique Public IPv4 address, such as ```65.83.22.193```, or an IPv6 address, for example ```2000:61ec:6752:8c56:39e2:5924:7557:c4f4```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even mentioning MAC addresses like ```69:6b:ce:3c:ce:48```, in a way that is understandable to those not familiar with technology can be prone to errors and quickly become complex. Furthermore, this does not provide any historical data, particularly when previous issues occurred.
## Navigating through the World Wide Web

Accessing a web page like https://heathcote.biz involves initially connecting to a DNS server to convert the host portion (heathcote) combined with the Top Level Domain (biz) of the URL into an IP address, such as ```139.247.203.188```. Whenever your computer and browser make web requests, they also provide their specifications, for instance:
<br>

```plaintext
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
```
## Significance of Default Gateways

The default gateway is typically an address assigned through DHCP. A default gateway, such as ```192.168.169.114``` (commonly ending in .1 or .254 depending on the scope size), is where your computer sends all its traffic to be routed to other destinations. For ```IPv6```, detailed information can be found in our guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or it can be checked on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.169.114    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:98ef:2470:418f:f2cb%en0  UGcg   en0
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
domain_name_server (ip_mult): {199.125.103.192, 86.172.108.246}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 69:6b:ce:3c:ce:48
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d2:2d:d2:c3:33:ea
}</pre>




## Troubleshooting and Resolving Connectivity Issues

When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Connectivity Problems on Apple macOS / OSX

Regardless of the version of OSX/macOS you are using, whether it's ```10.14.1```, ```11.3.1```, or ```12.3.9```, there are various tools available for diagnosing and resolving issues. However, these tools do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes essential, particularly for teams that adopt remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance

One useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

To run it in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, you can use ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, for interactive use, you can run ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
