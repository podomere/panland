---
title: "Test Apple IP Settings"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "97.187.36.43"
date: 2023-11-18T18:40:53+00:00
draft: false
---

## The Function of Internet Addressing

When using the Internet, it is possible to obtain a Public IPv4 address such as ```97.187.36.43``` or an IPv6 address such as ```2000:94dc:cbf8:dc48:56d4:5ab0:1630:1a5f```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses to individuals who are not well-versed in technology, or even recite MAC addresses like ```52:89:fa:8c:6e:90```, can be prone to errors and become complex rather swiftly. Moreover, this method does not provide historical data, particularly from the time when previous issues arose.
## Navigating the Internet
In order to access a website such as https://schaefer.org, the first step is to contact a DNS server, which will convert the host portion (schaefer) combined with the Top Level Domain (org) of the URL into an IP address such as ```48.66.107.192```. When making web requests, your computer and browser actually send their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
Typically, your default gateway is an address that is automatically configured via DHCP. This results in obtaining a default gateway such as ```192.168.217.247``` (although they usually end in .1 or .254 based on the size of the scope). This is the destination where all of your computer's traffic is sent to be routed further. For a detailed examination of ```IPv6```, refer to our comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, you can also check on Mac or Linux using the following command: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.217.247    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:854e:c9fb:4fa8:29d3%en0  UGcg   en0
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
domain_name_server (ip_mult): {130.208.24.236, 13.24.145.240}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 52:89:fa:8c:6e:90
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 66:df:50:92:ba:75
}</pre>




## Resolve Issues with Wired or Wireless Connections

When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX Systems
Regardless of the version of OSX/macOS you are operating on, whether it's `10.12.5`, `11.5.2`, or `12.0.6`, there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
A highly useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, though much of it is only relevant to wireless at a specific point in time, similar to wdutil.

By running `sudo nohup /usr/bin/sysdiagnose -u &` in the background, logs will be written to `/var/tmp/<blah>.tar.gz` for you. Alternatively, you can run `sudo /usr/bin/sysdiagnose` interactively, which will provide a privacy warning and open Finder in the correct location. Just be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
