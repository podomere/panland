---
title: "How To Fix Wifi Router Issues"
subtitle: "Market Share?"
layout: research
ip_v4_address: "149.65.142.165"
date: 2023-11-18T20:52:55+00:00
draft: false
---

## Understanding Internet Addressing

When using the internet, you are assigned a Public IPv4 address, such as ```149.65.142.165```, or an IPv6 address, like ```2000:3340:81df:830f:cae2:4c76:2edd:fec6```. The website [https://test-ipv6.com/](https://test-ipv6.com/) allows you to verify these addresses. However, communicating these addresses, or even referring to MAC addresses like ```16:df:44:04:d1:f5```, can be error-prone and complex for those not well-versed in technology. Furthermore, this method does not provide any historical data, particularly when past issues have arisen.
## Navigating the World Wide Web

Whenever you want to visit a website, such as https://marvin.net, your first step is to access a DNS server. This server translates the combination of the host portion (marvin) and the Top Level Domain (net) of the URL into an IP address, such as ```88.144.184.118```. Additionally, your computer and browser provides its type with all web requests, for example: 
```html
Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0
```
## The Significance of Default Gateways

The default gateway is typically an address configured automatically via DHCP. You receive a default gateway, such as ```192.168.117.100``` (although they usually end in .1 or .254 depending on the scope size), and this is the point where your computer forwards all its traffic to be routed onward. For ```IPv6```, comprehensive instructions can be found in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can verify this with:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.117.100    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:7e94:2382:e983:7732%en0  UGcg   en0
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
domain_name_server (ip_mult): {152.87.67.208, 62.133.219.115}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 16:df:44:04:d1:f5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f0:09:a3:00:31:f3
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium, operating at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of whether you are using OSX or macOS versions such as ```10.14.5```, ```11.5.4```, or ```12.2.6```, there is a variety of troubleshooting tools available. However, these manual processes and scripts do not provide a set of interconnected values over a period of time. In such cases, automated remote troubleshooting comes to the forefront, especially for teams that adopt remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
One useful tool for OSX/macOS users is the ```sudo wdutil info```, which generates a dump of the current wireless settings to the CLI and can also produce specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive range of logs, although most of them are only related to wireless settings similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively* (even though there is minimal interaction), you can use the command ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location. However, you can also navigate to ```/var/tmp``` using the Cmd+Shift+G command in Finder, bearing in mind that the file sizes are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
