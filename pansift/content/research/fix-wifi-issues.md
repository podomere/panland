---
title: "Fix Wifi Issues"
subtitle: "Market Share?"
layout: research
ip_v4_address: "204.75.217.16"
date: 2023-11-18T20:46:34+00:00
draft: false
---

## Understanding How Internet Addresses Function

When using the Internet, you are assigned a unique Public IPv4 address, such as ```204.75.217.16```, or an IPv6 address, for example ```2000:aaac:9704:b2d8:7115:b03d:6517:4654```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical individuals or trying to reference MAC addresses like ```6b:7f:57:d4:e7:53``` can be error-prone and cumbersome. Furthermore, this method lacks historical data, particularly relating to past issues.
## Navigating the World Wide Web
When you want to access a website, such as https://brakus.co, your computer initially contacts a DNS server to translate the host portion (brakus) in combination with the Top Level Domain (co) of the URL into an IP address, such as ```23.110.98.84```. Additionally, your computer and browser include specific details with all web requests, as seen here: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Significance of Default Gateways
The default gateway that your computer uses is typically an automatically assigned address through DHCP. It usually ends with .1 or .254, depending on the scope size, such as ```192.168.15.225```. This is the point where your computer directs all of its traffic to be further routed. For ```IPv6```, detailed instructions can be found in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can perform the check on Mac or Linux using the following steps:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.15.225    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:7d73:83f:5eca:9ead%en0  UGcg   en0
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
domain_name_server (ip_mult): {220.175.154.208, 129.217.6.26}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 6b:7f:57:d4:e7:53
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 61:8e:04:bd:68:41
}</pre>




## Solve Issues with Wired or Wireless Connections

When it comes to transferring data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS you are currently using - whether it's 10.13.1, 11.2.5, or 12.0.6, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where remote troubleshooting automation becomes valuable, particularly for teams that are embracing remote work and operating under a Work From Anywhere (WFA) model.
#### Helpful Built-in Scripts
An extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it only relates to wireless settings, similar to the wdutil tool.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (although there is not much interaction involved), you can run `sudo /usr/bin/sysdiagnose` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Just be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
