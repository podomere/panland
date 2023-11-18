---
title: "How Can I Test Wifi Connectivity"
subtitle: "Value Add?"
layout: research
ip_v4_address: "219.16.217.14"
date: 2023-11-18T20:59:57+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address or an IPv6 address. You can verify your IP address at https://test-ipv6.com/. However, translating and communicating these addresses in a non-technical way can be challenging, and dealing with MAC addresses adds another layer of complexity. Moreover, there is a lack of historical data when it comes to previous issues.
## Navigating the World Wide Web

Accessing a webpage begins with contacting a DNS server to translate the URL into an IP address. Your computer and browser also transmit specific information with every web request, such as the type of browser being used.
## Significance of Default Gateways

The default gateway, typically automatically assigned via DHCP, is the address that your computer uses to route all its traffic. Whether it ends in .1 or .254, depending on the scope, understanding the default gateway is crucial for proper routing. For more detailed information on configuring IPv6 connectivity, refer to our blog at /blog/how-to-fix-ipv6-connectivity/. On Mac or Linux, you can verify this configuration.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.7.18.53    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:35d8:87fd:7bbd:df12%en0  UGcg   en0
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
domain_name_server (ip_mult): {124.188.151.137, 0.199.77.113}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9e:97:d6:df:7f:af
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 3b:f8:e7:5d:e8:dc
}</pre>




## Resolve Issues with Wired or Wi-Fi Connection
When it comes to transmitting data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you're using, whether it's ```10.12.4```, ```11.0.6```, or ```12.2.5```, there are various tools available for resolving issues. However, these manual processes and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that are adopting remote work and Work From Anywhere (WFA).
#### Embedded Scripts for Assistance
One valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide array of logs, although much of it is point-in-time related to wireless, just like wdutil.

```sudo nohup /usr/bin/sysdiagnose -u &``` will run the tool in the background and generate logs at ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can enter<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to direct Finder to the specific path. Keep in mind that the file sizes are approximately 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
