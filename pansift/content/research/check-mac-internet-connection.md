---
title: "Check Mac Internet Connection"
subtitle: "Data Points?"
layout: research
ip_v4_address: "81.226.209.167"
date: 2023-11-18T19:18:21+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 or IPv6 address, such as `81.226.209.167` or `2000:1127:20a3:1bfc:8b64:14d6:4473:e7e4`. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, the challenge arises when communicating these addresses to individuals unfamiliar with technical jargon or when dealing with MAC addresses like `5b:b5:23:71:e9:c7`. Furthermore, historical data is not readily available, particularly when dealing with past issues.
## Navigating the World Wide Web

When attempting to access a website such as https://homenick.org, a DNS server is first contacted to translate the host portion (homenick) and the Top Level Domain (org) of the URL into an IP address, such as `101.98.131.11`. Your computer and browser provide information on their type with each web request, for example: 
```html
Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16
```
## Significance of Default Gateways

The default gateway, usually obtained through DHCP, is essential for routing all traffic from your computer. This address, such as `172.31.116.209`, typically ends in .1 or .254 depending on the scope size. For `IPv6`, comprehensive guidance is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but checking on Mac or Linux can be done by:
```html
<br>
```

### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.31.116.209    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6a09:4a7:7a12:41a8%en0  UGcg   en0
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
domain_name_server (ip_mult): {167.91.165.83, 143.222.4.222}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5b:b5:23:71:e9:c7
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9b:50:47:8d:6d:0a
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you are operating on—be it 10.12.2, 11.0.2, or 12.0.3—there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of interconnected values over time. This is where automated remote troubleshooting proves beneficial, particularly for teams that embrace remote work and the Work From Anywhere (WFA) culture.
#### Useful Built-in Scripts
One incredibly useful tool on OSX/macOS is the "sudo wdutil info," which provides a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Additionally, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" will execute it in the background, and it will write logs to "/var/tmp/<blah>.tar.gz" for you. If you prefer to run it *interactively* (even though there is minimal interaction), you can run "sudo /usr/bin/sysdiagnose," which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" using Finder with Cmd+Shift+G. Just be cautious of the file sizes, which are approximately 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
