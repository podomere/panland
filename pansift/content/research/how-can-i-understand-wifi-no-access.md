---
title: "How Can I Understand Wifi No Access"
subtitle: "Infographic?"
layout: research
ip_v4_address: "108.34.132.203"
date: 2023-11-18T21:02:23+00:00
draft: false
---

## The Basics of Internet Addressing

When using the Internet, you are assigned a unique public IP address, such as ```108.34.132.203``` for IPv4 or ```2000:230f:21e2:8298:e0a9:25f2:210c:ee22``` for IPv6. A handy tool to check your IP address is available at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses and MAC addresses like ```25:97:c6:63:f8:01``` to non-technical individuals can be prone to errors and quickly becomes complex. Moreover, it lacks the ability to provide historical data.
## How Web Access Works

To access a website like https://mante.io, you first connect to a DNS server to translate the host (mante) and the Top Level Domain (io) to an IP address, such as ```251.239.232.152```. Your computer and browser include information about their type in web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Importance of Default Gateways

The default gateway, usually automatically assigned through DHCP, is an essential element. It is assigned an address like ```192.168.74.68``` (often ending in .1 or .254 based on the scope size) and serves as the routing point for all outgoing traffic from your computer. To troubleshoot ```IPv6``` connectivity in Mac or Linux, a detailed guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.74.68    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6a49:7a3e:764f:3799%en0  UGcg   en0
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
domain_name_server (ip_mult): {215.133.136.163, 1.111.126.242}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 25:97:c6:63:f8:01
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 55:e6:71:22:10:a5
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data at the physical and data layer, you have the option of using a wired or wireless (Wi-Fi) medium to send the data to your router.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's 10.13.6, 11.2.9, or 12.3.3, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time, which is why automated remote troubleshooting is essential, especially for teams that have embraced remote work and Work From Anywhere (WFA).
#### Embedded Tools for Assistance
One incredibly useful tool on OSX/macOS is "sudo wdutil info," which provides a dump of the current wireless related settings to the CLI. It can also be configured to generate specific logs for troubleshooting. Moreover, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of the information is only relevant at a specific point in time, similar to wdutil.

Running it in the background using "sudo nohup /usr/bin/sysdiagnose -u &" will write logs to "/var/tmp/<blah>.tar.gz" for you. If you prefer an interactive mode, you can run "sudo /usr/bin/sysdiagnose," which will give a privacy warning and open Finder in the correct location. From there, you can navigate to "/var/tmp" or use Finder with Cmd+Shift+G to point Finder to the path. However, keep in mind that the file sizes are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
