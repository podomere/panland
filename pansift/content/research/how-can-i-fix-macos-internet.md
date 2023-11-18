---
title: "How Can I Fix MacOS Internet"
subtitle: "Let's Take This Offline?"
layout: research
ip_v4_address: "31.177.80.46"
date: 2023-11-18T17:38:10+00:00
draft: false
---

## Understanding Internet Address Allocation

When connecting to the Internet, users are typically assigned a Public IPv4 address such as ```31.177.80.46``` or an IPv6 address like ```2000:29ec:5010:bd50:189d:9abe:3d4e:aec4```. A tool like [https://test-ipv6.com/](https://test-ipv6.com/) can be used to verify these addresses. However, conveying these complex addresses, or even the MAC address ```13:88:57:37:29:fa```, to non-technical individuals can be prone to errors and quickly become confusing. Moreover, this method does not offer any historical data, especially relating to past issues.
## Understanding Web Connectivity
Accessing a web page, such as https://predovic.io, initially involves querying a DNS server to translate the URL's host portion (predovic) and its Top Level Domain (io) to an IP address like ```114.26.34.173```. When making web requests, the computer and browser transmit specific information, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## Significance of Default Gateways
The default gateway is typically assigned automatically through DHCP and often ends with .1 or .254, depending on the scope size. This is the point to which all traffic from a computer is sent for routing. For ```IPv6``` connectivity, detailed instructions can be found in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, this can be verified using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.135.147    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4bf0:3c2:119f:ade9%en0  UGcg   en0
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
domain_name_server (ip_mult): {182.198.163.33, 17.84.174.148}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 13:88:57:37:29:fa
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f0:d4:4f:ec:25:d8
}</pre>




## Solutions for Wired and Wireless Connectivity Issues

When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Connectivity Problems on Apple macOS / OSX
Regardless of whether you are using OSX/macOS versions such as `10.14.8`, `11.6.2`, or `12.0.8`, there are various troubleshooting tools available. However, these tools do not provide a set of correlated values over time, making it difficult to diagnose issues. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and the Work From Anywhere (WFA) trend.
#### Utilizing Built-in Scripts for Assistance
On OSX/macOS, the `sudo wdutil info` tool is extremely helpful as it provides a dump of current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool offers a more comprehensive solution, generating a wide range of logs, although many of these are only related to wireless settings and are not time-bound like wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz`. For an interactive experience (although there is minimal interaction), you can run `sudo /usr/bin/sysdiagnose` with a privacy warning. When not run in the background, it should open Finder in the correct location or you can navigate to `/var/tmp` or use Finder with Cmd+Shift+G to locate the files, which are typically around 300MB in size.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
