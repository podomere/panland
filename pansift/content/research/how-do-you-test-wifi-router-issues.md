---
title: "How Do You Test Wifi Router Issues"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "83.52.245.45"
date: 2023-11-18T21:05:39+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a Public IPv4 address, such as ```83.52.245.45```, or an IPv6 address, like ```2000:d655:204b:8d72:31b1:7176:fcbd:39e6```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, including MAC addresses like ```8a:60:a0:85:fd:a1```, to individuals who are not tech-savvy can be error-prone and complex. Furthermore, this method does not provide any historical data, particularly in cases of past issues.
## Navigating the Internet
In order to access a website, such as https://kuhlman.net, your computer initially contacts a DNS server to translate the host portion (kuhlman) combined with the Top Level Domain (net) of the URL into an IP address, such as ```141.158.194.222```. Additionally, your computer and browser transmit its type with all web requests, for example:
```html
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36
```
## The Significance of Default Gateways
In most cases, your default gateway is automatically configured via DHCP and assigned an address, such as ```10.162.98.61``` (commonly ending in .1 or .254 based on the scope size). This is the location where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed guide is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can verify this using the following commands:

### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.162.98.61    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:81db:c6a4:96e4:94cd%en0  UGcg   en0
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
domain_name_server (ip_mult): {115.76.150.194, 121.40.140.178}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8a:60:a0:85:fd:a1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 70:39:5a:97:14:0d
}</pre>




## Solutions for Dealing with Wired or Wireless Issues
When it comes to transmitting data at the physical and data layer, you may encounter problems with your wired or wireless (Wi-Fi) connection to your router.
### Troubleshooting Strategies for Apple macOS / OSX
Regardless of which version of OSX or macOS you are using, whether it's ```10.14.8```, ```11.4.4```, or ```12.1.1```, there are various tools available for troubleshooting. However, the manual actions and scripts provided may not offer a consistent set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One tool that can be very useful on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Another tool, the ```sysdiagnose``` tool, offers a more comprehensive option for generating a wide range of logs, although much of it is only point-in-time data in relation to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, for an *interactive* but not very interactive experience, you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
