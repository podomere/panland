---
title: "How Do You Support Common Wifi Router Issues"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "228.202.19.223"
date: 2023-11-18T21:27:46+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```228.202.19.223```, or an IPv6 address, like ```2000:3b2d:76c1:4aa9:9037:2517:672a:6e0```. This can be verified through [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, as well as MAC addresses like ```13:66:53:4c:6a:fb```, can be confusing and prone to errors, especially for non-technical individuals. Additionally, it does not provide any historical data related to previous issues that may have occurred.
## Navigating the World Wide Web

Accessing a website, such as https://jaskolski.co, involves the initial interaction with a DNS server to convert the host portion (jaskolski) combined with the Top Level Domain (co) of the URL into an IP address, such as ```235.224.2.94```. Furthermore, your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically configured address through DHCP, such as ```172.27.224.38``` (often ending in .1 or .254, depending on the scope size). This is the point where your computer directs all its traffic to be routed onwards. For ```IPv6```, a detailed explanation is available in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and it can be checked on Mac or Linux using the following command:<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.224.38    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9387:6267:2172:9e7a%en0  UGcg   en0
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
domain_name_server (ip_mult): {56.22.30.78, 9.192.221.110}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 13:66:53:4c:6a:fb
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 64:8d:38:66:83:87
}</pre>




## Solutions for Connectivity Issues
When troubleshooting connectivity issues, it's important to consider both wired and wireless options at the physical and data layer. Whether you are using a wired connection or a wireless (Wi-Fi) medium to send data to your router, there are a variety of potential solutions to explore.
### Troubleshooting Methods for Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.11.7```, ```11.4.8```, or ```12.0.1```, there are numerous tools available for troubleshooting connectivity issues. However, these tools may not provide a comprehensive set of correlated values over time, which is especially important for teams that operate remotely and practice Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts
One valuable tool on OSX/macOS is the ```sudo wdutil info```, which provides a detailed dump of current wireless settings and can also be configured to generate specific logs for troubleshooting purposes. In addition, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many are only relevant to a specific point in time with respect to wireless connectivity, just like wdutil.

To run the ```sysdiagnose``` tool in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, to run it interactively, use the command ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning and then open Finder in the appropriate location. Just be aware of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
