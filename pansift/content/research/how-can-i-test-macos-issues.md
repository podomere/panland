---
title: "How Can I Test MacOS Issues"
subtitle: "Infographic?"
layout: research
ip_v4_address: "103.89.246.217"
date: 2023-11-18T17:41:59+00:00
draft: false
---

## Understanding Internet Addressing

When using the internet, individuals are assigned Public IPv4 addresses like ```103.89.246.217``` or IPv6 addresses like ```2000:927e:749:f7d6:1135:5606:2218:3c68```. This information can be confirmed at [https://test-ipv6.com/](https://test-ipv6.com/), but communicating these addresses, or referencing MAC addresses such as ```2c:85:50:27:b4:8d``` proves to be difficult for non-technical users. Moreover, the lack of historical data adds another layer of complexity to the process.
## Navigating the World Wide Web

Accessing a web page like https://bergstrom.info involves initially contacting a DNS server to convert the URL's host (bergstrom) combined with its Top Level Domain (info) into an IP address like ```82.230.97.28```. The user's computer and browser includes its type in all web requests, for instance: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

By default, the gateway is automatically configured through DHCP and often appears as an address like ```10.127.153.64``` (typically ending in .1 or .254 depending on the scope size). It is the point where a computer sends all its traffic to be routed onwards. For IPv6, users can find more information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can also check on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.127.153.64    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6791:43d8:98a5:5583%en0  UGcg   en0
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
domain_name_server (ip_mult): {166.24.236.5, 156.127.4.26}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2c:85:50:27:b4:8d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr bd:cd:da:07:ae:69
}</pre>




##Troubleshooting Wired and Wireless Connections
When transmitting data at the physical and data layer, you may be using either a wired or wireless (Wi-Fi) medium to send the data to your router.
###Steps for Resolving Issues on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's 10.14.7, 11.2.8, or 12.1.5, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that embrace remote work and Work From Anywhere (WFA).
####Utilizing In-Built Scripts for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump to the CLI of current wireless-related settings and can also be configured to generate specific logs for troubleshooting. Additionally, the` sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant at a particular point in time in relation to wireless, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write the logs to `/var/tmp/<blah>.tar.gz` for you. To run it interactively, you can use `sudo /usr/bin/sysdiagnose`, which will provide a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
