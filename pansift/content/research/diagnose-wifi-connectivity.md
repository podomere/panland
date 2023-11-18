---
title: "DiagnOSe Wifi Connectivity"
subtitle: "Value Add?"
layout: research
ip_v4_address: "208.195.212.167"
date: 2023-11-18T20:47:31+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, you will be assigned a Public IPv4 address, such as ```208.195.212.167```, or an IPv6 address, such as ```2000:a044:1fd8:2306:5fda:4a6a:efe5:d562```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those unfamiliar with technology, trying to communicate these addresses, or even mention MAC addresses like ```96:a5:4f:97:9e:ef```, can be prone to error and quickly become complicated. Moreover, this does not provide any historical data, especially when dealing with past issues.
## How to Reach Websites

In order to access a website like https://kautzer.co, you first need to connect to a DNS server to convert the host portion (kautzer) combined with the Top Level Domain (co) of the URL into an IP address, such as ```250.196.231.171```. Your computer and browser actually include its type in all web requests, for instance: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

The default gateway is typically an automatically allocated address via DHCP. You will receive a default gateway like ```10.186.255.45``` (although they usually end in .1 or .254 depending on the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, there is a detailed explanation available in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.186.255.45    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:783c:789e:95a9:7d38%en0  UGcg   en0
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
domain_name_server (ip_mult): {199.97.150.242, 59.115.56.61}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 96:a5:4f:97:9e:ef
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e9:86:96:a7:aa:7b
}</pre>




## Resolve Connectivity Issues for Wired and Wireless Networks
When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX
Regardless of the version of OSX/macOS you are operating on, whether it's 10.15.9, 11.5.5, or 12.0.8, there is a variety of troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One of the useful tools on OSX/macOS is "sudo wdutil info", which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the "sysdiagnose" tool can be utilized to generate a wide range of logs, although much of it is only relevant to the wireless issue, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" in the background will write logs to "/var/tmp/<blah>.tar.gz". For interactive use, you can simply run "sudo /usr/bin/sysdiagnose", which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" using Finder with Cmd+Shift+G or use the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
