---
title: "DiagnOSe Mac Connectivity"
subtitle: "Gamification?"
layout: research
ip_v4_address: "81.128.174.213"
date: 2023-11-18T19:14:09+00:00
draft: false
---

## Understanding the Functionality of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```81.128.174.213```, or an IPv6 address, like ```2000:f85e:4e14:9602:20b9:6a06:9f8:85af```. This information can be verified through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying and discussing these complex addresses, and even mentioning MAC addresses like ```11:2d:dd:29:63:97```, can be prone to errors and quickly become convoluted. Furthermore, this does not provide any historical data, particularly relating to past issues.
## Navigating Web Pages
In order to access a website, such as https://waelchi.com, the initial step involves connecting to a DNS server to convert the host portion (waelchi) combined with the Top Level Domain (com) of the URL into an IP address, such as ```45.93.47.222```. When making web requests, your computer and browser actually send its type, for example, <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Significance of Default Gateways
Typically, your default gateway is an automatically configured address obtained through DHCP. This default gateway, such as ```192.0.0.105``` (usually ending with .1 or .254 based on the scope size), is where your computer directs all its traffic to be routed onwards. For ```IPv6```, a detailed explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux, you can check using the following command:
```bash
command prompt
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.105    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:65ab:ef73:7f60:f0b6%en0  UGcg   en0
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
domain_name_server (ip_mult): {178.248.163.28, 213.252.84.170}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 11:2d:dd:29:63:97
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 4b:67:12:ea:e7:30
}</pre>




## Resolving Issues with Wired or Wireless Connections

When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Handy Solutions for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS version ```10.15.3```, ```11.4.6```, or ```12.0.3```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Mechanisms
The command ```sudo wdutil info``` is a valuable tool on OSX/macOS as it provides a dump of current wireless settings to the CLI, and it can also be configured to generate specific logs for troubleshooting. In addition, the ```sysdiagnose``` tool is more comprehensive and can be used to generate a wide range of logs, although many of them are only relevant to the wireless network at a specific moment in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute<br>```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder or use Cmd+Shift+G in Finder to navigate to the path. Just keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
