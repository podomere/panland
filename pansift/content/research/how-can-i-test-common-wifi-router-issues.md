---
title: "How Can I Test Common Wifi Router Issues"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "44.74.152.82"
date: 2023-11-18T21:21:17+00:00
draft: false
---

## Understanding Internet Addressing Systems

When it comes to the Internet, individuals may be assigned a Public IPv4 address, such as ```44.74.152.82```, or an IPv6 address, such as ```2000:ff3d:b76c:cca7:e1a1:fe7c:430c:23f```. Verification of these addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even referring to MAC addresses like ```b8:a3:98:7c:82:15```, to those who are not technologically inclined can often result in errors and confusion. Furthermore, this method fails to provide any historical data, especially in cases of past issues.
## Navigating the World Wide Web 

The process of reaching a web page, such as https://smitham.org, involves initially accessing a DNS server to convert the host portion (smitham) combined with the Top Level Domain (org) of the URL into an IP address, like ```116.177.231.254```. Whenever a web request is made, your computer and browser also send their specifics along, as in the example below:
```html
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## The Significance of Default Gateways

Typically assigned automatically via DHCP, your default gateway, such as ```10.177.155.169``` (typically ending in .1 or .254 based on the scope size), serves as the central hub for all outgoing traffic from your computer. For ```IPv6``` connectivity resolutions, a detailed guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, the gateway can be verified with the following command:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.177.155.169    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8eef:284e:ce22:6a44%en0  UGcg   en0
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
domain_name_server (ip_mult): {220.103.24.240, 254.176.181.13}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b8:a3:98:7c:82:15
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 25:56:cc:0e:25:90
}</pre>




## Solutions for Resolving Issues with Wired and Wireless Connection
When transmitting data to your router, you may be utilizing either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Steps to Take for Apple macOS / OSX Troubleshooting
Regardless of the specific version of OSX/macOS you are currently using, whether it's ```10.13.2```, ```11.6.5```, or ```12.2.8```, there are various tools available for troubleshooting. However, manual actions and scripts may not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing In-Built Scripts for Assistance
One highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed dump of the current wireless settings in the CLI. This command can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option, producing a wide range of logs (although many of these are point-in-time only in relation to wireless, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will create logs in ```/var/tmp/<blah>.tar.gz``` for you. For an interactive run (although there is minimal interaction), you can use ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` manually or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
