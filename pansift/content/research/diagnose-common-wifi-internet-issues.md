---
title: "DiagnOSe Common Wifi Internet Issues"
subtitle: "Tee It Up?"
layout: research
ip_v4_address: "87.132.45.123"
date: 2023-11-18T21:09:19+00:00
draft: false
---

## Functioning of Internet Addressing

When using the Internet, individuals may receive a Public IPv4 address such as ```87.132.45.123``` or an IPv6 address like ```2000:a7b2:1bf5:2e5e:a2f2:afc6:ee8:22aa```. The accessibility of these addresses can be confirmed at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical individuals or mentioning MAC addresses like ```0c:ab:75:ea:03:3e``` can be prone to errors and can become complex. Furthermore, this method does not provide historical data on previous issues.
## Web Navigation
When attempting to access a webpage such as https://miller.biz, the initial step involves contacting a DNS server to convert the host portion (miller) in combination with the Top Level Domain (biz) of the URL to an IP address like ```209.227.152.61```. With every web request, your computer and browser also send its specifications, for instance: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Significance of Default Gateways
Typically, your default gateway is an automatically assigned address via DHCP. The default gateway, which is where your computer forwards all of its traffic, is typically an address such as ```172.17.130.235``` (usually ending in .1 or .254 based on the scope size). For ```IPv6```, detailed instructions are available in the blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can be verified on Mac or Linux by using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.17.130.235    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1caa:353f:9892:f043%en0  UGcg   en0
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
domain_name_server (ip_mult): {4.145.70.174, 224.120.125.169}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0c:ab:75:ea:03:3e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 1d:be:4a:34:cf:de
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to sending data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Addressing Problems on Apple macOS / OSX
Irrespective of the version of OSX/macOS you are using, whether it's ```10.15.9```, ```11.3.1```, or ```12.0.8```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. In such cases, automated remote troubleshooting becomes extremely valuable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Embedded Scripts for Assistance
One valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless related settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless network issues, similar to the wdutil tool.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute this tool in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. For an *interactive* option (although there is not much interaction), you can run<br>```sudo /usr/bin/sysdiagnose```, and it will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. However, be mindful of the file sizes, which are approximately 300MB more or less.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
