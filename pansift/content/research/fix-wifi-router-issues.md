---
title: "Fix Wifi Router Issues"
subtitle: "Swag?"
layout: research
ip_v4_address: "12.94.24.59"
date: 2023-11-18T20:47:13+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When connecting to the Internet, you are assigned a Public IPv4 address such as ```12.94.24.59``` or an IPv6 address like ```2000:ccb7:d851:efc0:e447:f67d:e639:bb8f```. These addresses can be verified by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those who are not technically inclined, or mentioning MAC addresses like ```91:55:49:31:87:c3```, can be prone to errors and become complex. Furthermore, this method does not offer any historical data, especially related to past issues.
## Navigating the Internet

When accessing a website such as https://johns-mcdermott.co, the process begins with contacting a DNS server to convert the host portion (johns-mcdermott) combined with the Top Level Domain (co) of the URL into an IP address, like ```187.58.196.147```. Interestingly, your computer and browser transmit their type with all web requests. For instance:
```html
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## Significance of Default Routing

Typically, your default gateway is an address that is automatically configured via DHCP. This default gateway, such as ```10.143.188.37``` (usually ending in .1 or .254 based on the scope size), is where your computer sends all its traffic to be routed further. For ```IPv6```, detailed instructions are available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can verify this on Mac or Linux by using the following command:
```html
ifconfig | grep inet6
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.143.188.37    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d5f8:94a7:4ee7:eb8b%en0  UGcg   en0
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
domain_name_server (ip_mult): {155.60.117.36, 229.115.171.171}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 91:55:49:31:87:c3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f7:67:29:59:bf:e3
}</pre>




## Troubleshooting Connectivity Issues

When it comes to the physical and data layer, you might be utilizing either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Resolving Problems on Apple Devices

No matter which version of OSX/macOS you are running, whether it's "10.15.5", "11.6.9", or "12.0.5", there are various tools available for resolving connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance

One extremely useful tool on OSX/macOS is "sudo wdutil info", which provides a dump of current wireless-related settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Furthermore, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of the information is only relevant to wireless settings, similar to wdutil.

To run it in the background and generate logs at "/var/tmp/<blah>.tar.gz", use the command "sudo nohup /usr/bin/sysdiagnose -u &". If you prefer to run it interactively, use the command "sudo /usr/bin/sysdiagnose", which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" manually. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
