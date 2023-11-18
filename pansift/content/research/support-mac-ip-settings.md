---
title: "Support Mac IP Settings"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "162.215.198.164"
date: 2023-11-18T19:19:52+00:00
draft: false
---

## Explaining Internet Addressing

When using the Internet, you're assigned a Public IPv4 or IPv6 address, such as ```162.215.198.164``` or ```2000:eb44:9fd5:3a4a:a400:ceb9:5607:2484```. You can verify these addresses at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, especially for those not well-versed in technology, and even referencing MAC addresses like ```c7:58:b8:5c:6c:b3```, can be prone to errors and become complex quickly. Additionally, this method does not provide any historical data, particularly for past issues.
## Navigating the World Wide Web

In order to access a website such as https://mann.io, your computer first contacts a DNS server to convert the host portion (mann) combined with the Top Level Domain (io) of the URL into an IP address, like ```92.22.156.177```. Your computer and browser also include their type in all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways

The default gateway is usually an address that is automatically configured via DHCP. This address, such as ```10.16.68.151``` (although it typically ends in .1 or .254 depending on the scope size), is where your computer sends all its traffic to be routed onwards. For ```IPv6```, you can find a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and on Mac or Linux you can check with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.16.68.151    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2f6e:642c:4807:a800%en0  UGcg   en0
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
domain_name_server (ip_mult): {168.217.92.216, 88.255.149.163}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c7:58:b8:5c:6c:b3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 25:38:f0:81:dd:01
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Network
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Problems on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.12.8```, ```11.5.5```, or ```12.0.4```, there are multiple troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes beneficial, especially for teams that are involved in remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools
One extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is related to wireless only and is not continuous like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute it in the background and write logs to ```/var/tmp/<blah>.tar.gz```. For interactive use, you can run ```sudo /usr/bin/sysdiagnose```, but be mindful of the large file sizes, around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
