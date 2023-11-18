---
title: "How Can I Test Wifi No Access"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "155.70.137.217"
date: 2023-11-18T21:00:13+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```155.70.137.217```, or an IPv6 address, like ```2000:e1d4:ca75:18d7:c238:cd7a:8e0b:ec2d```. Verifying this information is possible using a tool like [https://test-ipv6.com/](https://test-ipv6.com/). These addresses, along with MAC addresses, can be challenging for non-technical individuals to communicate and can quickly become complex. Moreover, this information does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web

To access a specific webpage, such as https://trantow-torphy.org, you first contact a DNS server to convert the host portion (trantow-torphy) combined with the Top Level Domain (org) of the URL to an IP address like ```139.177.197.75```. Moreover, your computer and browser include their type in all web requests, e.g. <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Understanding the Significance of Default Gateways

A default gateway is typically an address assigned automatically via DHCP, such as ```192.0.0.222``` (although they generally end in .1 or .254 depending on the scope size). This is the point where your computer directs all its traffic to be routed onwards. For a detailed exploration of default gateways in ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, you can verify this information using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.222    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9e41:b742:8e25:bc63%en0  UGcg   en0
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
domain_name_server (ip_mult): {230.110.1.15, 187.160.131.117}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ff:4f:ca:94:67:2a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 6c:a2:7b:e7:b1:f8
}</pre>




## Resolving Connection Issues for Wired and Wireless Networks
When transmitting data to your router, you may choose to do so using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Strategies for Apple macOS / OSX
Irrespective of the version of OSX/macOS you are operating on, whether it's ```10.13.4```, ```11.3.9```, or ```12.1.7```, there are various tools available for resolving network connection issues. However, these manual interventions and scripts fail to provide a sequence of related values over a period of time. This is where the importance of automated remote troubleshooting becomes evident, particularly for teams that are in favor of remote work and Work From Anywhere (WFA) concept.
#### Inbuilt Tools for Assistance
On OSX/macOS, the ```sudo wdutil info``` tool proves to be very useful as it provides a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool offers a more comprehensive solution as it is capable of generating a wide range of logs, although most of the information is only relevant to a specific point in time, similar to wdutil.

By executing ```sudo nohup /usr/bin/sysdiagnose -u &```, you can run the tool in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (despite minimal interaction), you can use the command ```sudo /usr/bin/sysdiagnose```, which will generate a privacy warning. When not executed in the background, it should open Finder in the appropriate location, allowing you to navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to direct Finder to the designated path. However, be mindful of the file sizes, which can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
