---
title: "How Can I Support OSX Connectivity"
subtitle: "T-shirt Sizes?"
layout: research
ip_v4_address: "101.103.187.242"
date: 2023-11-18T18:23:46+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, an individual may be assigned a Public IPv4 address such as ```101.103.187.242``` or an IPv6 address like ```2000:f88b:4f63:5f8c:c0e8:5d78:309:5f78```. It is possible to confirm these addresses by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying or referencing MAC addresses like ```c4:57:5f:b6:a1:22``` to those who are not tech-savvy can lead to errors and complexity. Additionally, there is no provision of historical data, especially relating to past issues.
## Navigating the World Wide Web
Accessing a webpage like https://simonis.biz typically involves a visit to a DNS server to convert the host component (simonis) in association with the Top Level Domain (biz) of the URL to an IP address, for example ```27.172.202.104```. When making web requests, the computer and browser provide information about their type, such as: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Significance of Default Gateways
The default gateway is generally an address that is automatically configured via DHCP. It is common to receive a default gateway like ```172.27.64.91``` (typically ending in .1 or .254 depending on the scope size), and this serves as the point to which the computer forwards all its traffic. Further details on configuring ```IPv6``` can be found in the blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and it is possible to check on Mac or Linux using the following methods:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.64.91    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ebb3:30af:fbc5:13e1%en0  UGcg   en0
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
domain_name_server (ip_mult): {250.136.240.215, 76.6.212.210}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c4:57:5f:b6:a1:22
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 00:56:25:0c:1f:4b
}</pre>




## Resolving Connectivity Issues for Wired or Wireless Networks
When it comes to transferring data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Guidelines for Apple's macOS / OSX
Regardless of whether you are using OSX/macOS version ```10.14.7```, ```11.5.5```, or ```12.1.2```, there are various tools available for resolving connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that practice remote work and Work From Anywhere (WFA).
#### Pre-installed Scripts That Offer Assistance
A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump to the CLI of current wireless settings, and can also be configured to generate specific logs for troubleshooting. Furthermore, for a more comprehensive approach, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it pertains to wireless settings in a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (despite minimal interaction), you can execute ```sudo /usr/bin/sysdiagnose```, which will result in a privacy warning. When running it in the foreground, it should open Finder in the correct location, or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to direct Finder to the specified path. However, be mindful of the file sizes, which are approximately 300MB or thereabouts.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
