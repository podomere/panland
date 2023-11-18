---
title: "How To Support Apple Internet"
subtitle: "Infographic?"
layout: research
ip_v4_address: "36.60.119.152"
date: 2023-11-18T18:52:36+00:00
draft: false
---

## Explanation of Internet Address Structure

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```36.60.119.152```, or an IPv6 address, such as ```2000:de60:fc6b:b559:e766:6dd4:4423:e4f5```. This information can be verified on [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, as well as MAC addresses like ```c6:88:7e:a5:5b:68```, can become complex and error-prone, especially for those who are not technologically savvy. Furthermore, this approach does not provide any historical data, particularly from previous issues.
## Navigating the Internet

Accessing a website, such as https://murazik.info, requires an initial request to a DNS server in order to convert the host component (murazik) paired with the Top Level Domain (info) of the URL into an IP address, such as ```196.229.26.134```. It is worth noting that the computer and browser include specific information with each web request, for example, <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Significance of Default Gateways

The default gateway is usually an address that is automatically obtained through DHCP. This default gateway, such as ```192.0.0.88``` (although they generally end in .1 or .254 based on the size of the scope), is where the computer directs all of its traffic to be routed. A detailed guide on how to handle IPv6 connectivity is available in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but it can also be checked on Mac or Linux systems using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.88    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4db:5540:4b7d:18a%en0  UGcg   en0
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
domain_name_server (ip_mult): {227.67.61.109, 92.117.149.138}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c6:88:7e:a5:5b:68
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a8:e4:47:c1:d9:f6
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks

In the realm of physical and data layers, the utilization of either wired or wireless (Wi-Fi) mediums for transmitting data to your router is common.
### Troubleshooting Guide for Apple macOS / OSX
Regardless of the version of OSX/macOS you are operating, such as ```10.12.9```, ```11.0.7```, or ```12.0.4```, there exists a wide array of tools available for addressing connectivity problems. However, the manual procedures and scripts do not provide a comprehensive set of correlated values over an extended period. This is where automated remote troubleshooting proves to be particularly valuable, especially for organizations that have embraced remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance
A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which offers a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be employed to generate a multitude of logs, although much of the information is only relevant to a specific point in time with respect to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for the user. For an *interactive* execution (despite minimal interaction), the command ```sudo /usr/bin/sysdiagnose``` can be utilized, along with a privacy warning. When not run in the background, it should open Finder in the appropriate location, enabling the user to navigate to ```/var/tmp``` or employ Finder with Cmd+Shift+G to direct it to the specified path. It is important to note the file sizes, which are approximately 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
