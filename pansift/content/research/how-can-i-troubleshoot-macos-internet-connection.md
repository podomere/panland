---
title: "How Can I Troubleshoot MacOS Internet Connection"
subtitle: "Customer Journey?"
layout: research
ip_v4_address: "186.30.145.25"
date: 2023-11-18T17:41:14+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the internet, you may receive a Public IPv4 address, such as ```186.30.145.25```, or an IPv6 address, such as ```2000:f5e4:246:2b50:3bcb:98e:7b54:350a```. It is possible to verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those unfamiliar with technology, or even mentioning MAC addresses like ```cd:d7:7a:34:5c:35```, can lead to errors and complexity. Moreover, this method does not provide any historical data, particularly regarding past issues.
## Navigating the Internet

In order to reach a webpage, such as https://wisoky.com, you initially connect to a DNS server to convert the combination of the host portion (wisoky) and the Top Level Domain (com) of the URL into an IP address, such as ```86.35.218.224```. The computer and browser include their information with every web request, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Significance of Default Gateways

Typically, your default gateway is an automatically assigned address through DHCP. The default gateway, such as ```192.168.136.27``` (usually ending in .1 or .254 based on the scope size), is where your computer directs all traffic to be routed. For ```IPv6```, a comprehensive guide is available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify this on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.136.27    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:abed:71f7:15ef:b86a%en0  UGcg   en0
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
domain_name_server (ip_mult): {86.67.22.237, 101.184.49.182}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr cd:d7:7a:34:5c:35
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f0:d2:0c:b5:37:b8
}</pre>




## Repairing Connectivity Issues with Wired and Wireless Networks
When it comes to transmitting data to your router, you might be utilizing either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Techniques for Apple's macOS / OSX Operating Systems
Regardless of whether you are running OSX or macOS, whether it's version ```10.12.7```, ```11.6.5```, or ```12.1.4```, there are a variety of troubleshooting tools available. However, these manual troubleshooting actions and scripts do not provide a set of correlated values over a period of time, which is where automated remote troubleshooting becomes valuable. This is particularly beneficial for teams that have adopted remote work and a Work From Anywhere (WFA) policy.
#### Utilizing Pre-Installed Scripts for Assistance
One valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface and can also be configured to generate specific logs for troubleshooting purposes. In addition, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although much of it is only relevant to the wireless connection at a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, although it will display a privacy warning. Running it in the background should open Finder in the correct location, or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to navigate to the path. However, be aware that the file sizes can be around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
