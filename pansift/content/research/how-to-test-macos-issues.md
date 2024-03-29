---
title: "How To Test MacOS Issues"
subtitle: "Market Share?"
layout: research
ip_v4_address: "48.198.172.173"
date: 2023-11-18T17:27:12+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```48.198.172.173```, or an IPv6 address, like ```2000:99ce:e181:8535:3e:1451:d1d0:cf5```. These addresses can be checked at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technologically inclined, communicating or identifying these addresses, as well as MAC addresses like ```6b:d6:d6:8c:2d:ec```, can be error-prone and confusing. Moreover, historical data regarding previous issues is not provided.
## Navigating the World Wide Web

Accessing a webpage, such as https://kuhlman-hickle.info, involves initially connecting to a DNS server to convert the host domain (kuhlman-hickle) combined with the Top Level Domain (info) of the URL to an IP address, like ```227.74.54.241```. In this process, your computer and browser transmit information about their type with every web request, such as:<br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. It usually ends in .1 or .254, depending on the scope size, such as ```10.248.221.30```, and is where your computer sends all its traffic to be routed onwards. For more in-depth information on ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, the default gateway can be checked using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.248.221.30    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:7278:c004:f167:c5ca%en0  UGcg   en0
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
domain_name_server (ip_mult): {159.213.165.220, 8.198.16.108}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 6b:d6:d6:8c:2d:ec
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 3c:6a:39:2f:37:45
}</pre>




## Solutions for Resolving Connectivity Issues
When it comes to transferring data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Handy Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are running, such as ```10.13.1```, ```11.4.1```, or ```12.2.2```, there exists a variety of troubleshooting tools. However, these manual actions and scripts fail to provide a set of interconnected values over a period of time. This is where the automated remote troubleshooting approach becomes extremely useful, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Pre-Installed Scripts for Assistance
An incredibly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although much of it is only relevant to wireless at a specific moment, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute it in the background and generate logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (despite minimal interaction), you can enter ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can manually navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
