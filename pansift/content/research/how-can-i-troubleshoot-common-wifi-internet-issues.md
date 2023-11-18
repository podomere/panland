---
title: "How Can I Troubleshoot Common Wifi Internet Issues"
subtitle: "Synergy?"
layout: research
ip_v4_address: "233.229.148.232"
date: 2023-11-18T21:20:16+00:00
draft: false
---

## Mechanics of Internet Addressing

The functioning of Internet addressing is such that you are assigned a Public IPv4 address, such as ```233.229.148.232```, or an IPv6 address, such as ```2000:f904:c815:e3c7:7922:4b:e645:f9bf```. You can verify this information by going to [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or communicating these addresses to individuals who aren't tech-savvy, or even referring to MAC addresses, like ```bb:2e:bf:ee:d1:72```, can become challenging and prone to mistakes. Furthermore, this method doesn't provide any historical data, especially when past issues arise.
## Navigating the World Wide Web
In order to access a webpage like https://jacobson.net, you first connect with a DNS server to translate the host portion (jacobson) combined with the Top Level Domain (net) of the URL into an IP address, such as ```63.182.106.154```. Your computer and browser send their type with all web requests, for example: <br>
```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Predefined Gateways
The default gateway is typically an address that is automatically configured via DHCP. This address, such as ```10.31.163.253``` (although typically ending in .1 or .254 depending on the scope size), is where your computer sends all of its traffic to be routed onwards. A detailed breakdown of ```IPv6``` can be accessed in our write-up on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/); however, the verification process can be done on Mac or Linux with:

```shell
command goes here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.31.163.253    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:10c2:c65d:9b43:99e%en0  UGcg   en0
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
domain_name_server (ip_mult): {162.66.195.12, 82.143.150.237}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr bb:2e:bf:ee:d1:72
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 93:58:1b:c4:81:b3
}</pre>




## Fixing Issues with Wired and Wireless Connectivity
When it comes to sending data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX
Regardless of the version of OSX/macOS you have, whether it's ```10.11.8```, ```11.5.8```, or ```12.3.9```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that have adopted remote work and Work From Anywhere (WFA) policies.
#### Utilizing Built-in Scripts for Assistance
One valuable tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings in the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the more comprehensive ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of the information is only relevant to a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use the command ```sudo /usr/bin/sysdiagnose```, but be aware of the large file size, around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
