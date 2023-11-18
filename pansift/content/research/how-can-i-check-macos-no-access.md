---
title: "How Can I Check MacOS No-access"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "251.205.251.197"
date: 2023-11-18T17:44:39+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When you connect to the internet, your device is assigned a unique Public IPv4 address, such as ```251.205.251.197```, or an IPv6 address, like ```2000:1230:b8b5:6f29:d718:34b3:c047:a518```. You can verify this information through [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses or even referencing MAC addresses like ```4c:f3:7c:ec:29:53``` can be prone to errors and quickly become complex, especially for those unfamiliar with the technical aspects of the internet. Moreover, this method does not provide historical data, particularly for past issues.
## Navigating the World Wide Web

When you access a website like https://rau.net, your request is first sent to a DNS server to translate the host part (rau) combined with the Top Level Domain (net) into an IP address, such as ```253.145.246.53```. Each web request from your computer and browser is accompanied by its type, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

Your default gateway is typically an address automatically configured via DHCP. It usually ends in .1 or .254, depending on the scope size, and plays a crucial role as the location to which your computer forwards all its traffic for further routing. For ```IPv6```, you can refer to our in-depth guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can verify the default gateway using:

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.100.2    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4c9a:ff72:765:ff4a%en0  UGcg   en0
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
domain_name_server (ip_mult): {166.20.248.230, 148.140.246.40}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 4c:f3:7c:ec:29:53
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 35:98:38:1e:3d:bc
}</pre>




## Resolving Connectivity Issues for Wired or Wireless Networks

When it comes to transmitting data to your router, you could be utilizing a wired connection or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Irrespective of whether you are using OSX/macOS version ```10.14.7```, ```11.0.2```, or ```12.2.5```, there exists a variety of troubleshooting tools available. However, the manual actions and scripts do not provide a series of correlated values over time, making it challenging. This is where automated remote troubleshooting becomes essential, especially for teams that have embraced remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
A helpful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless networks, similar to wdutil.

To run sysdiagnose in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer an *interactive* approach (though there is minimal interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, otherwise, you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. However, be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
