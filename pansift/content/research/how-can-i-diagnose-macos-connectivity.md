---
title: "How Can I DiagnOSe MacOS Connectivity"
subtitle: "Circle Back?"
layout: research
ip_v4_address: "207.169.140.2"
date: 2023-11-18T17:39:20+00:00
draft: false
---

## Understanding How Internet Addressing Functions

When using the Internet, you may be assigned a Public IPv4 address such as ```207.169.140.2``` or an IPv6 address, for example ```2000:6284:3fcb:9416:4679:9b84:5fe3:8ae4```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses, or even referencing MAC addresses like ```fb:6c:f5:1b:e4:e2```, can become cumbersome and error-prone, especially for individuals with limited technical knowledge. Moreover, it fails to provide any historical data, particularly in cases where previous issues have arisen.
## Navigating the Web

Accessing a webpage, such as https://conroy-dach.io, involves initially reaching out to a DNS server in order to convert the host portion (conroy-dach) in combination with the Top Level Domain (io) of the URL to an IP address, for instance ```78.222.135.137```. Whenever your computer and browser send out web requests, they include details about the type, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. It usually takes the form of a default gateway such as ```192.0.0.13``` (although they typically end in .1 or .254 depending on the scope size), and this is the point where your computer directs all of its traffic for routing purposes. For ```IPv6```, there is comprehensive information available in our blog post titled [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Mac or Linux users can check this information using the following method:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.13    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6098:912:f62f:5c1b%en0  UGcg   en0
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
domain_name_server (ip_mult): {35.45.255.2, 53.75.114.217}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr fb:6c:f5:1b:e4:e2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr db:09:ef:81:2b:29
}</pre>




## Fixing Issues with Wired and Wireless Connections

When it comes to transferring data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple's macOS / OSX Operating Systems

No matter which version of OSX/macOS you are currently using - whether it's ```10.15.6```, ```11.3.7```, or ```12.0.2``` - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes especially useful, particularly for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance

One particularly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless-related settings in the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool can be used to generate a wide array of logs, although many of them are only applicable to wireless issues, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively*, you can use the command ```sudo /usr/bin/sysdiagnose```, but be cautious of the large file sizes, roughly around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
