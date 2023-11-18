---
title: "How Do You Support Wifi Router Issues"
subtitle: "Deep Dive?"
layout: research
ip_v4_address: "226.65.151.216"
date: 2023-11-18T21:07:21+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals could be assigned a Public IPv4 address, such as ```226.65.151.216```, or an IPv6 address, such as ```2000:451d:d09f:acae:2bfe:84f8:dc6a:ffe0```. Verification of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, relaying these addresses or MAC addresses, such as ```8d:97:13:af:d1:3a```, to those not familiar with technology can lead to errors and complications. Furthermore, there is a lack of historical data.
## Navigating the Internet
When attempting to access a webpage, such as https://gibson-morar.net, one must initially contact a DNS server in order to convert the host portion (gibson-morar) along with the Top Level Domain (net) of the URL to an IP address, such as ```160.172.255.140```. Each web request from a computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
The default gateway is generally an address configured automatically through DHCP. An example being ```172.17.183.225``` (typically ending in .1 or .254 based on the scope size), this is where a computer sends all traffic to be routed onwards. For ```IPv6```, more information can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but verification can be done on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.17.183.225    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5f92:7035:a452:933d%en0  UGcg   en0
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
domain_name_server (ip_mult): {88.43.49.156, 166.168.58.10}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8d:97:13:af:d1:3a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 19:57:ba:67:7b:92
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
Whether you are utilizing a wired or wireless (Wi-Fi) medium to transmit data to your router, connectivity issues at the physical and data layer can be frustrating. 
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are operating on, be it ```10.14.9```, ```11.2.5```, or ```12.1.5```, there is a variety of tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are engaged in remote work and Work From Anywhere (WFA) setups.
#### Useful Built-in Scripts
One of the most useful tools on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump to the CLI of current wireless related settings and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only related to wireless settings and is not time-based, similar to wdutil.

To run it in the background, use ```sudo nohup /usr/bin/sysdiagnose -u &``` and it will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively (although there is minimal interaction), use ```sudo /usr/bin/sysdiagnose``` and it will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. However, be cautious of the file sizes, as they are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
