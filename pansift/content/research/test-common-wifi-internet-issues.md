---
title: "Test Common Wifi Internet Issues"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "173.129.7.66"
date: 2023-11-18T21:10:52+00:00
draft: false
---

## Understanding Internet Addressing Process

When connecting to the Internet, you are assigned a unique address such as the Public IPv4 address ```173.129.7.66``` or an IPv6 address like ```2000:54f9:864:8526:1a39:7dcc:16f6:99cd```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals less knowledgeable about technology, or even identifying MAC addresses like ```8d:6a:db:cc:ca:f4```, can be prone to errors and quickly become complex. Moreover, these addresses do not provide historical data, especially from previous incidents.
## Navigating the World Wide Web

When accessing a webpage such as https://gusikowski.com, the first step is to request information from a DNS server. This server translates the host portion (gusikowski) and the Top Level Domain (com) of the URL into an IP address, such as ```69.1.189.219```. Additionally, your computer and browser relay their type with all web requests, for example:
```html
Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0
```
## Significance of Default Gateways

Typically, a default gateway is automatically assigned via DHCP. Your computer is allocated a default gateway, such as ```10.38.249.155``` (commonly ending in .1 or .254 based on the scope size), to which all its traffic is directed for further routing. For ```IPv6```, a more detailed explanation is available in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and the process can be verified on Mac or Linux operating systems using:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.38.249.155    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1247:ac25:a685:30b6%en0  UGcg   en0
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
domain_name_server (ip_mult): {1.77.74.45, 200.143.202.144}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8d:6a:db:cc:ca:f4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ab:3f:a5:91:6a:78
}</pre>




## Diagnose and Resolve Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
Whether you're running ```10.15.6```, ```11.2.3```, or ```12.3.1```, there are various troubleshooting tools available for OSX/macOS. However, these tools don't provide a consistent set of related values over time. This is where automated remote troubleshooting becomes essential, particularly for teams engaged in remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One valuable tool on OSX/macOS is the ```sudo wdutil info``` command, which provides current wireless settings and can be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool offers a comprehensive range of logs, although much of it is only relevant in relation to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use ```sudo /usr/bin/sysdiagnose``` and be prepared for large file sizes of about 300MB. After running the command, you can locate the logs in Finder at the correct location or navigate to ```/var/tmp``` using Cmd+Shift+G.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
