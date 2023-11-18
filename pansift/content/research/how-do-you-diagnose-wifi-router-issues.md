---
title: "How Do You DiagnOSe Wifi Router Issues"
subtitle: "Button Up The Loose Ends?"
layout: research
ip_v4_address: "211.123.95.224"
date: 2023-11-18T21:04:04+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, one may be assigned a Public IPv4 address such as ```211.123.95.224``` or an IPv6 address like ```2000:a402:a71c:1b4d:294e:cc8:98a4:3da5```. The verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, the communication of these addresses, and even MAC addresses such as ```34:6b:07:f2:d1:f6```, can be error-prone and complex, particularly for individuals with limited technical knowledge. Furthermore, this method lacks historical data, especially in the case of past issues.
## Navigating the World Wide Web

When visiting a website like https://ullrich-vonrueden.name, the first step is to access a DNS server in order to convert the host portion (ullrich-vonrueden) along with the Top Level Domain (.name) of the URL into an IP address, such as ```8.162.190.161```. Additionally, the computer and browser send their specifications alongside every web request e.g. <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Significance of Default Gateways

By default, the gateway is usually an automatically configured address through DHCP. This results in obtaining a default gateway, such as ```192.168.233.7``` (although they commonly end in .1 or .254 based on the scope size), which serves as the centralized point for all outgoing traffic. For those interested in ```IPv6```, a detailed examination can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or alternatively, verification can be done on Mac or Linux by using:

```bash
route -A inet6
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.233.7    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d1a:5b4b:2670:1485%en0  UGcg   en0
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
domain_name_server (ip_mult): {255.215.229.63, 184.40.60.148}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 34:6b:07:f2:d1:f6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 46:5a:ee:22:37:44
}</pre>




## Troubleshooting and Resolving Connectivity Issues
In the realm of network connectivity, whether it be through a wired or wireless (Wi-Fi) medium, the transmission of data to your router takes place at the physical and data layer. 
### Techniques for Apple macOS / OSX Users
Irrespective of whether you are running OSX/macOS version ```10.11.9```, ```11.5.8```, or ```12.2.3```, there exists a variety of tools at your disposal for addressing connectivity issues. However, the manual actions and scripts available do not offer a comprehensive set of correlated values over a period of time. This is where the significance of automated remote troubleshooting comes into play, particularly for teams that are inclined towards remote work and Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts for Assistance
A highly useful tool on OSX/macOS is the command ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Additionally, a more exhaustive approach is offered by the ```sysdiagnose``` tool, which is capable of generating a wide range of logs, although many of them are relevant only at a specific point in time, similar to the wdutil tool.

To run the ```sysdiagnose``` tool in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, the command ```sudo nohup /usr/bin/sysdiagnose -u &``` can be used. If an *interactive* approach is preferred, the command ```sudo /usr/bin/sysdiagnose``` can be run, with a privacy warning being issued. When not run in the background, this command will open Finder in the correct location, otherwise, the user can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to specify the path. It is important to be cautious of the file sizes, which typically range around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
