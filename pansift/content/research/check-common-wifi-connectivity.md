---
title: "Check Common Wifi Connectivity"
subtitle: "Granular?"
layout: research
ip_v4_address: "137.245.166.170"
date: 2023-11-18T21:11:29+00:00
draft: false
---

## The Fundamentals of Internet Protocol Addressing

When connecting to the Internet, you are assigned a unique Public IPv4 address, such as ```137.245.166.170```, or an IPv6 address like ```2000:e48c:7e5c:354b:30da:2fa4:4a87:176c```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or communicating these addresses, or even mentioning unique MAC addresses like ```e1:5e:0d:bf:6a:8c```, can be prone to errors and quickly becomes complicated, especially for those unfamiliar with technical jargon. Moreover, this information does not provide any historical context, especially when dealing with past issues.
## Navigating the Web

When attempting to access a website such as https://beer.name, the initial step involves contacting a DNS server to translate the combined host (beer) and Top Level Domain (name) of the URL into an IP address, such as ```120.185.222.9```. Your computer and browser send their specifications along with all web requests, for instance: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Understanding the Significance of Default Gateways

By default, your computer is assigned a gateway address through DHCP, typically like ```192.168.11.175``` (although they often end in .1 or .254 depending on the scope size). This gateway is responsible for routing all of your computer's traffic to its intended destinations. For ```IPv6```, detailed instructions are provided in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can perform checks on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.11.175    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:fbf7:9306:d03a:20f8%en0  UGcg   en0
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
domain_name_server (ip_mult): {42.201.195.168, 63.229.90.6}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e1:5e:0d:bf:6a:8c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 36:6e:ec:3d:03:1b
}</pre>




## Fixing Issues with Wired and Wireless Connections
When it comes to sending data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you're using OSX/macOS ```10.15.9```, ```11.3.9```, or ```12.0.7```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting shines, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Help
A very useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of them are only relevant to wireless settings, similar to wdutil.

To run the command in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
