---
title: "How Can I Support Apple Internet"
subtitle: "Streamline?"
layout: research
ip_v4_address: "105.36.54.220"
date: 2023-11-18T19:01:27+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, it is common to have a Public IPv4 address such as ```105.36.54.220``` or an IPv6 address like ```2000:5f1:bc34:1d2f:55b:2e0b:6c80:6f5c```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, conveying these addresses or even mentioning MAC addresses like ```ec:88:74:f5:c5:c2``` can be prone to errors and quickly becomes complex. Furthermore, this method does not provide any historical data, especially when past issues have occurred.
## Navigating the World Wide Web
In order to access a website such as https://jerde-smith.name, you first contact a DNS server to convert the host segment (jerde-smith) combined with the Top Level Domain (name) of the URL into an IP address, such as ```181.251.106.18```. Whenever you make web requests, your computer and browser transmit their type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways
The default gateway is typically an automatically configured address through DHCP. It assigns a default gateway such as ```10.107.238.252``` (although they usually end in .1 or .254 depending on the scope size), and this is the point where your computer sends all of its traffic for further routing. For ```IPv6``` connectivity, an in-depth tutorial is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.107.238.252    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5ed9:dc8a:538b:d442%en0  UGcg   en0
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
domain_name_server (ip_mult): {64.1.220.52, 202.9.50.235}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ec:88:74:f5:c5:c2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 37:11:50:35:5d:0e
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX or macOS versions such as `10.12.5`, `11.1.9`, or `12.1.8`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that have adopted remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Commands for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless-related settings to the CLI, and can also generate specific logs for troubleshooting purposes. In addition, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant at a specific point in time in relation to wireless, similar to wdutil.

Running the command `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background and write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (even though there is not much interaction), you can use the `sudo /usr/bin/sysdiagnose` command, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
