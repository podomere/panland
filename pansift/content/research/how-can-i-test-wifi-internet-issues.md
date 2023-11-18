---
title: "How Can I Test Wifi Internet Issues"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "139.232.172.138"
date: 2023-11-18T21:00:04+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```139.232.172.138``` or an IPv6 address like ```2000:390d:1687:c0fa:54b9:9058:3d5f:af```. A simple way to check this is by visiting [https://test-ipv6.com/](https://test-ipv6.com/), although explaining and sharing these addresses with non-technical individuals can be prone to errors and become complex. Moreover, it lacks historical data, particularly from previous issues.
## Navigating the Web

Accessing a website, such as https://swift.net, involves the initial step of connecting to a DNS server to translate the host portion (swift) and the Top Level Domain (net) of the URL into an IP address like ```218.252.34.124```. Additionally, every web request sent by your computer and browser includes its type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

A default gateway, typically an automatically configured address via DHCP, is assigned to you, such as ```192.0.0.128``` (usually ending in .1 or .254 depending on the scope size). This is where your computer directs all its traffic to be routed onwards. For ```IPv6```, detailed instructions are available in our blog post: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can check on Mac or Linux with the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.128    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4bb3:227e:f7e:16c2%en0  UGcg   en0
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
domain_name_server (ip_mult): {42.243.1.123, 230.179.31.7}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 1c:94:84:83:52:b8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 58:63:c6:61:38:48
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer. 
### Resolving Problems on Apple macOS / OSX
No matter which version of OSX/macOS you're running, whether it's `10.11.3`, `11.4.8`, or `12.0.8`, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that work remotely and embrace the concept of Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
An extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless-related settings in the Command Line Interface (CLI). This command can also be configured to generate specific logs for troubleshooting. In addition, the `sysdiagnose` tool can be used to generate a wide range of logs, although many of them are only relevant to wireless at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute the tool in the background and write logs to `/var/tmp/<blah>.tar.gz` for you. Alternatively, if you prefer to run it interactively, you can use the command `sudo /usr/bin/sysdiagnose` (although it doesn't require much interaction). It will prompt a privacy warning and when run in the foreground, it should open Finder in the correct location. You can also navigate to `/var/tmp` using Finder with Cmd+Shift+G or manually. Just keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
