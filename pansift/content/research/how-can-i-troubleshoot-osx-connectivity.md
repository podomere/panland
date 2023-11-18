---
title: "How Can I Troubleshoot OSX Connectivity"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "175.69.172.81"
date: 2023-11-18T18:19:46+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned either a Public IPv4 address, such as ```175.69.172.81```, or an IPv6 address, like ```2000:428b:fee9:bfdd:43a:4005:2f5e:f25a```. You can verify this using the tool available at [https://test-ipv6.com/](https://test-ipv6.com/). However, relaying these addresses, including MAC addresses like ```79:ef:41:0b:5a:bc```, to individuals who are not tech-savvy can lead to errors and confusion. Furthermore, this approach does not provide any historical data (especially for past issues).
## Navigating the World Wide Web
When accessing a website, such as https://hintz-koelpin.io, the first step involves contacting a DNS server to convert the host portion (hintz-koelpin) and the Top Level Domain (io) of the URL into an IP address, such as ```149.152.100.162```. Moreover, your computer and browser include its type in all web requests for example, <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Significance of Default Gateways
The default gateway is typically an address automatically configured through DHCP. This default gateway, such as ```192.168.57.200``` (often ending in .1 or .254 depending on the scope size), is where your computer directs all its traffic to be routed. For ```IPv6```, more information can be found in the in-depth guide [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, on Mac or Linux, you can check this using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.57.200    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b41b:b9cf:627c:fe02%en0  UGcg   en0
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
domain_name_server (ip_mult): {200.148.5.95, 67.198.94.250}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 79:ef:41:0b:5a:bc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b3:c1:76:e9:1c:76
}</pre>




## Resolve Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
No matter if you are using OSX/macOS versions like ```10.15.1```, ```11.0.4```, or ```12.1.3```, there are various tools available for resolving connectivity issues. However, these manual procedures and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that are actively embracing remote work and Work From Anywhere (WFA).
#### Pre-installed Tools for Assistance
One extremely beneficial tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings to the CLI and can also be set up to generate specific logs for troubleshooting. Additionally, for a more comprehensive approach, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is relevant to wireless settings only, similar to wdutil.

To run it in the background and have logs written to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* mode, which doesn't require much interaction, you can run  ```sudo /usr/bin/sysdiagnose```, noting that it will prompt a privacy warning. If not run in the background, it will open Finder in the correct location or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to navigate to the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
