---
title: "DiagnOSe OSX Internet"
subtitle: "Market Share?"
layout: research
ip_v4_address: "97.130.107.28"
date: 2023-11-18T17:59:51+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```97.130.107.28``` or an IPv6 address like ```2000:5fc2:231c:c6d0:97d8:c02b:137e:8faa```. This information can be verified from [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying or referencing these addresses, and even MAC addresses like ```d3:bf:86:67:d7:28```, can be prone to errors and become complex for those not well-versed in technical terminology. Moreover, it does not offer any historical data, particularly regarding past issues.
## Navigating the World Wide Web
When attempting to reach a webpage such as https://upton.co, you first access a DNS server to convert the host portion (upton) in combination with the Top Level Domain (co) of the URL into an IP address like ```254.211.50.119```. In fact, your computer and browser send its type with all web requests, for example: 
```html
Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16
```
## Significance of Default Gateways
Normally, your default gateway is an address that is automatically configured via DHCP, such as ```192.0.0.35``` (although they generally end in .1 or .254, depending on the scope size). This is the point where your computer sends all its traffic to be routed onward. In the case of ```IPv6```, more detailed information can be found on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux, this can be verified with:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.35    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5146:d464:bee9:e247%en0  UGcg   en0
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
domain_name_server (ip_mult): {3.20.1.188, 59.12.146.66}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d3:bf:86:67:d7:28
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9b:86:18:47:23:0e
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are operating on, whether it's ```10.11.6```, ```11.5.8```, or ```12.0.6```, there are various troubleshooting tools available. However, these manual approaches and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes particularly beneficial, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One immensely handy tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless-related settings to the CLI and can be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Using ```sudo nohup /usr/bin/sysdiagnose -u &``` will run the sysdiagnose tool in the background and write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there isn't much interaction), you can use<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G to point it to the path. However, be mindful of the file sizes, which can be around 300MB more or less.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
