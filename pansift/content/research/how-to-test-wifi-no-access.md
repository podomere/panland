---
title: "How To Test Wifi No Access"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "130.249.88.81"
date: 2023-11-18T20:55:05+00:00
draft: false
---

## Understanding the Functionality of Internet Addresses

When using the Internet, you are assigned a Public IPv4 address, such as ```130.249.88.81``` or an IPv6 address like ```2000:d2d:5581:eb3c:df93:7a77:8df9:2337```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not familiar with technical jargon, communicating these addresses or even identifying MAC addresses like ```bd:2a:20:01:ca:3c``` can lead to errors and complexity. Moreover, this method does not provide historical data, especially pertaining to past issues.
## Navigating Through the World Wide Web

When attempting to access a web page, such as https://lemke.co, your first step involves reaching out to a DNS server to convert the host portion (lemke) combined with the Top Level Domain (co) of the URL into an IP address, such as ```177.240.120.212```. Additionally, your computer and browser transmit their type with all web requests, for example: `<br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways

The default gateway is typically an address that is automatically configured via DHCP. As a result, you obtain a default gateway, such as ```192.0.0.86``` (although they typically end in .1 or .254 based on the scope size), where your computer directs all of its traffic to be routed onwards. For ```IPv6```, a comprehensive explanation is available in our blog post titled [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux, you can check this by:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.86    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b33c:2f8:1eec:ba2f%en0  UGcg   en0
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
domain_name_server (ip_mult): {8.66.124.20, 46.224.249.128}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr bd:2a:20:01:ca:3c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2a:74:7b:f4:5a:94
}</pre>




## Fixing Network Connectivity Issues

When it comes to transferring data to your router, you may encounter issues related to the physical and data layer. These issues can arise whether you are using a wired or wireless (Wi-Fi) medium.
### Troubleshooting Solutions for Apple's macOS

Regardless of whether you are using OSX or macOS, be it version ```10.11.6```, ```11.4.3```, or ```12.1.5```, there are various tools available to help troubleshoot network connectivity. However, manual actions and scripts do not provide a complete set of correlated values over time. This is where automated remote troubleshooting becomes crucial, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance

A very useful tool for troubleshooting on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the command line interface. This tool can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of the information is only relevant to a specific point in time, similar to the wdutil tool.

To run the sysdiagnose tool in the background and save the logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, you can run the tool interactively by using the command ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to the path ```/var/tmp``` using Finder with the shortcut Cmd+Shift+G. However, be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
