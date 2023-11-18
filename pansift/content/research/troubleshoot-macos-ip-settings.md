---
title: "Troubleshoot MacOS IP Settings"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "48.245.48.64"
date: 2023-11-18T17:12:20+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```48.245.48.64```, or an IPv6 address, such as ```2000:e94e:e078:97b:3468:c6ef:d9aa:4df5```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, sharing and communicating these addresses, as well as MAC addresses like ```20:b4:1f:1e:97:8f```, can be prone to errors and become complex for those who are not technologically-inclined. Additionally, this method does not provide any historical data, especially relating to past issues.
## Navigating the World Wide Web
In order to access a web page, such as https://funk-marks.name, your computer must first communicate with a DNS server to convert the host portion (funk-marks) and the Top Level Domain (name) of the URL into an IP address, like ```52.70.143.133```. When making web requests, your computer and browser also send its specifications, for example: <br> ```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
Your default gateway is generally assigned automatically through DHCP. It is usually an address ending in either .1 or .254, depending on the scope size, for instance: ```192.168.82.34```. This is the designated point where your computer directs all its traffic to be further routed. For information on checking IPv6 on Mac or Linux, you can refer to our comprehensive guide: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/)
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.82.34    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9ec9:82e9:238f:8dda%en0  UGcg   en0
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
domain_name_server (ip_mult): {228.51.87.188, 244.164.240.157}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 20:b4:1f:1e:97:8f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c7:9e:07:9a:12:10
}</pre>




## Resolving Connectivity Issues for Wired or Wireless Networks

When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users

Irrespective of the version of OSX/macOS you are using, whether it's ```10.15.7```, ```11.0.8```, or ```12.0.9```, there are various tools available for resolving connectivity problems. However, these tools do not provide a series of correlated values over time, which is essential for effective troubleshooting. This is where automated remote troubleshooting becomes invaluable, especially for teams operating remotely and embracing the concept of Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Troubleshooting

One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless-related settings in the Command Line Interface (CLI). This command can also be configured to generate specific logs for troubleshooting purposes. Additionally, the more comprehensive ```sysdiagnose``` tool can generate a wide range of logs, although much of it is only point-in-time data in relation to wireless, similar to wdutil.

Running the command ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write the logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it interactively, you can execute ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G to point Finder to the path. However, be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
