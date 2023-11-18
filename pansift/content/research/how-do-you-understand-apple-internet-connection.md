---
title: "How Do You Understand Apple Internet Connection"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "96.231.230.152"
date: 2023-11-18T19:11:55+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, individuals may receive a Public IPv4 address, such as ```96.231.230.152```, or an IPv6 address, for example ```2000:28fd:3750:ad3:9ae0:b847:11ac:cb37```. Verification of this information can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, along with MAC addresses like ```2b:36:bc:8c:11:f1```, can be prone to errors and becomes complex for non-technical users. There is also a lack of historical data, which limits the understanding of past issues.
## Navigating the World Wide Web

To visit a website, such as https://hamill.org, the process involves accessing a DNS server to translate the URL's host portion (hamill) and Top Level Domain (org) into an IP address, such as ```206.203.95.110```. Interestingly, each web request from the computer and browser also includes its type, demonstrated by <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## Significance of Default Gateways

The default gateway is typically an automatically configured address assigned through DHCP. This default gateway, often ending in .1 or .254 depending on the scope size, is where all of the computer's traffic is sent for further routing. For IPv6 related information, a detailed discussion can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, this information can be verified using specific commands.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.23.105    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:284d:193a:e3cb:299d%en0  UGcg   en0
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
domain_name_server (ip_mult): {145.204.250.20, 187.189.216.138}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2b:36:bc:8c:11:f1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 5f:1d:70:eb:6d:87
}</pre>




## Resolving Issues with Wired or Wireless Connections

When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Strategies for Addressing Problems on Apple macOS / OSX
No matter which version of OSX/macOS you are currently running, whether it's 10.13.6, 11.0.1, or 12.2.4, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of interconnected values over time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Pre-installed Scripts That Offer Assistance
One extremely useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of the current wireless settings in the CLI and can also generate specific logs for troubleshooting. Furthermore, the `sysdiagnose` tool can be used to produce a wide range of logs, although many are only relevant to wireless settings at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz`. Alternatively, if you prefer to run it interactively, you can execute `sudo /usr/bin/sysdiagnose`, which will also display a privacy warning. When not run in the background, it should open Finder in the correct location, allowing you to navigate to `/var/tmp` or use Finder with Cmd+Shift+G. However, be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
