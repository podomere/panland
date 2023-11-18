---
title: "How Do You DiagnOSe Mac Internet Connection"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "148.44.212.74"
date: 2023-11-18T19:40:10+00:00
draft: false
---

## Understanding Internet Protocol Addresses

When using the Internet, it is common to have a unique identifier known as an IP address. This can come in the form of a Public IPv4 address, such as ```148.44.212.74```, or an IPv6 address, like ```2000:de7c:8b0b:f9ef:e46e:95f2:a8ca:fc96```. You can check your IP address at [https://test-ipv6.com/](https://test-ipv6.com/). However, these addresses can be difficult for non-technical individuals to communicate effectively, and the inclusion of MAC addresses only adds to the complexity. Furthermore, historical data about previous issues is not readily available.
## Navigating the Internet

Accessing a website, such as https://lemke.co, involves the use of a DNS server to translate the URL into an IP address, such as ```126.238.81.117```. Your computer and browser also send specific information with each web request, as indicated by the user agent string: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways

The default gateway, typically obtained through automatic DHCP configuration, is a crucial component of network connectivity. Whether it is an address like ```10.171.178.200``` for IPv4 networks or a more complex setup for IPv6, the default gateway is where your computer sends all its traffic to be routed onwards. For specific troubleshooting information on IPv6 connectivity, detailed instructions are available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, Mac and Linux users can utilize specific commands to check their network configurations.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.171.178.200    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:6556:756b:97b8:d492%en0  UGcg   en0
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
domain_name_server (ip_mult): {40.87.54.123, 121.113.71.147}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 37:1c:2f:08:e4:0a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 91:87:14:04:5b:e0
}</pre>




## Fixing Connectivity Issues with Wired and Wireless Networks

When it comes to transferring data to your router, you have the option to use either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users

Regardless of whether you are using OSX/macOS versions like ```10.15.8```, ```11.4.4```, or ```12.2.2```, there are numerous troubleshooting tools available. However, these manual actions and scripts fail to provide a set of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have adopted remote work and Work From Anywhere (WFA) policies.
#### Useful Built-in Scripts for Troubleshooting

One highly useful tool for OSX/macOS users is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also be set up to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers even more comprehensive log generation capability (although most of it is related to wireless settings at a specific point in time, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there isn't much interaction), you can use the command ```sudo /usr/bin/sysdiagnose``` but be prepared for a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` and use Cmd+Shift+G to direct Finder to the path. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
