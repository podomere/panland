---
title: "How Can I DiagnOSe Common Wifi Router Issues"
subtitle: "Swag?"
layout: research
ip_v4_address: "35.67.185.58"
date: 2023-11-18T21:19:50+00:00
draft: false
---

## A Guide to Internet Addressing

When using the Internet, you are given an IP address such as ```35.67.185.58``` or ```2000:7d1d:79ca:a524:e9cf:ca4f:84e7:b742```. You can verify this information at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not well-versed in technology, or even referencing MAC addresses like ```b6:f2:e4:44:61:0b```, can be prone to errors and quickly becomes complex. Furthermore, this does not provide any historical data (especially from previous issues).
## Navigating the Internet

In order to access a website such as https://wehner.info, you first connect to a DNS server to convert the host portion (wehner) along with the Top Level Domain (info) of the URL into an IP address like ```58.5.7.48```. Your computer and browser transmit its type along with all web requests e.g. <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured via DHCP. You receive a default gateway such as ```192.168.98.127``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer forwards all of its traffic. For ```IPv6```, you can find in-depth information at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or you can check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.98.127    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:95da:1d66:6ac9:6092%en0  UGcg   en0
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
domain_name_server (ip_mult): {6.189.153.18, 144.107.241.19}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b6:f2:e4:44:61:0b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b6:b6:83:99:23:30
}</pre>




## Diagnosing and Resolving Connectivity Issues

When it comes to transmitting data to your router, you may encounter issues at the physical and data layer, especially if you are using a wired or wireless (Wi-Fi) medium.
### Troubleshooting Tools for Apple macOS / OSX
Regardless of whether you are using OSX/macOS ```10.14.9```, ```11.6.9```, or ```12.2.1```, there are various troubleshooting tools available. However, these manual actions and scripts may not provide a consistent set of values over time. For remote teams or those working from anywhere, automated remote troubleshooting can be particularly useful.
#### Useful Built-in Utilities
One of the most helpful tools on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings in the Command Line Interface (CLI) and can also generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, or run ```sudo /usr/bin/sysdiagnose``` interactively, which will give a privacy warning and open Finder in the correct location. The file sizes can be quite large, around 300MB. Be prepared for this when running the command.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
