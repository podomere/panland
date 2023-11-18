---
title: "How Do You Troubleshoot Wifi Connectivity"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "68.53.252.8"
date: 2023-11-18T21:04:22+00:00
draft: false
---

## Understanding the Function of Internet Addressing

When using the Internet, your device may have a Public IPv4 or IPv6 address, such as ```68.53.252.8``` or ```2000:1a72:1984:e279:989b:2056:85e1:34d9```. It is possible to verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not tech-savvy, or even mentioning MAC addresses like ```f4:c5:d3:b1:13:69```, can quickly become complicated and prone to errors. Moreover, this method does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web
When attempting to reach a website such as https://hartmann.io, the initial step involves contacting a DNS server to convert the host portion (hartmann) combined with the Top Level Domain (io) of the URL into an IP address, like ```21.24.74.179```. Each web request from your computer and browser includes its type, as showcased in the example below:
```html
Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)
```
## The Significance of Default Gateways
Typically, your default gateway is assigned automatically via DHCP and takes the form of an address like ```192.168.205.245``` (although they often end in .1 or .254 based on the scope size). This is where all the traffic from your computer is directed for further routing. For in-depth information on configuring ```IPv6```, visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, you can perform a check on Mac or Linux using the following command:
```html
```bash
command goes here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.205.245    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:483d:cf5d:fd14:1628%en0  UGcg   en0
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
domain_name_server (ip_mult): {174.136.108.171, 96.126.119.235}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f4:c5:d3:b1:13:69
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9a:6f:77:cc:ea:53
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of which version of OSX/macOS you are using, whether it's ```10.15.7```, ```11.0.7```, or ```12.0.1```, there are various tools available for troubleshooting. However, these tools do not provide a series of correlated values over time, making automated remote troubleshooting especially valuable for remote teams and those embracing Work From Anywhere (WFA).
#### Useful Built-in Scripts
One tool that can be incredibly helpful on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also generate specific logs for troubleshooting. Another comprehensive tool is the ```sysdiagnose``` tool, capable of generating a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively*, you can use<br>```sudo /usr/bin/sysdiagnose``` while being mindful of the privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Just keep in mind that the file sizes are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
