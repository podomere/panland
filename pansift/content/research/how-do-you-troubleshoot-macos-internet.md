---
title: "How Do You Troubleshoot MacOS Internet"
subtitle: "Give You Some Time Back?"
layout: research
ip_v4_address: "110.107.65.48"
date: 2023-11-18T17:51:26+00:00
draft: false
---

## The Functioning of Internet Addressing Systems

When you connect to the Internet, you are assigned a specific IPv4 or IPv6 address. These addresses, such as ```110.107.65.48``` or ```2000:5906:2ecf:c176:b30d:5167:5b14:5069```, can be verified using the [https://test-ipv6.com/](https://test-ipv6.com/) website. However, sharing these addresses, and even MAC addresses like ```b6:4d:4e:91:57:47```, with individuals who are not well-versed in technology can lead to errors and complexities. Moreover, such information does not provide any historical context, particularly when addressing past issues.
## Navigating the World Wide Web

When accessing a site such as https://hintz-rohan.io, your computer first contacts a DNS server to convert the URL's host portion (hintz-rohan) and its Top Level Domain (io) into an IP address, for instance, ```176.181.12.210```. Additionally, all web requests sent by your computer and browser include its specifications, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## The Significance of Default Gateways

The default gateway, typically a DHCP-generated address, like ```192.0.0.110``` (often ending in .1 or .254 depending on the scope size), is where your computer directs all its outgoing traffic for routing. For IPv6, a comprehensive explanation can be found in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), yet on Mac or Linux, it can be verified using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.110    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3cf2:3ba9:8a29:7c81%en0  UGcg   en0
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
domain_name_server (ip_mult): {90.140.170.43, 27.255.150.127}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b6:4d:4e:91:57:47
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a4:bb:82:1b:af:82
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks

When transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions such as ```10.11.7```, ```11.0.6```, or ```12.1.7```, there are various tools available for troubleshooting. Unfortunately, the manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of them are only relevant to wireless at a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use ```sudo /usr/bin/sysdiagnose``` and follow the instructions to access the generated logs. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
