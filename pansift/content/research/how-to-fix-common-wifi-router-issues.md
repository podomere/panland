---
title: "How To Fix Common Wifi Router Issues"
subtitle: "Value Add?"
layout: research
ip_v4_address: "250.100.46.251"
date: 2023-11-18T21:14:00+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address such as ```250.100.46.251``` or an IPv6 address like ```2000:5c10:20fa:effe:ad36:a24f:ac4c:3809```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not technically inclined, communicating these addresses or even referencing MAC addresses like ```04:aa:df:1e:e4:73``` can be prone to errors and become complex. It also lacks historical data.
## Navigating the World Wide Web
In order to access a webpage like https://rosenbaum.co, the initial step is to connect to a DNS server to convert the host portion (rosenbaum) along with the Top Level Domain (co) of the URL to an IP address such as ```102.217.176.124```. When making web requests, your computer and browser also include its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
Your default gateway is typically an address that is automatically configured through DHCP. This address, such as ```10.111.150.24``` (usually ending in .1 or .254 based on scope size), is where your computer directs all its traffic to be routed onward. For ```IPv6```, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can be checked on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.111.150.24    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a536:ff46:2aa8:9fdb%en0  UGcg   en0
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
domain_name_server (ip_mult): {59.0.72.170, 88.198.176.145}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 04:aa:df:1e:e4:73
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr da:53:5b:a3:1b:fa
}</pre>




## Resolving Issues with Wired or Wireless Connections
When it comes to transferring data to your router, you might be relying on a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS version ```10.15.7```, ```11.6.7```, or ```12.2.9```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is quite beneficial as it provides a dump of current wireless settings to the CLI, and it can also be set up to generate specific logs for troubleshooting. Another comprehensive tool is the ```sysdiagnose``` tool, which can generate a wide range of logs, although it mostly provides point-in-time information in relation to wireless, similar to wdutil.

To run it in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* run (with minimal interaction), execute ```sudo /usr/bin/sysdiagnose``` which will trigger a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which are around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
