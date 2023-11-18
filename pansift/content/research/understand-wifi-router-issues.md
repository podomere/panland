---
title: "Understand Wifi Router Issues"
subtitle: "Plug And Chug?"
layout: research
ip_v4_address: "165.22.231.238"
date: 2023-11-18T20:52:05+00:00
draft: false
---

## Understanding Internet Addressing Systems

When it comes to the Internet, you are assigned a unique Public IPv4 address, such as ```165.22.231.238```, or an IPv6 address, like ```2000:9a97:3831:9cf2:bcb2:29b4:113:6967```. You can verify your address at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or even referencing MAC addresses like ```26:e8:0f:d8:1c:c0```, can be prone to errors and become complicated, especially for those without a strong technical background. Moreover, this method does not provide any historical data, particularly for past issues.
## Navigating the World Wide Web

When trying to access a webpage such as https://sauer-turner.info, your computer initially contacts a DNS server to translate the host portion (sauer-turner) combined with the Top Level Domain (info) of the URL into an IP address, for example, ```227.116.55.95```. In fact, your computer and browser attach identifying information to all web requests, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## The Significance of Default Gateways

Normally, your default gateway is an address that is automatically configured via DHCP, such as ```172.19.1.9``` (although they typically end in .1 or .254, depending on the scope size). This is the point where your computer directs all its traffic to be routed onwards. For ```IPv6```, in-depth guidance can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.19.1.9    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d8ff:37c6:4b21:2078%en0  UGcg   en0
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
domain_name_server (ip_mult): {187.115.242.115, 190.101.11.2}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 26:e8:0f:d8:1c:c0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 46:20:46:63:ae:c1
}</pre>




## Solutions for Wired and Wireless Connection Issues
When it comes to transmitting data to your router, you may encounter connectivity issues with both wired and wireless (Wi-Fi) mediums at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of whether you are using OSX or macOS versions such as ```10.11.6```, ```11.0.6```, or ```12.3.7```, there are various troubleshooting tools available. However, these tools only provide isolated data and lack the ability to generate correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams engaged in remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
On OSX/macOS, the ```sudo wdutil info``` tool is quite handy as it provides a dump of current wireless settings in the CLI and can be set up to generate specific logs for troubleshooting. Additionally, the more comprehensive ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although many of them are only relevant at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. For an *interactive* option, you can run ```sudo /usr/bin/sysdiagnose``` which will provide a privacy warning. If it's not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G or by manually entering the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
