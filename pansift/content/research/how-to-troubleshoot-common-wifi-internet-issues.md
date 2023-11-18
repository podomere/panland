---
title: "How To Troubleshoot Common Wifi Internet Issues"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "199.16.130.245"
date: 2023-11-18T21:15:10+00:00
draft: false
---

## Understanding IP Address Assignment

When using the Internet, you are assigned a specific IP address like ```199.16.130.245``` (IPv4) or ```2000:e802:d6e2:b4ec:8021:e76e:85e3:f8d4``` (IPv6). Verifying your IP address can be done through the website [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, communicating these addresses or even referencing MAC addresses like ```6b:83:31:83:69:05``` can become complicated and prone to errors. Additionally, this method does not provide any historical data, particularly regarding past issues.
## Navigating the Internet
To access a website such as https://ernser-koepp.com, you first connect to a DNS server to translate the host portion (ernser-koepp) combined with the Top Level Domain (com) of the URL into an IP address, such as ```106.250.218.162```. Every web request made by your computer and browser contains information about its type, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways
Your default gateway is usually an address that is automatically configured through DHCP. You are given a default gateway such as ```10.247.147.134``` (commonly ending in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed explanation can be found in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but on Mac or Linux, you can check this using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.247.147.134    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9378:f753:58c4:bfce%en0  UGcg   en0
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
domain_name_server (ip_mult): {248.117.107.18, 22.191.46.171}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 6b:83:31:83:69:05
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 86:7b:25:6a:5b:8d
}</pre>




## Fixing Issues with Wired and Wireless Connections
When it comes to your network connection, whether wired or wireless (Wi-Fi), troubleshooting can be a challenge especially at the physical and data layer when sending data to your router.
### Troubleshooting Solutions for Apple macOS / OSX
Regardless of the version of OSX/macOS you're using, whether it's ```10.15.8```, ```11.3.3```, or ```12.2.9```, there is a variety of tools available for troubleshooting. However, these tools often fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump to the CLI of current wireless settings and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to a specific point in time in relation to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (although there isn't much interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will provide a privacy warning. When not run in the background, it should open Finder in the correct location or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. However, be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
