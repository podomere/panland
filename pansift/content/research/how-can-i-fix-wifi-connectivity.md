---
title: "How Can I Fix Wifi Connectivity"
subtitle: "Synergy?"
layout: research
ip_v4_address: "195.104.101.75"
date: 2023-11-18T20:57:45+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, your device will be assigned a unique IPv4 or IPv6 address, such as ```195.104.101.75``` or ```2000:8574:5eb3:10ff:27d4:5fa5:6e12:ba3f```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing and communicating these addresses, along with MAC addresses like ```45:4f:03:9e:42:66```, can be complex and error-prone, especially for those who are not tech-savvy. Moreover, these addresses do not provide any historical data, especially in identifying past issues.
## Navigating the World Wide Web

When accessing a website, such as https://kub.org, your device communicates with a DNS server to translate the URL's host name and Top Level Domain (TLD) to an IP address, like ```43.106.34.7```. Additionally, whenever your computer and browser accesses a webpage, it sends its user agent data, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding Default Gateways

The default gateway for your device is typically automatically assigned through DHCP, usually in the form of an address like ```10.46.104.89```, often ending in .1 or .254 based on the scope size. This is the point to which your computer sends all its outgoing network traffic to be routed to its final destination. For in-depth guidance on ```IPv6``` connectivity, you can refer to our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, on Mac or Linux systems, you can verify the default gateway using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.46.104.89    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a7e7:395e:29ac:6550%en0  UGcg   en0
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
domain_name_server (ip_mult): {61.132.153.83, 206.7.255.219}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 45:4f:03:9e:42:66
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ca:0f:cf:69:ec:ed
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
When it comes to the physical and data layer, you might be utilizing either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Solutions for Apple macOS / OSX Users
Regardless of which version of OSX/macOS you are using, whether it's `10.11.4`, `11.4.3`, or `12.1.6`, there are various troubleshooting tools available. However, these manual methods and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are transitioning to remote work and embracing Work From Anywhere (WFA).
#### Helpful Built-in Scripts
One exceptionally useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the `sysdiagnose` tool can be used to generate a wide range of logs (although much of it is specific to the current moment in relation to wireless, just like wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background and write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can run `sudo /usr/bin/sysdiagnose` and it will issue a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Just keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
