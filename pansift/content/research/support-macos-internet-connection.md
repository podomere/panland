---
title: "Support MacOS Internet Connection"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "167.164.25.138"
date: 2023-11-18T17:21:10+00:00
draft: false
---

## How IP Addressing Functions

When using the Internet, you are assigned a Public IPv4 address such as ```167.164.25.138``` or an IPv6 address like ```2000:d32a:1677:216e:d20f:18bf:1023:4753```. Confirmation of this information can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, and even MAC addresses like ```58:df:f1:cb:e0:b8``` to non-technical individuals can be complex and error-prone. Additionally, these methods do not provide any historical information.
## Navigating the Internet
To access a website like https://fahey.com, the DNS server is initially contacted to convert the host portion (fahey) combined with the Top Level Domain (com) of the URL into an IP address such as ```241.96.216.170```. Additionally, your computer and browser include information about the web request type, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways
Typically, the default gateway is an address that is automatically configured via DHCP. This address, such as ```192.0.0.118``` (usually ending in .1 or .254) is where your computer directs all its traffic to be routed onwards. For ```IPv6``` connectivity, a comprehensive guide is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, on Mac or Linux systems this can be checked with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.118    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1e81:527e:e1a2:c9d0%en0  UGcg   en0
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
domain_name_server (ip_mult): {18.160.212.76, 39.160.81.197}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 58:df:f1:cb:e0:b8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 71:31:d3:64:d7:89
}</pre>




## Fixing Connectivity Issues on macOS Devices

When dealing with connectivity issues at the physical and data layer, it's important to consider whether you are using a wired or wireless (Wi-Fi) medium to send data to your router.
### Troubleshooting Tools for Various Versions of macOS

Regardless of whether you are using macOS versions such as `10.14.7`, `11.1.3`, or `12.1.7`, there are a variety of tools available for troubleshooting. However, the manual actions and scripts provided do not offer a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are fully embracing remote work and a Work From Anywhere (WFA) approach.
#### Effective Built-in Scripts

A useful tool on macOS is the `sudo wdutil info` command, which provides a dump of current wireless-related settings to the CLI. It's also possible to configure this to generate specific logs for troubleshooting. Alternatively, the `sysdiagnose` tool offers a more comprehensive solution for generating a wide range of logs, although much of it is point-in-time information related to wireless, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute the tool in the background and write logs to `/var/tmp/<blah>.tar.gz`. For an interactive experience (although there is minimal interaction), you can run `sudo /usr/bin/sysdiagnose`, which will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. It's important to be mindful of the large file sizes, approximately 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
