---
title: "How Do You Fix Wifi Internet Issues"
subtitle: "Customer Journey?"
layout: research
ip_v4_address: "35.187.92.236"
date: 2023-11-18T21:02:54+00:00
draft: false
---

## Functionality of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address such as ```35.187.92.236``` or possibly an IPv6 address like ```2000:25e7:f459:5731:2ffe:5734:eb94:cbba```. To verify this, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to communicate these addresses to those who are not technologically savvy can be prone to errors and become complex rather quickly. Furthermore, this method does not provide any historical data, especially concerning previous problems that may have occurred.
## Navigating the World Wide Web
In order to access a website such as https://nikolaus.org, you must first contact a DNS server to translate the host part (nikolaus) along with the Top Level Domain (org) of the URL into an IP address, such as ```157.57.236.124```. Your computer and browser also communicate their type with all web requests, for instance, <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways
The default gateway is typically an address that is automatically configured via DHCP. This gateway, for example, may be assigned as ```172.29.94.222``` (usually ending in .1 or .254 depending on the scope size) and is where your computer sends all of its traffic to be routed onwards. For those interested in ```IPv6```, a comprehensive guide can be found on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify on a Mac or Linux platform using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.29.94.222    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:96e9:9c03:978:c39%en0  UGcg   en0
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
domain_name_server (ip_mult): {4.206.145.137, 217.53.248.0}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2d:a9:4a:51:5c:96
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 56:db:6a:6f:83:e8
}</pre>




## Resolve Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you have the option of using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of your version of OSX/macOS, whether it's 10.12.6, 11.6.7, or 12.1.8, there are various tools available for resolving issues. However, these manual actions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting shines, particularly for teams that are embracing remote work and the Work From Anywhere (WFA) concept.
#### Useful Built-in Scripts
One particularly helpful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although many of them are only relevant at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will create logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it interactively, you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, but you can also navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Just be cautious of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
