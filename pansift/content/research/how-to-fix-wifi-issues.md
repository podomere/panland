---
title: "How To Fix Wifi Issues"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "74.76.133.145"
date: 2023-11-18T20:52:17+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```74.76.133.145``` or an IPv6 address like ```2000:9236:826e:7645:cb60:480:38c8:b552```. Verifying this information is possible through [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, conveying these addresses or referencing MAC addresses such as ```9f:71:ac:40:99:a4``` can be prone to errors and become complicated quickly. Moreover, this method does not provide any historical data, particularly when dealing with past issues.
## Navigating the World Wide Web

In order to access a webpage like https://schaefer.net, your computer initially sends a request to a DNS server to convert the host portion (schaefer) combined with the Top Level Domain (net) of the URL into an IP address, such as ```140.25.189.179```. Every web request from your computer and browser includes its type, for example:
<br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## The Significance of Default Gateways

Normally, your default gateway is an automatically configured address via DHCP, such as ```192.168.39.246``` (typically ending in .1 or .254, depending on the scope size). This is where your computer sends all its traffic to be routed onwards. For those using ```IPv6```, there is a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but it is possible to check on Mac or Linux with:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.39.246    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c95c:6461:ec4c:c789%en0  UGcg   en0
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
domain_name_server (ip_mult): {232.151.17.26, 104.255.50.50}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9f:71:ac:40:99:a4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e0:7c:33:c3:ae:d6
}</pre>




## Solutions for Addressing Connectivity Issues with Wired and Wireless Networks

When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Connectivity Problems on Apple macOS / OSX Devices
Irrespective of whether you are using OSX/macOS version ```10.14.7```, ```11.4.6```, or ```12.1.7```, there is a plethora of troubleshooting tools available. However, these manual interventions and scripts fail to provide a sequence of correlated values over a period of time. This is where automated remote troubleshooting proves to be highly beneficial, particularly for teams that have adopted remote work practices and embrace the concept of Work From Anywhere (WFA).
#### Leveraging In-Built Scripts for Assistance
A highly valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a detailed dump of the current wireless settings via the CLI, and it can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be used to produce a wide array of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` allows it to operate in the background and generate logs in the ```/var/tmp/<blah>.tar.gz``` directory. For an *interactive* (albeit minimal interaction) experience, you can execute<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not executed in the background, it should open Finder in the appropriate location, or users can navigate to ```/var/tmp``` or utilize Finder with Cmd+Shift+G to direct it to the specified path. However, users should be mindful of the file sizes which tend to be around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
