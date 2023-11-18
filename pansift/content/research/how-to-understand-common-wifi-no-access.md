---
title: "How To Understand Common Wifi No Access"
subtitle: "Growth Unit?"
layout: research
ip_v4_address: "125.86.198.26"
date: 2023-11-18T21:18:14+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, you are assigned a public IP address, such as ```125.86.198.26``` for IPv4 or ```2000:a99:19cf:dbb5:8363:2c7c:3a04:89ae``` for IPv6. To verify your IP address, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, as well as MAC addresses like ```4b:db:6f:32:5f:38```, to those who are not tech-savvy can be prone to errors and become complex. Moreover, this method does not provide any historical data, particularly when dealing with past issues.
## Navigating the World Wide Web

In order to reach a website, such as https://deckow.net, you initially contact a DNS server to convert the URL's host segment (deckow) along with its Top Level Domain (net) into an IP address, such as ```179.239.136.154```. Additionally, your computer and browser transmit their types with all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

Usually, your default gateway is automatically assigned through DHCP and typically appears as ```192.168.245.193``` (commonly ending in .1 or .254, based on the scope size). This is where your computer forwards all its traffic to be routed further. For ```IPv6```, you can have a detailed understanding by referring to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can verify on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.245.193    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e5fd:b772:7cd8:784b%en0  UGcg   en0
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
domain_name_server (ip_mult): {197.213.76.112, 234.204.124.157}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 4b:db:6f:32:5f:38
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 18:e4:c7:1c:cd:96
}</pre>




## Solutions for Resolving Wired or Wireless Issues
When it comes to sending data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, such as `10.13.6`, `11.4.4`, or `12.2.6`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that practice remote work and Work From Anywhere (WFA).
#### Effective Built-in Tools for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless settings in the CLI and can be configured to generate specific logs for troubleshooting. Another comprehensive tool is the `sysdiagnose`, which can generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

To run `sudo nohup /usr/bin/sysdiagnose -u &` in the background and write logs to `/var/tmp/<blah>.tar.gz`. To run it interactively, you can use `sudo /usr/bin/sysdiagnose` and it will give a privacy warning. When not running in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
