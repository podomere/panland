---
title: "How Can I Check Wifi Connectivity"
subtitle: "Penetrate The Market?"
layout: research
ip_v4_address: "17.191.144.35"
date: 2023-11-18T21:00:38+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```17.191.144.35```, or an IPv6 address like ```2000:8316:b78c:e258:9617:4a68:8b3a:1830```. You can verify these addresses at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even MAC addresses like ```f2:19:bd:79:23:27```, can be complex for those who are not tech-savvy. Moreover, this method does not provide historical data, especially for past issues.
## Navigating the World Wide Web
When accessing a website like https://larkin.com, you first connect to a DNS server to translate the host portion (larkin) combined with the Top Level Domain (com) of the URL to an IP address like ```122.208.238.238```. Additionally, your computer and browser include information about the type of web requests, such as <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## The Significance of Default Gateways
The default gateway is typically an automatically configured address through DHCP. Your computer is assigned a default gateway, such as ```192.168.183.186``` (often ending in .1 or .254 depending on the scope size), to route all its traffic. For IPv6, refer to our in-depth guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or use the following commands on Mac or Linux:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.183.186    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9b2e:d027:8e70:b1c3%en0  UGcg   en0
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
domain_name_server (ip_mult): {102.251.42.32, 171.195.120.213}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f2:19:bd:79:23:27
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 78:92:fa:c5:2a:b7
}</pre>




## Diagnosing and Resolving Connectivity Issues

When dealing with connectivity issues, it's crucial to determine whether the problem lies in the wired or wireless (Wi-Fi) medium used to transmit data to the router, operating at the physical and data layer.
### Troubleshooting on Apple's macOS / OSX Platform

Regardless of your version of OSX/macOS, be it ```10.13.1```, ```11.1.2```, or ```12.3.4```, there is a wide array of tools available for troubleshooting. However, these manual actions and scripts do not provide a continuous series of correlated values over time, making automated remote troubleshooting invaluable, especially for teams embracing remote work and Work From Anywhere (WFA).
#### Leveraging Built-in Scripts for Assistance

On the OSX/macOS platform, the ```sudo wdutil info``` tool proves to be immensely helpful, providing a comprehensive dump of current wireless settings in the CLI, and can also be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool presents a more exhaustive option for logging, albeit with some limitations in terms of its real-time capabilities for wireless troubleshooting, much like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs at ```/var/tmp/<blah>.tar.gz```. For an *interactive* (albeit minimal interaction) approach, the command ```sudo /usr/bin/sysdiagnose``` will trigger a privacy warning and prompt Finder to navigate to the correct location, where the file sizes typically hover around 300MB.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
