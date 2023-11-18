---
title: "How To Understand MacOS No-access"
subtitle: "Bucketize It?"
layout: research
ip_v4_address: "214.105.218.95"
date: 2023-11-18T17:37:27+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a Public IPv4 address (e.g. ```214.105.218.95```) or an IPv6 address (e.g. ```2000:1085:662e:488f:4d02:f6de:f8a5:d389```). This can be verified using [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and relaying these addresses, along with MAC addresses like ```08:ae:5d:86:48:eb```, can be error-prone and complex for non-technical individuals. Moreover, it does not provide historical data, especially for past issues.
## Navigating the World Wide Web
In order to access a website such as https://howe.biz, your computer initially contacts a DNS server to convert the host segment (howe) along with the Top Level Domain (biz) of the URL into an IP address, such as ```122.79.129.90```. Additionally, your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Significance of Default Gateways
Your default gateway is usually an address configured automatically via DHCP. It typically ends in .1 or .254, depending on the scope size, and it is where your computer directs all its traffic for further routing. For ```IPv6```, more information can be found in our in-depth discussion on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.238.116    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6c2:c3be:5a65:8121%en0  UGcg   en0
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
domain_name_server (ip_mult): {67.251.36.215, 90.188.70.37}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 08:ae:5d:86:48:eb
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 36:5f:ce:9f:3b:53
}</pre>




## Finding Solutions for Wired and Wireless Connectivity Issues

When it comes to transmitting data to your router, you may encounter issues related to both wired and wireless (Wi-Fi) connections at the physical and data layer.
### Resolving Problems on Apple macOS / OSX Devices

Regardless of whether your device is running on OSX or macOS, whether it's version ```10.11.3```, ```11.3.4```, or ```12.0.5```, there are various troubleshooting methods available. However, these manual approaches and scripts do not provide a continuous set of related values over a period of time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that have adopted remote work and Work From Anywhere (WFA) policies.
#### Utilizing Built-in Scripts for Assistance

One useful tool for OSX/macOS is the ```sudo wdutil info``` command, which provides a CLI dump of current wireless settings and can be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be employed to produce a wide range of logs, although much of it is only relevant to wireless connectivity at a specific point in time, similar to the wdutil tool. 

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, the command ```sudo /usr/bin/sysdiagnose``` will trigger a privacy warning. When not executed in the background, it should open Finder in the correct location, allowing you to navigate to ```/var/tmp```, or you can use Finder with Cmd+Shift+G for direct access to the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
