---
title: "DiagnOSe Mcs Internet Issues"
subtitle: "Streamline?"
layout: research
ip_v4_address: "85.247.154.209"
date: 2023-11-18T21:29:34+00:00
draft: false
---

## Understanding IP Addressing
When using the Internet, you are assigned an IP address such as ```85.247.154.209``` or ```2000:2336:4ca3:cbed:d530:f0ba:16c4:28ab```. You can verify this information at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, including MAC addresses like ```51:93:20:b7:03:a9```, to those who are not tech-savvy can be error-prone and complex. Furthermore, this method does not provide historical data, particularly during past issues.
## Navigating the Internet
When attempting to access a webpage such as https://dietrich.net, the first step is to contact a DNS server to convert the host name (dietrich) in combination with the Top Level Domain (net) of the URL into an IP address, for example, ```250.127.169.106```. Every web request from your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways
By default, your gateway is assigned an address automatically through DHCP. Your computer is then assigned a default gateway, such as ```10.93.192.25``` (typically ending in .1 or .254 depending on the scope size), to which all of its traffic is directed. For ```IPv6```, you can find an in-depth explanation at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) and can check on Mac or Linux using the following commands:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.93.192.25    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2efe:f570:6b24:5664%en0  UGcg   en0
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
domain_name_server (ip_mult): {26.206.10.98, 222.137.66.196}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 51:93:20:b7:03:a9
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e1:74:27:1a:bf:8d
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of your version of OSX/macOS, whether it's ```10.14.2```, ```11.4.6```, or ```12.3.5```, there are multiple tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing In-Built Scripts for Assistance
An extremely useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a detailed dump of current wireless related settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively*, use the command ```sudo /usr/bin/sysdiagnose``` and be prepared for a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of the file sizes, which are approximately 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
