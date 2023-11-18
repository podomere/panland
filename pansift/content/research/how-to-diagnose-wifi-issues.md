---
title: "How To DiagnOSe Wifi Issues"
subtitle: "Gamification?"
layout: research
ip_v4_address: "202.27.147.129"
date: 2023-11-18T20:53:03+00:00
draft: false
---

## Understanding Internet Addressing

The addressing system used on the Internet assigns unique IP addresses to devices, such as a Public IPv4 address like ```202.27.147.129``` or an IPv6 address like ```2000:3f48:9da8:815d:132e:cb82:60de:bc7b```. You can verify your IP address using websites like [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, trying to communicate these addresses or MAC addresses like ```30:83:dd:9f:47:27``` can be prone to errors and become complex rather quickly. Moreover, this method does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web
When attempting to access a website such as https://zieme.net, the process begins with a request to a DNS server. This server translates the host portion (zieme) combined with the Top Level Domain (net) of the URL into an IP address, such as ```192.253.241.131```. Remarkably, your computer and browser reveal specific details with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Significance of Default Gateways
Commonly, the default gateway is an address that is automatically configured via Dynamic Host Configuration Protocol (DHCP). This default gateway typically appears as an address like ```192.168.157.91``` (often ending in .1 or .254, depending on the scope size), and it serves as the point to which your computer sends all its traffic to be routed onwards. If you want to troubleshoot IPv6 connectivity, you can find a comprehensive guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, you can check on Mac or Linux using the following commands:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.157.91    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:415c:1247:204:a5da%en0  UGcg   en0
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
domain_name_server (ip_mult): {36.82.22.100, 54.109.148.165}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 30:83:dd:9f:47:27
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f5:54:51:4c:e3:3f
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Troubleshooting
Regardless of whether you are using OSX/macOS version ```10.15.6```, ```11.2.6```, or ```12.3.2```, there are various troubleshooting tools available. However, these tools do not provide a series of correlated values over time, making it challenging to identify the root cause of the issue. This is where automated remote troubleshooting becomes essential, especially for teams that have embraced remote work and Work From Anywhere (WFA).
#### Useful Built-in Utilities
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed dump of current wireless settings to the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a comprehensive set of logs, although many of them are only relevant to a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```, which will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose``` and it will open Finder in the correct location. Alternatively, you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the files. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
