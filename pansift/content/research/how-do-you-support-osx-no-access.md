---
title: "How Do You Support OSX No-access"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "9.43.54.190"
date: 2023-11-18T18:34:18+00:00
draft: false
---

## Understanding the Basics of Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```9.43.54.190```, or an IPv6 address, like ```2000:2968:4565:5e41:d9:e630:9385:b1b8```. This information can be verified from [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, trying to share or identify these addresses, including MAC addresses like ```5e:6b:f8:31:6e:b9```, can be error-prone and complex. Moreover, it does not provide any historical data, particularly regarding past issues.
## Navigating Through the World Wide Web

When accessing a website, such as https://dickens.biz, you begin by contacting a DNS server to convert the host portion (dickens) and the Top Level Domain (biz) of the URL into an IP address, such as ```24.245.171.16```. Your computer and browser include your device type in all web requests, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

Your default gateway is typically an address that is automatically configured through DHCP. This gateway, such as ```10.20.125.230``` (usually ending in .1 or .254 based on the scope size), is where your computer sends all its traffic to be forwarded. For ```IPv6```, a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, or you can verify this on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.20.125.230    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2676:21dd:6a24:aada%en0  UGcg   en0
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
domain_name_server (ip_mult): {30.15.112.166, 70.18.74.80}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5e:6b:f8:31:6e:b9
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 61:d4:4f:c8:77:38
}</pre>




## Fixing Issues with Wired and Wireless Connectivity
In order to transmit data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Problems on Apple's macOS
Regardless of whether you are running OSX/macOS version 10.15.6, 11.4.3, or 12.1.1, there are various tools available for troubleshooting. While manual actions and scripts can be helpful, they do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have embraced remote work and the Work From Anywhere (WFA) concept.
#### Pre-Installed Scripts for Assistance
A highly useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless-related settings to the command line interface (CLI) and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the `sysdiagnose` tool offers a more comprehensive option for generating a wide range of logs, although most of the information is only relevant to wireless settings, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. For an *interactive* run (even though there is limited interaction), you can execute `sudo /usr/bin/sysdiagnose`, which will trigger a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` manually, or use Finder with Cmd+Shift+G to point Finder to the path. However, be mindful of the file sizes, which are approximately 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
