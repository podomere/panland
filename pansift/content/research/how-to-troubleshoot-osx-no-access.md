---
title: "How To Troubleshoot OSX No-access"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "226.39.202.58"
date: 2023-11-18T18:11:26+00:00
draft: false
---

## The Fundamentals of Internet Addressing

When using the Internet, individuals may have a unique Public IPv4 address such as ```226.39.202.58``` or an IPv6 address like ```2000:e783:20bc:2856:3382:b622:f3d1:60d2```. We can verify this using the tool [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, conveying these addresses or even mentioning MAC addresses such as ```89:89:e8:e6:82:c1``` can be prone to errors and become complicated quickly. Furthermore, this method does not provide any historical data, especially from previous incidents.
## Navigating the Internet

When trying to access a website like https://witting-spinka.co, the first step is to connect to a DNS server to convert the host portion (witting-spinka) combined with the Top Level Domain (co) of the URL into an IP address like ```38.31.119.167```. With every web request, your computer and browser also send its type, such as <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Understanding Default Gateways

The default gateway is typically an automatically configured address through DHCP. You obtain a default gateway like ```192.168.85.75``` (although they commonly end in .1 or .254, depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, there is an in-depth guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) although you can also check on Mac or Linux by: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.85.75    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d4be:b819:97fe:cba7%en0  UGcg   en0
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
domain_name_server (ip_mult): {4.213.175.102, 254.139.172.252}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 89:89:e8:e6:82:c1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e2:a0:56:8d:f5:d0
}</pre>




## Resolving Issues with Wired and Wireless Connections

When dealing with the physical and data layer, it's important to keep in mind the various troubleshooting methods for both wired and wireless (Wi-Fi) mediums used to transmit data to the router.
### Strategies for Apple macOS / OSX Users
Regardless of the OSX/macOS version you're operating on, whether it's ```10.15.5```, ```11.5.7```, or ```12.3.9```, there are numerous tools available for troubleshooting. However, these manual actions and scripts fall short when it comes to providing a series of correlated values over time. This is where automated remote troubleshooting becomes especially valuable, particularly for teams engaged in remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
A useful built-in tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings via the CLI, and can also be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs, although much of the data is only relevant to wireless networks, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. For an *interactive* experience (although there isn't much interaction), you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes will be around 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
