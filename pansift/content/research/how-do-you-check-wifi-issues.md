---
title: "How Do You Check Wifi Issues"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "20.125.243.97"
date: 2023-11-18T21:05:50+00:00
draft: false
---

## The Mechanics of Internet Addressing

When it comes to the Internet, you might be assigned a Public IPv4 address such as ```20.125.243.97``` or an IPv6 address like ```2000:c5b4:501a:e669:11f6:d827:7f2:9d54```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses to individuals who are not well-versed in technology, or even mentioning MAC addresses like ```7f:86:c7:57:e8:68```, can quickly become error-prone and complex. Moreover, this approach does not provide any historical data, especially when it comes to past issues.
## Navigating the World Wide Web

When you attempt to access a website like https://stehr.biz, you first reach out to a DNS server to transform the host portion (stehr) in combination with the Top Level Domain (biz) of the URL into an IP address, such as ```255.214.193.83```. Furthermore, your computer and browser share their type with every web request, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

Your default gateway is typically an address that is automatically configured via DHCP. You receive a default gateway, for instance ```172.18.215.201``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer forwards all its traffic to be routed further. For ```IPv6```, we provide an in-depth explanation in our [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) article, but on Mac or Linux, you can check it using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.18.215.201    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:99ec:3883:7149:960%en0  UGcg   en0
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
domain_name_server (ip_mult): {250.99.137.181, 184.144.110.146}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 7f:86:c7:57:e8:68
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 06:5b:b2:1b:ce:e2
}</pre>




## Fixing Connectivity Issues in Wired and Wireless Networks
When it comes to transmitting data to your router, the choice of using a wired or wireless (Wi-Fi) medium is crucial at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you are currently using, whether it's ```10.11.9```, ```11.3.6```, or ```12.0.6```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting proves to be extremely beneficial, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One of the most useful tools on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI. This tool can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although most of it is only relevant to wireless settings, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, which will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can use ```sudo /usr/bin/sysdiagnose``` but be aware of the privacy warning. Running it in the background should open Finder in the correct location, and you can also navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the files. Just keep in mind that the file sizes can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
