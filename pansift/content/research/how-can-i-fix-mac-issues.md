---
title: "How Can I Fix Mac Issues"
subtitle: "Let's Take This Offline?"
layout: research
ip_v4_address: "246.215.80.247"
date: 2023-11-18T19:30:08+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```246.215.80.247``` or an IPv6 address like ```2000:dc48:c98e:5ea0:c4ec:c44a:5e2c:36da```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, communicating and memorizing these addresses, including MAC addresses like ```e1:ed:f5:e3:39:9c```, can be complicated and prone to errors. Furthermore, this method lacks historical data, especially in the context of past issues being encountered.
## Navigating to Websites

When attempting to access a webpage, such as https://turner-kshlerin.co, the initial step involves reaching out to a DNS server to convert the host portion (turner-kshlerin) combined with the Top Level Domain (co) of the URL into an IP address, such as ```216.239.205.25```. Interestingly, your computer and browser include their types in all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. This address, such as ```192.0.0.225``` (although they generally end in .1 or .254 based on the scope size), is where your computer directs all its traffic to be routed onwards. For those interested in ```IPv6```, a comprehensive guide is available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but users can also conduct a check on Mac or Linux with the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.225    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c42:3cef:f90:bc63%en0  UGcg   en0
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
domain_name_server (ip_mult): {205.108.76.20, 29.219.61.70}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e1:ed:f5:e3:39:9c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 84:11:63:90:34:eb
}</pre>




## Resolving Connectivity Issues with Wired and Wireless Networks
When it comes to transmitting data to your router, you may utilize a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple's macOS / OSX
Regardless of whether you are using OSX or macOS ```10.14.1```, ```11.3.5```, or ```12.0.2```, there is a variety of tools available for troubleshooting. However, manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
A helpful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time information related to wireless, similar to wdutil.

By running```sudo nohup /usr/bin/sysdiagnose -u &```, it will run in the background and write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it interactively, you can use the command<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it will open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. It is important to be aware of the file sizes, which are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
