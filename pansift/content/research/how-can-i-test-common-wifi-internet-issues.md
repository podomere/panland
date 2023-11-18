---
title: "How Can I Test Common Wifi Internet Issues"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "87.32.234.50"
date: 2023-11-18T21:21:00+00:00
draft: false
---

## Understanding the Functioning of Internet Addresses

When using the Internet, you are assigned a Public IPv4 address such as ```87.32.234.50``` or an IPv6 address like ```2000:cee6:e024:5bfe:35c3:3d3a:32d3:c16a```. It is possible to verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). Nevertheless, for individuals who are not well-versed in technology, communicating these addresses or MAC addresses like ```ad:e5:ef:c1:e7:84``` can lead to errors and complications. Furthermore, this method does not provide any historical data, particularly when addressing previous issues.
## Navigating the Internet
In order to access a website like https://huel-jenkins.io, you first connect to a DNS server to translate the host (huel-jenkins) and the Top Level Domain (io) of the URL into an IP address, such as ```18.83.190.178```. Your computer and browser transmit their types with every web request, as shown: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Preset Gateways
The default gateway is usually an automatically assigned address through DHCP. Typically, your computer obtains a default gateway like ```10.161.106.69``` (often ending in .1 or .254 based on the scope size), which serves as the point where all your computer's traffic is forwarded. For ```IPv6```, detailed instructions can be found in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can also be checked on Mac or Linux using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.161.106.69    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:efb4:7a77:438f:68d1%en0  UGcg   en0
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
domain_name_server (ip_mult): {127.132.13.236, 218.163.250.160}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ad:e5:ef:c1:e7:84
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f7:81:7d:ae:b0:ae
}</pre>




## Resolve Connectivity Issues for Wired and Wireless Networks
When transmitting data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Strategies for Addressing Connectivity Problems on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.13.7```, ```11.3.7```, or ```12.3.7```, there are various methods for troubleshooting. However, these manual processes and scripts do not provide a set of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have embraced remote work and the concept of Work From Anywhere (WFA).
#### Leveraging Built-in Scripts for Assistance
An extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the command-line interface, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs (although many are only relevant to wireless at a specific moment, similar to wdutil).

To run ```sysdiagnose``` in the background and write the logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For interactive execution (although there is minimal interaction), use the command ```sudo /usr/bin/sysdiagnose``` and be prepared to encounter a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` either manually or by using the path-finding shortcut in Finder with Cmd+Shift+G. Keep in mind that the file sizes will be approximately 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
