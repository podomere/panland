---
title: "Troubleshoot Wifi Connectivity"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "207.165.192.5"
date: 2023-11-18T20:48:20+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you are assigned a unique identifier known as the IP address. It could be a Public IPv4 address, which looks like ```207.165.192.5```, or an IPv6 address, for example ```2000:8588:34ef:fb23:a0ac:b5b1:d263:1c12```. These addresses can be verified on [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses to individuals who are not well-versed in technology or even mentioning MAC addresses like ```ac:6e:c5:14:05:7c``` can be prone to errors and quickly become complex. Furthermore, this method does not offer any historical data, especially when dealing with previous issues.
## Navigating the World Wide Web

When accessing a web page such as https://thompson-green.info, the first step is to contact a DNS server to convert the host portion (thompson-green) along with the Top Level Domain (info) of the URL into an IP address, for example ```248.68.209.153```. Interestingly, your computer and browser actually transmit their type with all web requests, for instance:
```html
Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko
```
## Understanding the Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. This default gateway, like ```10.139.75.190``` (although they frequently end in .1 or .254 depending on the scope size), is where your computer directs all its traffic to be routed further. For those interested in ```IPv6```, we have an extensive explanation available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also verify on Mac or Linux by using the following command:
```html
```bash
command here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.139.75.190    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c52c:5b4b:d477:5e54%en0  UGcg   en0
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
domain_name_server (ip_mult): {166.35.118.223, 37.199.186.36}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ac:6e:c5:14:05:7c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8d:19:07:7c:21:33
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are currently using - whether it's 10.12.6, 11.1.5, or 12.1.5, there are a variety of tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Tools for Troubleshooting
One incredibly useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

To run it in the background and write logs to `/var/tmp/<blah>.tar.gz`, use the following command: `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When not run in the background, it will open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
