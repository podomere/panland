---
title: "How To Fix Wifi Connectivity"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "63.88.35.178"
date: 2023-11-18T21:43:20+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as `63.88.35.178`, or an IPv6 address, like `2000:fbfa:298c:48a3:e49a:73f:39f9:2aac`. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and sharing these addresses, or even mentioning MAC addresses, such as `80:b8:c6:28:80:04`, can become prone to errors and quickly become complex. Moreover, it does not provide any historical data, especially when dealing with past issues.
## Navigating the World Wide Web
When attempting to access a web page, like https://bednar.info, your computer initially contacts a DNS server to translate the host portion (bednar) combined with the Top Level Domain (info) of the URL into an IP address, such as `243.141.3.146`. Your computer and browser also include its type with all web requests, for instance, ```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.
## Understanding the Significance of Default Gateways
The default gateway for your network is typically automatically configured via DHCP. This gateway is assigned an IP address, such as `192.168.76.62` (although they usually end in .1 or .254 depending on the size of the scope), and serves as the point to which your computer sends all of its traffic to be routed further. For `IPv6`, detailed instructions can be found in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can also be verified on Mac or Linux using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.76.62    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:10fb:5328:3fa:6bd7%en0  UGcg   en0
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
domain_name_server (ip_mult): {130.90.61.204, 61.79.107.217}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 80:b8:c6:28:80:04
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e7:21:ed:09:c0:3d
}</pre>




## Solutions for Resolving Wired and Wireless Issues
When it comes to transmitting data to your router, you might be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of the version of OSX/macOS you are working on, whether it's 10.14.3, 11.4.5, or 12.2.1, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that embrace remote work and Work From Anywhere (WFA).

  #### Pre-Installed Scripts for Assistance
  A highly beneficial tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless settings in the command line interface. It can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool offers a more comprehensive option for generating a wide range of logs, although it mainly captures point-in-time data related to wireless, similar to wdutil.

  To run `sysdiagnose` in the background and have it write logs to `/var/tmp/<blah>.tar.gz`, you can use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, but be prepared for a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=BzPdEnHVc1Y" data-lity><img src="https://i.ytimg.com/vi/BzPdEnHVc1Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=BzPdEnHVc1Y" data-lity>60GHZ What you need to know about 802 11ad and 802 11ay   Jason Hintersteiner   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r_ERuoLBFoM" data-lity><img src="https://i.ytimg.com/vi/r_ERuoLBFoM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r_ERuoLBFoM" data-lity>High Efficiency Wi-Fi- 802.11ax   Dr. Eldad Perahia   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=SgL53Lh5TJE" data-lity><img src="https://i.ytimg.com/vi/SgL53Lh5TJE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=SgL53Lh5TJE" data-lity>Wi-Fi 6E: It’s Almost Like Wi-Fi is Being Born Again!   David Coleman   WLPC 2022 Phoenix</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=DFYorKGkD8Q" data-lity><img src="https://i.ytimg.com/vi/DFYorKGkD8Q/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=DFYorKGkD8Q" data-lity>WLAN Pi Project Update   Jerry Olla   WLPC 2022 Phoenix</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
