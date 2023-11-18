---
title: "How Do You Test MacOS Internet"
subtitle: "Two-way Street?"
layout: research
ip_v4_address: "122.246.33.60"
date: 2023-11-18T17:52:53+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, you are assigned a unique Public IPv4 or IPv6 address, such as ```122.246.33.60``` or ```2000:bd9a:7a14:d1b5:2c88:8a41:93d:9bf6```. These addresses can be verified on [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, conveying these addresses or MAC addresses like ```82:b1:f0:8c:d5:38``` can be prone to errors and quickly become complex. Additionally, this does not provide any historical data, especially when previous issues arise.
## Navigating the Internet

When accessing a website such as https://reynolds.org, your computer first contacts a DNS server to convert the host (reynolds) and the Top Level Domain (org) of the URL into an IP address, such as ```247.124.185.179```. Furthermore, your computer and browser send their specifications with every web request, for example:
```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically assigned address through DHCP, such as ```192.0.0.66``` (although they usually end in .1 or .254 depending on the scope). This is where your computer directs all its traffic to be forwarded. For ```IPv6```, you can find more information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify it on Mac or Linux using the following command:
```javascript
ip -6 route show
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.66    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d13e:f77a:b437:a587%en0  UGcg   en0
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
domain_name_server (ip_mult): {193.145.111.27, 11.119.217.131}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 82:b1:f0:8c:d5:38
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 27:f0:8d:4e:f8:a2
}</pre>




## Solutions for Connectivity Issues
When it comes to transmitting data at the physical and data layer, you may encounter connectivity issues with either a wired or wireless (Wi-Fi) medium as you send data to your router.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are using, whether it's '10.13.5', '11.3.9', or '12.1.9', there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that are embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
A very useful tool on OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless related settings to the command line interface and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs in a more comprehensive manner (although much of it is only relevant to wireless at a specific point in time, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute the tool in the background and write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively (despite minimal interaction), you can execute `sudo /usr/bin/sysdiagnose`, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. It's important to be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
