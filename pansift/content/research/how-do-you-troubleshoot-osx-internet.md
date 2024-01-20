---
title: "How Do You Troubleshoot OSX Internet"
subtitle: "Rubber Meets The Road?"
layout: research
ip_v4_address: "126.118.137.180"
date: 2023-11-18T18:29:26+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 or IPv6 address, such as ```126.118.137.180``` or ```2000:59f:90b1:1bc4:adcb:6473:995f:4d5d```. You can verify your address using [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even MAC addresses like ```89:0b:d1:b6:6f:fb``` to those who are not tech-savvy can be prone to errors and quickly become complex. Furthermore, this information does not provide any historical data, especially when previous issues occurred.
## Navigating the World Wide Web

When accessing a website like https://collier.io, your computer first contacts a DNS server to translate the host portion (collier) and the Top Level Domain (io) of the URL into an IP address, such as ```126.93.88.196```. Your computer and browser also include its type with all web requests, for example:<br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```.
## The Significance of Default Gateways

Your default gateway is typically assigned automatically through DHCP, resulting in an address such as ```192.0.0.20``` (although they usually end in .1 or .254 depending on the scope size). This is where your computer directs all its traffic to be routed onwards. For more information on ```IPv6```, you can refer to our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). If you are using Mac or Linux, you can check the default gateway with:

### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.20    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b5d3:e8c0:268:1060%en0  UGcg   en0
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
domain_name_server (ip_mult): {122.28.227.220, 240.29.60.191}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 89:0b:d1:b6:6f:fb
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ea:59:1e:4d:78:e6
}</pre>




## Troubleshooting Connectivity Issues on Apple Operating Systems
When it comes to sending data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Effective Solutions for OSX and macOS
Regardless of the version of OSX/macOS you have, whether it's ```10.13.3```, ```11.5.3```, or ```12.3.2```, there are multiple tools available for troubleshooting. However, these tools only offer isolated values and do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that support remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools
One particularly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI. This tool can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although some are only point-in-time related to wireless, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* run (although there is not much interaction), use ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
