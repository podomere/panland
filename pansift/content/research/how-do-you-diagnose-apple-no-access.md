---
title: "How Do You DiagnOSe Apple No-access"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "145.178.180.162"
date: 2023-11-18T19:05:49+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, individuals may have a Public IPv4 address, such as ```145.178.180.162```, or an IPv6 address, like ```2000:1e8e:a7ab:700b:68af:5c49:ddcc:7003```. The verification of such addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, including the MAC addresses, such as ```9c:63:ce:39:23:58```, to non-technical individuals is prone to errors and can become complex. Moreover, this method does not provide historical data, especially for past issues.
## Navigating the World Wide Web

When accessing a webpage, such as https://kuhlman.com, an initial step is to communicate with a DNS server. This server translates the host portion, “kuhlman”, and the Top Level Domain, “com”, of the URL into an IP address, like ```154.160.161.212```. Furthermore, every web request from a computer and browser includes its type, for instance: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Significance of Default Gateways

Typically, the default gateway is an automatically configured address obtained via DHCP. It is usually an address that ends in .1 or .254, depending on the scope size, such as ```192.0.0.237```. This is the central point where the computer directs all its traffic for further routing. To delve deeper into setting up default gateways for ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, on Mac or Linux, the command for checking this is:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.237    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c0cc:3642:4140:88c1%en0  UGcg   en0
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
domain_name_server (ip_mult): {66.69.205.67, 232.198.136.172}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9c:63:ce:39:23:58
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 33:a9:02:7b:54:6f
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Problems on Apple macOS / OSX
Irrespective of the version of OSX/macOS you are using, whether it's ```10.14.8```, ```11.0.7```, or ```12.1.3```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a continuous set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have embraced remote work and the Work From Anywhere (WFA) concept.
#### Useful Built-in Scripts
One highly effective tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings through the command line interface. It can also be configured to generate specific logs for troubleshooting purposes. In addition, the ```sysdiagnose``` tool, which offers a more comprehensive range of logs (although many are point-in-time only in relation to wireless, similar to wdutil), can be used.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background, writing logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* (although limited interaction) experience, you can run ```sudo /usr/bin/sysdiagnose```, which comes with a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which can be around 300MB or thereabouts.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
