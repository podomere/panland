---
title: "How To Understand Wifi No Access"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "37.7.27.217"
date: 2023-11-18T20:57:19+00:00
draft: false
---

## The Function of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as `37.7.27.217` or an IPv6 address like `2000:a3eb:c553:d490:920f:e21a:234f:89d2`. The [https://test-ipv6.com/](https://test-ipv6.com/) website can verify this for you. However, for those who are not tech-savvy, communicating these addresses or calling out MAC addresses like `88:e9:96:6b:e1:b1` can be prone to errors and quickly become complex. It also lacks historical data, which is important for previous problem-solving.
## Navigating the Internet

When accessing a website like https://lubowitz.io, you first connect to a DNS server to translate the host portion (lubowitz) combined with the Top Level Domain (io) of the URL into an IP address such as `41.106.19.180`. With every web request, your computer and browser send their types, such as <br>`Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)`.
## The Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. You are given a default gateway like `10.59.129.117` (although they generally end in .1 or .254 based on the scope size), and it is where your computer directs all traffic to be further routed. For `IPv6`, a detailed explanation can be found on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify this on Mac or Linux by:

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.59.129.117    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8e02:f9c1:5a88:e32a%en0  UGcg   en0
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
domain_name_server (ip_mult): {165.18.27.176, 240.32.47.30}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 88:e9:96:6b:e1:b1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 36:ff:22:06:b0:d4
}</pre>




## Troubleshooting Network Connectivity
When it comes to sending data to your router, you may encounter issues at the physical and data layer when using either a wired or wireless (Wi-Fi) medium.
### Resolving Issues on Apple Devices
Regardless of your OSX/macOS version, whether it's ```10.14.2```, ```11.3.5```, or ```12.3.6```, there are multiple tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where remote troubleshooting automation becomes valuable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### In-Built Tools for Assistance
A highly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the command line interface and can also be configured to generate specific troubleshooting logs. Moreover, the ```sysdiagnose``` tool offers a more comprehensive option for generating various logs, although much of the information is only relevant to the wireless aspect, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and generate logs in ```/var/tmp/<blah>.tar.gz```. If you prefer an *interactive* approach (although there is minimal interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will provide a privacy warning. When not running in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder or Cmd+Shift+G. Keep in mind that the file sizes will be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
