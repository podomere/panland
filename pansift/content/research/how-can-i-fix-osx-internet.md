---
title: "How Can I Fix OSX Internet"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "36.66.29.254"
date: 2023-11-18T18:17:15+00:00
draft: false
---

## Understanding Internet Address Allocation

When using the Internet, you may receive a Public IPv4 address such as ```36.66.29.254``` or an IPv6 address like ```2000:1a13:2deb:4a61:185e:c16d:d9:e61```. The website [https://test-ipv6.com/](https://test-ipv6.com/) can verify this for you. However, explaining these addresses to those not well-versed in technology can be challenging, especially when dealing with MAC addresses like ```94:c0:5d:c1:9a:8a```. Furthermore, historical data is not provided, which is particularly important when addressing past issues.
## Navigating the World Wide Web

In order to access a website such as https://wehner.net, you first consult a DNS server to convert the host segment (wehner) in combination with the Top Level Domain (net) of the URL into an IP address like ```230.5.64.220```. Every web request from your computer and browser contains its type, such as <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically assigned address through DHCP. It could be a default gateway such as ```192.168.208.225``` (often ending in .1 or .254 depending on the scope size), which is where your computer directs all of its traffic to be forwarded. For details on ```IPv6```, a comprehensive guide is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, on Mac or Linux, the status can be checked with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.208.225    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:37ee:dd32:869:aa97%en0  UGcg   en0
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
domain_name_server (ip_mult): {57.128.221.12, 120.246.181.123}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 94:c0:5d:c1:9a:8a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e8:c2:27:16:b7:6f
}</pre>




## Fixing Issues with Wired and Wireless Connections

When it comes to transmitting data towards your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX

No matter which version of OSX/macOS you're running—whether it's ```10.11.9```, ```11.0.9```, or ```12.0.2```—there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly useful, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts

A very helpful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless-related settings to the CLI and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there isn't much interaction), you can use ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just be mindful of the file sizes, which are usually around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
