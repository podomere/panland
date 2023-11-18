---
title: "Understand Wifi Issues"
subtitle: "Sales Funnel?"
layout: research
ip_v4_address: "30.124.143.38"
date: 2023-11-18T20:51:25+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you will be assigned a unique Public IPv4 address, such as ```30.124.143.38```, or an IPv6 address like ```2000:f172:44c1:565e:432c:f7c7:195a:1f1a```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, as well as MAC addresses like ```47:19:a1:7f:b6:b3```, to individuals who are not tech-savvy can lead to errors and confusion. Additionally, this method does not provide historical data, which is particularly important when dealing with past issues.
## Navigating the World Wide Web

In order to access a website such as https://satterfield.net, you first connect to a DNS server to translate the host portion (satterfield) and the Top Level Domain (net) of the URL into an IP address, such as ```102.76.231.44```. Your computer and browser include its type in all web requests, for example: ```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways

The default gateway is typically an address configured automatically through DHCP. For example, you might receive a default gateway like ```10.169.70.68```, although they usually end in .1 or .254 depending on the scope size. This is the address to which your computer sends all of its traffic to be routed onward. We provide a comprehensive guide on troubleshooting IPv6 connectivity at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for IPv6, and on Mac or Linux you can check with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.169.70.68    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f9e2:fe1c:9c95:a94b%en0  UGcg   en0
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
domain_name_server (ip_mult): {199.88.246.247, 31.147.134.26}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 47:19:a1:7f:b6:b3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d1:d2:32:01:a9:a1
}</pre>




## Resolving Issues with Wired and Wireless Connectivity

When transferring data to your router, whether through a wired or wireless (Wi-Fi) connection at the physical and data layer, it is important to address any potential issues that may arise.
### Troubleshooting Techniques for Apple macOS / OSX Operating Systems
Regardless of the version of OSX/macOS being used, whether it's ```10.12.7```, ```11.1.5```, or ```12.3.4```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a consistent set of correlated values over time. This is where remote troubleshooting automation becomes valuable, particularly for teams that support remote work and Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts for Assistance
A useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings through the command line interface and can be configured to generate specific troubleshooting logs. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, or to run it *interactively* using ```sudo /usr/bin/sysdiagnose``` with a privacy warning, are the options available. If not running in the background, it should open Finder in the correct location or you can navigate to ```/var/tmp``` or use the Cmd+Shift+G to access the path in Finder. However, take note that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
