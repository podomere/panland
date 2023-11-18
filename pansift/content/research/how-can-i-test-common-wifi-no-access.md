---
title: "How Can I Test Common Wifi No Access"
subtitle: "Gamification?"
layout: research
ip_v4_address: "187.223.83.54"
date: 2023-11-18T21:21:09+00:00
draft: false
---

## How Internet Addressing Functions

When using the Internet, you receive a Public IPv4 address, such as ```187.223.83.54```, or an IPv6 address, such as ```2000:3f1b:66d2:ea0b:562f:4cf7:892e:dcbe```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to communicate these addresses to individuals who aren't tech-savvy, or even referencing MAC addresses like ```dd:f8:87:86:6d:70```, can quickly become complex and error-prone. Furthermore, this approach lacks historical data, especially regarding past issues.
## Browsing the Internet
When trying to visit a website like https://stiedemann.biz, you first access a DNS server to translate the host portion (stiedemann) combined with the Top Level Domain (biz) of the URL into an IP address, such as ```231.29.96.161```. Your computer and browser include the type of request with all web requests, for instance: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
Typically, your default gateway is an automatically configured address via DHCP. For example, you might receive a default gateway like ```192.168.50.227``` (usually ending in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, you can find detailed instructions on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.50.227    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ebf3:4797:889c:d530%en0  UGcg   en0
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
domain_name_server (ip_mult): {74.120.90.225, 172.41.182.50}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr dd:f8:87:86:6d:70
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f4:69:34:d2:a7:bd
}</pre>




## Resolving Issues with Wired or Wireless Connections
When it comes to transferring data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Steps for Apple macOS / OSX Troubleshooting
Regardless of whether you are using OSX or macOS versions like `10.14.8`, `11.3.7`, or `12.1.6`, there are various troubleshooting tools available. However, manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes extremely useful, particularly for teams that are focused on remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
One highly useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump to the CLI of current wireless settings and can also be configured to generate specific troubleshooting logs. Moreover, the `sysdiagnose` tool can be used to generate a wide range of logs, although many are only relevant to wireless at a specific point in time just like wdutil.

To run it in the background and generate logs at `/var/tmp/<blah>.tar.gz`, use `sudo nohup /usr/bin/sysdiagnose -u &`. For an *interactive* run, use `sudo /usr/bin/sysdiagnose`, which will issue a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` or use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind that the file size is approximately 300MB or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
