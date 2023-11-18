---
title: "How Do You Test Common Wifi Internet Issues"
subtitle: "Market Share?"
layout: research
ip_v4_address: "231.250.182.74"
date: 2023-11-18T21:25:59+00:00
draft: false
---

## Functioning of Internet Addressing

When using the Internet, individuals are assigned either a Public IPv4 address, such as ```231.250.182.74```, or an IPv6 address, like ```2000:5f94:d67:763a:142:fb5c:2f84:5f7d```. The verification can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, conveying these addresses and MAC addresses, such as ```24:68:0d:30:0f:6a```, can be prone to errors and become complex. Furthermore, this method lacks historical data, particularly when dealing with past issues.
## Navigating the World Wide Web
When attempting to access a website like https://halvorson.com, the first step involves contacting a DNS server to convert the host name (halvorson) combined with the Top Level Domain (com) of the URL into an IP address like ```169.100.38.229```. Every web request sent out by your computer and browser includes its type, for instance <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
Typically, your default gateway is an automatically assigned address through the DHCP. This address, such as ```172.21.17.130``` (usually ending in .1 or .254 based on the scope size), is where all traffic from your computer is forwarded. For a detailed breakdown of ```IPv6```, visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, it can be verified using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.17.130    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5224:67e9:f007:abf9%en0  UGcg   en0
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
domain_name_server (ip_mult): {241.183.107.104, 157.23.25.185}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 24:68:0d:30:0f:6a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 55:fd:29:d3:6b:6c
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you may rely on either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX Systems

For all versions of OSX/macOS, including `10.14.6`, `11.6.4`, or `12.2.7`, a variety of tools are available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance

One particularly useful tool on OSX/macOS is `sudo wdutil info`, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Furthermore, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background and write logs to `/var/tmp/<blah>.tar.gz`. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute `sudo /usr/bin/sysdiagnose` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
