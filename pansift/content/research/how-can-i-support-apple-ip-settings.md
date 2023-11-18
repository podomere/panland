---
title: "How Can I Support Apple IP Settings"
subtitle: "Branding?"
layout: research
ip_v4_address: "235.239.44.43"
date: 2023-11-18T19:01:50+00:00
draft: false
---

### Understanding the Basics of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```235.239.44.43```, or an IPv6 address, like ```2000:f63e:ad3f:51dd:44c4:82ed:a02:85f```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, conveying these addresses or MAC addresses like ```0f:1d:1b:54:9f:d0``` can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data, especially when encountering previous issues.
### Navigating the World Wide Web
When accessing a website such as https://huel-windler.net, you first contact a DNS server to translate the host portion (huel-windler) combined with the Top Level Domain (net) of the URL into an IP address, such as ```208.231.90.40```. Your computer and browser sends its type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
### Recognizing the Significance of Default Gateways
Your default gateway is typically an automatically configured address via DHCP. You are assigned a default gateway, such as ```10.243.201.26``` (usually ending in .1 or .254 depending on the scope size), where your computer sends all its traffic to be routed onwards. For ```IPv6```, we provide an in-depth guide on [how to fix IPv6 connectivity](/blog/how-to-fix-ipv6-connectivity/), but you can also check on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.243.201.26    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5b53:cdd9:a969:9e9c%en0  UGcg   en0
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
domain_name_server (ip_mult): {213.26.172.183, 88.226.154.206}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0f:1d:1b:54:9f:d0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 55:1c:47:c8:e9:d2
}</pre>




## Resolving Issues with Wired and Wireless Connectivity

When it comes to sending data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effectively Addressing Problems on Apple macOS / OSX
Irrespective of whether you are using OSX/macOS versions such as ```10.15.7```, ```11.3.7```, or ```12.0.7```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Utilizing In-Built Scripts for Assistance
An extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless-related settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time information related to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, for an *interactive* run (even though there is not much interaction), you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, allowing you to navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. However, be cautious of large file sizes, around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
