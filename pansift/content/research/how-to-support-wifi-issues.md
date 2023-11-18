---
title: "How To Support Wifi Issues"
subtitle: "Learnings?"
layout: research
ip_v4_address: "247.107.57.26"
date: 2023-11-18T20:56:09+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned either a Public IPv4 or IPv6 address, such as ```247.107.57.26``` or ```2000:be33:d089:bf28:971f:ec3d:f595:813f```. These addresses can be verified on [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, communicating these addresses, or even mentioning MAC addresses like ```f1:b1:71:c7:61:e6```, can quickly become prone to errors and complications. Furthermore, this does not provide any historical data, especially during previous issues.
## Navigating the World Wide Web

When attempting to access a website such as https://cormier-vandervort.io, your first step involves reaching out to a DNS server to translate the host portion (cormier-vandervort) along with the Top Level Domain (io) of the URL into an IP address, like ```26.171.246.44```. Every web request from your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically assigned address via DHCP, such as ```192.168.218.133``` (although they typically end in .1 or .254 depending on the scope size). This is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, you can refer to a detailed exploration on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, on Mac or Linux, you can check this using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.218.133    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4ca7:189d:74f8:6084%en0  UGcg   en0
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
domain_name_server (ip_mult): {55.248.73.111, 20.10.104.217}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f1:b1:71:c7:61:e6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 66:f8:ec:34:1c:14
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transferring data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX
No matter which version of OSX/macOS you're running - whether it's ```10.12.9```, ```11.0.6```, or ```12.0.1``` - there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that are adapting to remote work and embracing the concept of Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
A tool that can be incredibly useful on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a wide range of logs (although many are point-in-time only in relation to wireless, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (even though there's not much interaction), you can execute ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which are generally around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
