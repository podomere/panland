---
title: "DiagnOSe OSX Internet Connection"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "234.134.240.159"
date: 2023-11-18T18:00:04+00:00
draft: false
---

## The Functioning of Internet Addressing

When connecting to the Internet, one might receive a Public IPv4 address, such as ```234.134.240.159```, or an IPv6 address, such as ```2000:70d4:f0ae:7955:21b0:9e65:c0af:2ad4```. These addresses can be verified by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not proficient in technology, attempting to convey these addresses, or even mentioning MAC addresses like ```2a:9c:5b:19:ff:95```, can be prone to errors and become complex rapidly. Moreover, this method does not provide any historical data, particularly from previous instances when problems occurred.
## Navigating the Internet

To access a webpage, such as https://wunsch.com, one first interacts with a DNS server to convert the host section (wunsch) coupled with the Top Level Domain (com) of the URL into an IP address, such as ```215.2.127.158```. The computer and browser actually transmit their type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. It provides a default gateway such as ```192.0.0.146``` (although they usually end in .1 or .254 based on the scope size) and this is where the computer dispatches all of its traffic to be routed onward. For ```IPv6```, a detailed examination can be found on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can also be verified on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.146    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d6ac:5fa1:840e:31fc%en0  UGcg   en0
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
domain_name_server (ip_mult): {130.170.13.38, 79.250.95.169}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2a:9c:5b:19:ff:95
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f4:af:3e:a0:d8:3e
}</pre>




## Troubleshooting Connectivity Issues
When it comes to transferring data to your router, you might be using either wired or wireless (Wi-Fi) connections at the physical and data layer.
### Steps for Apple macOS / OSX Users
Regardless of which version of OSX/macOS you are using - whether it's ```10.15.1```, ```11.4.7```, or ```12.2.3``` - there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts
One useful tool for OSX/macOS users is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also generate specific troubleshooting logs. Moreover, the ```sysdiagnose``` tool offers a more comprehensive range of logs, although much of it is specific to wireless and only captures point-in-time data like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it will open Finder in the correct location or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to find the path. However, be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
