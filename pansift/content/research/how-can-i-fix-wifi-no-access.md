---
title: "How Can I Fix Wifi No Access"
subtitle: "Penetrate The Market?"
layout: research
ip_v4_address: "87.15.133.160"
date: 2023-11-18T20:58:01+00:00
draft: false
---

## Explanation of Internet Addressing

When surfing the web, you might encounter a Public IPv4 address such as ```87.15.133.160``` or an IPv6 address like ```2000:65f8:c65c:ff26:b65d:7ab9:e572:ccfa```. This can be confirmed by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, expressing these addresses, or even mentioning MAC addresses like ```1b:a7:eb:d4:1a:58``` to those less knowledgeable in technology can be prone to errors and become complex. Furthermore, this method does not provide any historical data, especially when previous issues have arisen.
## Navigating the World Wide Web

Accessing a website such as https://steuber-rempel.biz involves interaction with a DNS server to translate the host portion (steuber-rempel) along with the Top Level Domain (biz) of the URL, into an IP address like ```244.229.85.237```. Whenever you make web requests, your computer and browser sends its type, such as <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateway Configuration

The default gateway typically obtains its address through automatic configuration via DHCP. It usually ends with .1 or .254, depending on the scope size, such as ```172.21.168.59```. This is the destination to which your computer directs all outgoing traffic to be routed. For ```IPv6```, detailed instructions can be found in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but can be verified on Mac or Linux by:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.168.59    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5b42:165d:145d:9914%en0  UGcg   en0
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
domain_name_server (ip_mult): {82.80.194.96, 56.111.139.185}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 1b:a7:eb:d4:1a:58
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e2:52:48:49:cd:4e
}</pre>




## Resolving Connectivity Issues on Wired and Wireless Networks
In order to transmit data to your router, you may be utilizing a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX
No matter which version of OSX/macOS you are operating on, such as `10.15.9`, `11.1.7`, or `12.2.3`, there is a variety of tools available for resolving connectivity issues. However, these manual interventions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams engaging in remote work and Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts
One useful tool on OSX/macOS is the `sudo wdutil info`, which produces a dump of current wireless settings in the CLI and can also be set up to create specific logs for troubleshooting. Furthermore, the `sysdiagnose` tool can generate a comprehensive range of logs (although much of it is only relevant to wireless settings, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz`. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
