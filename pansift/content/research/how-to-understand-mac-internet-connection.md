---
title: "How To Understand Mac Internet Connection"
subtitle: "Infographic?"
layout: research
ip_v4_address: "41.226.104.206"
date: 2023-11-18T19:29:32+00:00
draft: false
---

## Basics of Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```41.226.104.206```, or an IPv6 address, like ```2000:a9ef:26e3:b03e:dfc8:db18:36a0:4bc1```. Verifying this information can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, relaying or even identifying these addresses, as well as MAC addresses like ```5f:24:45:cd:ea:cd```, can be prone to errors and quickly become complex. Furthermore, this process does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web

When attempting to reach a webpage, such as https://donnelly.com, the first step is to access a DNS server to translate the host portion (donnelly) in conjunction with the Top Level Domain (com) of the URL to an IP address, such as ```76.110.255.10```. Every web request sent from your computer and browser actually contains its type, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## Understanding the Significance of Default Gateways

In most cases, your default gateway is automatically configured through DHCP and is assigned an address, like ```172.21.71.59``` (typically ending in .1 or .254 depending on the scope size). This is the location where your computer routes all of its traffic. A deeper exploration of ```IPv6``` connectivity is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or alternatively, you can verify this on Mac or Linux with the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.71.59    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ea0a:bf58:893:1bdf%en0  UGcg   en0
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
domain_name_server (ip_mult): {226.12.135.111, 65.52.8.98}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5f:24:45:cd:ea:cd
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b9:b6:c6:5b:95:fe
}</pre>




## Addressing Wired and Wireless Connectivity Issues
When it comes to sending data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of whether you are working with OSX/macOS versions such as 10.12.9, 11.4.1, or 12.3.6, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time, which is where automated remote troubleshooting becomes valuable, especially for remote work and Work From Anywhere (WFA) teams.
#### Effective Built-in Scripts for Troubleshooting
A useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool offers a comprehensive range of logs, although much of it is only point-in-time in relation to wireless, similar to wdutil.

To run the `sysdiagnose` tool in the background and generate logs, the command `sudo nohup /usr/bin/sysdiagnose -u &` can be used. Alternatively, for interactive use, the command `sudo /usr/bin/sysdiagnose` will provide a privacy warning and open Finder in the correct location, or users can navigate to `/var/tmp` using Finder with Cmd+Shift+G. It's important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
