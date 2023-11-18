---
title: "DiagnOSe Mcs No Access"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "100.189.105.80"
date: 2023-11-18T21:29:43+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address, such as ```100.189.105.80```, or an IPv6 address, such as ```2000:212b:b8:32e3:7da4:a056:9f29:98eb```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, communicating these addresses or even referencing MAC addresses, like ```b2:6a:a0:1d:8f:64```, can be prone to errors and can become convoluted rather quickly. Moreover, this information does not provide any historical context, particularly in relation to past issues that may have arisen.
## Navigating the World Wide Web

In order to access a webpage such as https://erdman-oconner.net, you first connect to a DNS server to convert the host portion (erdman-oconner) along with the Top Level Domain (net) of the URL into an IP address, such as ```143.74.163.56```. Your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways

Your default gateway is typically an automatically assigned address through DHCP. Usually, it is a default gateway like ```172.20.70.122``` (although they generally end in .1 or .254 depending on the scope size) and this is where your computer directs all its traffic to be routed further. For ```IPv6```, you can find more detailed information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.70.122    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c8df:61a8:2bed:f2cb%en0  UGcg   en0
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
domain_name_server (ip_mult): {120.108.13.171, 51.97.94.206}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b2:6a:a0:1d:8f:64
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 91:3e:b6:a5:40:ca
}</pre>




## Resolve Connectivity Issues with Wired and Wireless Networks

When it comes to sending data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layers.
### How to Address Problems on Apple macOS / OSX Systems

Regardless of whether you are running ```10.11.4```, ```11.0.5```, or ```12.0.4```, there are various troubleshooting tools available for OSX/macOS. However, these manual and scripted solutions do not provide a set of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA) policies.
#### Useful Built-in Scripts for Troubleshooting

A highly useful tool on OSX/macOS is ```sudo wdutil info,``` which provides a dump of the current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive range of logs (although many are only point-in-time in relation to wireless, like wdutil).

To run it in the background and generate logs at ```/var/tmp/<blah>.tar.gz,``` use ```sudo nohup /usr/bin/sysdiagnose -u &.``` For an interactive option, you can run ```sudo /usr/bin/sysdiagnose,``` which will open Finder in the correct location or allow you to navigate to ```/var/tmp.``` Keep in mind that the file sizes will be around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
