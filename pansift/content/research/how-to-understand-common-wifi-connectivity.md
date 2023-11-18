---
title: "How To Understand Common Wifi Connectivity"
subtitle: "Market Share?"
layout: research
ip_v4_address: "232.159.111.63"
date: 2023-11-18T21:17:57+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a unique public IPv4 or IPv6 address, such as `232.159.111.63` or `2000:c6d5:e525:e347:718b:80dd:7fcc:ba91`, respectively. You can verify your address on [https://test-ipv6.com/](https://test-ipv6.com/). However, translating and communicating these addresses, or even complex MAC addresses like `ee:e1:07:fb:4f:87`, can be error-prone, especially without access to historical data.
## Navigating the Web

Accessing a web page, such as https://jerde.io, involves initially contacting a DNS server to translate the URL's host (jerde) and Top Level Domain (.io) into an IP address, like `178.48.209.103`. Furthermore, your computer and browser transmit their type with all web requests, such as:
```html
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
```
## Understanding Default Gateways

The default gateway is typically an automatically assigned address via DHCP, such as `10.29.226.176` (usually ending in .1 or .254, depending on the scope size). This is where your computer forwards all its traffic for routing. For `IPv6`, a comprehensive guide on how to fix connectivity issues is available at [/blog/how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can verify on Mac or Linux with the following command:
```html
ifconfig
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.29.226.176    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:24aa:7401:1e4f:afdf%en0  UGcg   en0
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
domain_name_server (ip_mult): {14.8.2.47, 153.2.67.153}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ee:e1:07:fb:4f:87
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e7:b9:11:1c:22:cc
}</pre>




## Solutions for Dealing with Wired and Wireless Connections
When it comes to transferring data to your router, you have the option of using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips and Techniques for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you have, whether it's 10.11.2, 11.0.3, or 12.2.1, there are various tools available for troubleshooting. While manual actions and scripts offer some help, they do not provide a series of related values over time. This is where automated remote troubleshooting shines, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One highly useful tool on OSX/macOS is "sudo wdutil info," which provides a dump of the current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, much like wdutil.

To run sysdiagnose in the background and write logs to "/var/tmp/<blah>.tar.gz," you can use the command "sudo nohup /usr/bin/sysdiagnose -u &." For an interactive (although minimal interaction) experience, you can use "sudo /usr/bin/sysdiagnose," which will give a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
