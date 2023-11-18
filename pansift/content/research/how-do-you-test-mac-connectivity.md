---
title: "How Do You Test Mac Connectivity"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "141.25.215.245"
date: 2023-11-18T19:42:13+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, individuals may have a Public IPv4 address, such as ```141.25.215.245```, or an IPv6 address, like ```2000:c950:a335:b46a:3cd3:4f00:430d:d861```. Verification can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, non-technical users may find it challenging to communicate these addresses and MAC addresses, such as ```66:7b:cc:15:fd:22```, due to their complexity. Furthermore, this approach lacks historical data.
## Navigating the World Wide Web
In order to access a website like https://beier.io, the first step is to contact a DNS server to translate the URL's host portion (beier) and Top Level Domain (io) to an IP address, such as ```147.217.170.26```. Additionally, the computer and browser send specific information with web requests, such as <br>
```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Significance of Default Gateways
The default gateway is typically an automatically configured address through DHCP, like ```10.16.86.102```. This is where the computer sends all of its traffic to be routed onwards. For ```IPv6```, detailed information is available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Mac or Linux users can verify this with: 
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.16.86.102    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b931:7fc1:c7ad:ee88%en0  UGcg   en0
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
domain_name_server (ip_mult): {14.41.253.171, 175.246.149.179}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 66:7b:cc:15:fd:22
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 55:cd:dc:76:46:39
}</pre>




## Solutions for Wired and Wireless Connectivity Issues
When it comes to transferring data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Steps to Troubleshoot Connectivity Problems on Apple macOS / OSX
No matter which version of OSX/macOS you are using, whether it's ```10.14.5```, ```11.3.3```, or ```12.2.7```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where the significance of automated remote troubleshooting comes into play, particularly for teams that are into remote work and Work From Anywhere (WFA).
#### Effective Built-in Tools for Troubleshooting
One incredibly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump to the CLI of current wireless related settings and can also be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless issues, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively* (although there is not much interaction), you can use ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. However, be mindful of the file sizes, as they are around 300MB or thereabouts.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
