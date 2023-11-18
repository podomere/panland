---
title: "How Can I Test Wifi Router Issues"
subtitle: "Infographic?"
layout: research
ip_v4_address: "210.241.2.70"
date: 2023-11-18T21:00:22+00:00
draft: false
---

## Understanding Internet Addressing Mechanisms

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```210.241.2.70```, or an IPv6 address, like ```2000:4899:bd91:3b91:2b09:9897:a229:b305```. Verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/), but conveying such addresses, along with MAC addresses like ```79:93:3c:24:5c:ca```, can be error-prone for those not well-versed in technology. Furthermore, obtaining historical data, particularly regarding past issues, remains a challenge.
## Navigating Web Resources
Accessing a web page, such as https://kuphal-sanford.biz, commences with a query to a DNS server to translate the URL's host segment (kuphal-sanford) combined with its Top Level Domain (biz) into the corresponding IP address, such as ```7.37.153.243```. Interestingly, every web request carries information about the computer and browser type, evident from the format, e.g., <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways
The default gateway, typically an automatically assigned address through DHCP, serves as the focal point through which all of a computer's traffic is forwarded. Commonly ending in .1 or .254, depending on the scope size, this gateway is represented by an address like ```192.168.202.198```. While a detailed guide on addressing IPv6 connectivity issues exists at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), Mac and Linux users can verify their default gateway through a few simple commands.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.202.198    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8a6f:b719:e7c5:5d54%en0  UGcg   en0
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
domain_name_server (ip_mult): {51.34.52.240, 23.174.86.204}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 79:93:3c:24:5c:ca
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr df:b7:3a:d7:84:8d
}</pre>




## Resolve Issues with Wired and Wireless Connections

When it comes to transmitting data at the physical and data layer, you might find yourself using either a wired or wireless (Wi-Fi) medium to connect to your router.
### Troubleshooting Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS you're running - whether it's 10.13.9, 11.6.3, or 12.3.9 - there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that are actively embracing remote work and the Work From Anywhere (WFA) model.
#### Useful Built-in Scripts
One extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the command line interface and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide array of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

By running `sudo nohup /usr/bin/sysdiagnose -u &`, you can run the tool in the background and it will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can run `sudo /usr/bin/sysdiagnose`, but be prepared for a privacy warning. When not run in the background, it should open Finder in the correct location, allow you to navigate to `/var/tmp`, or use Finder with Cmd+Shift+G to locate the files. Just keep in mind that the file sizes can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
