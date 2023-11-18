---
title: "How To Support OSX Internet"
subtitle: "Streamline?"
layout: research
ip_v4_address: "201.51.82.200"
date: 2023-11-18T18:14:40+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, individuals are assigned either a Public IPv4 address (e.g. `201.51.82.200`) or an IPv6 address (e.g. `2000:4c6a:9352:b9af:8f92:ea92:5f7f:146d`). These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, communicating these addresses, or even referencing MAC addresses (e.g. `cf:6c:8f:3c:db:8b`) can be prone to errors and quickly become complex. Additionally, these addresses do not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web

When attempting to access a website such as https://mclaughlin.co, the first step involves contacting a DNS server to translate the host portion (mclaughlin) in combination with the Top Level Domain (co) of the URL into an IP address (e.g. `35.5.27.166`). Most web requests from your computer and browser include details such as: <br>`Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16`
## The Significance of Default Gateways

Typically, your default gateway is automatically configured via DHCP and results in an address such as `172.24.24.6` (usually ending in .1 or .254 based on the scope size). This is where all of your computer's traffic is directed for further routing. For `IPv6`, there is a detailed explanation available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.24.24.6    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2bda:37d5:e0e6:5a%en0  UGcg   en0
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
domain_name_server (ip_mult): {90.39.237.52, 254.27.92.94}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr cf:6c:8f:3c:db:8b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fd:8f:9c:38:6a:ab
}</pre>




## Resolve Issues with Wired or Wireless Connections
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are using, whether it's `10.13.2`, `11.5.4`, or `12.1.4`, there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes essential, especially for remote teams and those following a Work From Anywhere (WFA) practice.
#### Useful Built-in Scripts
One highly beneficial tool on OSX/macOS is `sudo wdutil info`, which provides a detailed dump of the current wireless related settings to the CLI and can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool offers a more comprehensive range of logs (although much of it is specific to wireless and is only point-in-time, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
