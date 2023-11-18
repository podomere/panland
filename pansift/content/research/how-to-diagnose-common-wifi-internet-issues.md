---
title: "How To DiagnOSe Common Wifi Internet Issues"
subtitle: "Buying Cycle?"
layout: research
ip_v4_address: "63.86.143.137"
date: 2023-11-18T21:14:25+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, your device may have a Public IPv4 address such as ```63.86.143.137``` or an IPv6 address like ```2000:2483:c2b5:fbf2:22d:7fe5:d852:bedc```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating and recalling these addresses, as well as MAC addresses like ```2d:49:f9:73:91:ce```, can be prone to errors and quickly become complex, especially for individuals who are not familiar with technical jargon. Furthermore, this method does not provide any historical data, particularly when encountering previous issues.
## Navigating the Web

Accessing a web page like https://gerlach.com involves initially querying a DNS server to translate the host portion (gerlach) combined with the Top Level Domain (com) of the URL into an IP address, such as ```171.176.23.83```. When making web requests, your computer and browser transmit information about their type, for example: 
```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## The Significance of Default Gateways

Typically, your default gateway is an automatically assigned address through DHCP, such as ```10.162.95.239``` (although they commonly end in .1 or .254 depending on the scope size). This is where your computer forwards all its traffic to be routed onwards. For ```IPv6```, a more comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, and you can verify this on Mac or Linux using the following command:
```bash
ip -6 route```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.162.95.239    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1c2c:195b:3f06:d563%en0  UGcg   en0
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
domain_name_server (ip_mult): {166.97.184.238, 148.0.36.147}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2d:49:f9:73:91:ce
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 00:ee:1b:da:f5:f6
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layers.
### Troubleshooting Tips for Apple macOS / OSX Users

Regardless of whether you are running OSX or macOS version ```10.14.2```, ```11.3.7```, or ```12.2.9```, there are various troubleshooting tools available. However, these tools do not provide a consistent set of correlated values over time, making it difficult to identify recurring issues. This is where automated remote troubleshooting becomes invaluable, especially for teams that operate under remote work and Work From Anywhere (WFA) practices.
#### Useful Built-in Scripts

A handy tool for OSX/macOS users is ```sudo wdutil info```, which provides a comprehensive dump of current wireless settings to the command-line interface. This tool can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more extensive range of logs and diagnostics, although it primarily captures point-in-time data related to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive experience (although there is minimal interaction), run ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder's Cmd+Shift+G shortcut. Keep in mind that the file sizes tend to be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
