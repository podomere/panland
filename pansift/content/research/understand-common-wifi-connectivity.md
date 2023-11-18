---
title: "Understand Common Wifi Connectivity"
subtitle: "Buying Cycle?"
layout: research
ip_v4_address: "28.4.149.73"
date: 2023-11-18T21:12:54+00:00
draft: false
---

## Understanding Internet Addressing

When you use the Internet, you are assigned either a Public IPv4 address, such as ```28.4.149.73```, or an IPv6 address like ```2000:f746:6f59:8fcc:92f8:7bb9:6ed2:7505```. You can verify your address by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or communicating these addresses, along with MAC addresses like ```b6:06:06:26:20:76```, to those who are not tech-savvy can become error-prone and complicated quite quickly. Furthermore, this method doesn't provide any historical data, especially related to past problems.
## Navigating the Internet

Accessing a website like https://schulist.org involves first contacting a DNS server to translate the host portion (schulist) and the Top Level Domain (org) of the URL into an IP address, such as ```36.186.236.252```. Your computer and browser send their types with each web request, for example, <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```.
## The Significance of Default Gateways

Usually, your default gateway is an automatically assigned address via DHCP. Your computer is given a default gateway like ```192.0.0.136``` (usually ending in .1 or .254 depending on the scope size), and this is where your computer sends all of its traffic to be routed onwards. For ```IPv6```, you can refer to our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.136    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c249:d597:65cc:322d%en0  UGcg   en0
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
domain_name_server (ip_mult): {244.246.72.24, 117.209.44.188}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b6:06:06:26:20:76
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 98:94:53:eb:e6:ce
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to transferring data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX Devices
Regardless of whether you are on OSX/macOS ```10.15.5```, ```11.4.3```, or ```12.2.5```, there are various troubleshooting tools available. However, the manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams working remotely and adopting Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides current wireless settings information to the CLI and can also generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although many are only relevant to the wireless connection, similar to wdutil.

To run this tool in the background and save the logs to ```/var/tmp/<blah>.tar.gz```, use the command: ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, to run it interactively, use the command: ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G or the navigate option. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
