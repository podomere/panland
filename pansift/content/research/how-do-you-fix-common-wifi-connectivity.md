---
title: "How Do You Fix Common Wifi Connectivity"
subtitle: "Give You Some Time Back?"
layout: research
ip_v4_address: "140.13.228.126"
date: 2023-11-18T21:23:42+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```140.13.228.126```, or an IPv6 address, like ```2000:806d:20bb:ef41:844:a97f:4709:3688```. A tool like [https://test-ipv6.com/](https://test-ipv6.com/) can be used to verify these addresses. However, conveying these addresses, or even MAC addresses like ```2f:89:a2:2d:7c:c0```, to non-technical individuals can be prone to errors and becomes complex quickly. Furthermore, this method lacks historical data, especially when dealing with past issues.
## Navigating the World Wide Web

In order to access a web page, such as https://orn.biz, you first connect to a DNS server to convert the host portion (orn) along with the Top Level Domain (biz) of the URL into an IP address, like ```204.247.67.96```. Your computer and browser transmit its type with all web requests, for example: 
```html
Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16
```
## The Significance of Default Gateways

The default gateway is typically an address configured automatically via DHCP. For instance, you may receive a default gateway like ```192.168.148.184``` (often ending in .1 or .254 depending on the scope size), and that is where your computer sends all its traffic to be routed onwards. For a detailed guide on handling ```IPv6``` connectivity, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can verify this with:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.148.184    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:eada:c330:ad59:d75b%en0  UGcg   en0
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
domain_name_server (ip_mult): {5.153.177.100, 53.148.226.104}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2f:89:a2:2d:7c:c0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 17:b9:ea:7f:a7:3e
}</pre>




## Identify and Resolve Connectivity Issues

When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple Operating Systems
No matter which version of OSX/macOS you are operating on, whether it's ```10.13.8```, ```11.3.6```, or ```12.3.5```, there are various tools available for addressing connectivity issues. However, the manual actions and scripts often fail to provide a consistent set of correlated values over time. This is where remote troubleshooting automation becomes particularly beneficial, especially for teams that are focused on remote work and Work From Anywhere (WFA).
#### Useful Built-in Applications
An extremely beneficial tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless related settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs (although many of these are only relevant to wireless settings, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute it in the background and create logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there isn't much interaction), you can execute<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it will open Finder in the proper location, allowing you to navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to direct it to the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
