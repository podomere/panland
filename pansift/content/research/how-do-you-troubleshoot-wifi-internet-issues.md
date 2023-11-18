---
title: "How Do You Troubleshoot Wifi Internet Issues"
subtitle: "Growth Unit?"
layout: research
ip_v4_address: "11.163.1.11"
date: 2023-11-18T21:04:33+00:00
draft: false
---

## Understanding How Internet Addresses Function

When using the Internet, you may be assigned a Public IPv4 address such as ```11.163.1.11``` or an IPv6 address like ```2000:5a08:8547:c501:a302:3038:1ef1:916a```. These can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those not well-versed in technology, or even dealing with MAC addresses like ```c9:b2:fa:cc:b5:6c```, can easily lead to errors and complexities. Furthermore, this approach lacks historical data, especially when addressing past issues.
## Navigating the World Wide Web
Accessing a website such as https://pacocha.net involves an initial connection to a DNS server, which translates the host portion (pacocha) and the Top Level Domain (net) of the URL into an IP address like ```215.239.101.167```. Your computer and browser also transmit their type with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Recognizing the Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. For instance, you may receive a default gateway like ```172.31.45.182``` (usually ending in .1 or .254 based on the scope size), which serves as the location where your computer forwards all its traffic. More detailed information on configuring ```IPv6``` connectivity can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, this can be verified using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.31.45.182    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b403:8035:7a5a:75f0%en0  UGcg   en0
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
domain_name_server (ip_mult): {49.204.122.211, 183.149.190.29}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c9:b2:fa:cc:b5:6c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 3a:94:b4:9b:f7:18
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data, you may use either a wired or wireless (Wi-Fi) medium at the physical and data layer to send the data to your router.
### Resolving Connection Problems on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's 10.11.2, 11.4.3, or 12.2.5, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Using Built-in Scripts for Assistance
One extremely helpful tool on OSX/macOS is the "sudo wdutil info" command, which provides a dump of current wireless related settings to the CLI and can also be configured to generate specific logs for troubleshooting. In addition, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of it is only related to wireless issues, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" in the background will generate logs in "/var/tmp/<blah>.tar.gz" for you. Alternatively, you can run "sudo /usr/bin/sysdiagnose" interactively, although there is not much interaction. It will give a privacy warning and when not run in the background, it should open Finder in the correct location or you can navigate to "/var/tmp" using Finder with Cmd+Shift+G. Just be aware of the file sizes, which are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
