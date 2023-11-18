---
title: "Troubleshoot Common Wifi No Access"
subtitle: "Infographic?"
layout: research
ip_v4_address: "215.68.185.39"
date: 2023-11-18T21:10:17+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```215.68.185.39```, or an IPv6 address like ```2000:cd07:cbb7:8913:6944:1369:225c:42c1```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses to those who are not tech-savvy, or even mentioning MAC addresses like ```12:34:c8:95:ab:02```, can be prone to errors and become complex. Moreover, this approach lacks historical data, especially from previous issues.
## Navigating the World Wide Web

When attempting to access a webpage like https://gibson.name, the first step is to contact a DNS server to convert the host part (gibson) along with the Top Level Domain (name) of the URL into an IP address like ```89.212.85.189```. Your computer and browser include their types in all web requests, such as
```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.
## The Significance of Default Gateways

The default gateway is typically an address that is automatically configured via DHCP. This address, such as ```172.26.207.136``` (usually ending in .1 or .254 depending on the scope size), is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, and you can verify it on Mac or Linux using:
``` bash
ifconfig
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.26.207.136    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2792:d1c6:5ef2:3d5e%en0  UGcg   en0
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
domain_name_server (ip_mult): {252.174.235.169, 131.97.227.245}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 12:34:c8:95:ab:02
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 57:3d:5d:ae:c2:c7
}</pre>




## Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Problems
Regardless of the version of OSX/macOS you are using, whether it's `10.12.3`, `11.6.4`, or `12.2.9`, there are various troubleshooting tools available. However, these tools do not provide a series of correlated values over time, making it difficult to identify patterns. This is where automated remote troubleshooting becomes essential, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool for OSX/macOS is `sudo wdutil info`, which provides a dump to the CLI of current wireless related settings and can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only related to wireless and is point-in-time.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can run `sudo /usr/bin/sysdiagnose`, which will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind the file sizes of about 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
