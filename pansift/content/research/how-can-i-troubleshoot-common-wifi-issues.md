---
title: "How Can I Troubleshoot Common Wifi Issues"
subtitle: "Value Add?"
layout: research
ip_v4_address: "142.105.117.247"
date: 2023-11-18T21:19:59+00:00
draft: false
---

## An Overview of Internet Addressing

When connecting to the Internet, you will be assigned either a Public IPv4 address, such as ```142.105.117.247```, or an IPv6 address like ```2000:47fb:d00a:b22f:9e6b:79e1:c368:522f```. To verify your assigned address, visit [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or MAC addresses like ```ae:ee:28:8a:ab:a2```, can be complex and error-prone for those not well-versed in technology. Additionally, this does not provide any historical data, especially when previous issues occurred.
## Navigating the World Wide Web

When accessing a webpage, for example, https://stiedemann-predovic.info, your computer initially contacts a DNS server to translate the host portion (stiedemann-predovic) combined with the Top Level Domain (info) of the URL, to an IP address like ```174.205.0.186```. Additionally, your computer and browser send their type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

By default, your gateway address is automatically configured via DHCP. This address, such as ```172.16.28.115``` (though they generally end in .1 or .254 depending on the scope size), is where your computer sends all its traffic to be routed onwards. For ```IPv6```, you can find detailed information in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). You can also check on Mac or Linux by: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.16.28.115    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e3a7:54f4:6ec3:5c0f%en0  UGcg   en0
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
domain_name_server (ip_mult): {3.89.243.247, 254.23.17.228}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ae:ee:28:8a:ab:a2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 42:c2:58:58:f0:f2
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you could be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
No matter if you are using OSX/macOS version ```10.15.4```, ```11.2.9```, or ```12.0.3```, there are a variety of troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes valuable, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the Command Line Interface (CLI) and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to produce a comprehensive set of logs, although much of it is only relevant to wireless settings, like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can use ```sudo /usr/bin/sysdiagnose```, which will generate a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
