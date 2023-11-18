---
title: "How To Troubleshoot MacOS Connectivity"
subtitle: "Granular?"
layout: research
ip_v4_address: "117.215.73.46"
date: 2023-11-18T17:26:05+00:00
draft: false
---

## Explanation of Internet Addressing Mechanism

When using the Internet, individuals may have a unique Public IPv4 address such as ```117.215.73.46``` or the newer IPv6 address format like ```2000:d1e6:e89a:fee:5da4:879:a873:7a9f```. Verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, explicating these addresses and even referencing MAC addresses such as ```e7:7a:83:ed:b1:df``` can become complex and prone to errors. Moreover, it fails to provide any historical data, particularly related to previous issues encountered.
## Navigating the World Wide Web
Accessing a website like https://lebsack-klocko.co initially requires communication with a DNS server to convert the host portion (lebsack-klocko) combined with the Top Level Domain (co) of the URL to an IP address, for example, ```140.173.168.215```. When communicating with web servers, your computer and browser also transmit specific data such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. An example of a default gateway could be ```10.144.161.36``` (although they generally end in .1 or .254 based on size). This is where all the traffic from your computer is directed for further routing. For ```IPv6```, a detailed guide on this topic is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and verification on Mac or Linux can be done using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.144.161.36    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:43d5:4342:a02e:9b59%en0  UGcg   en0
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
domain_name_server (ip_mult): {71.144.20.190, 9.172.172.189}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e7:7a:83:ed:b1:df
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2d:66:6e:ae:12:03
}</pre>




## How to Troubleshoot Network Issues
When it comes to troubleshooting network issues, whether using a wired or wireless connection, it is important to understand the tools and methods available at the physical and data layer.
### Tips for Troubleshooting on Apple Devices
No matter which version of the Apple operating system you are running, such as 10.11.8, 11.5.8, or 12.1.9, there are various techniques for troubleshooting network problems. However, these manual methods and scripts may not provide a continuous stream of relevant data over time. This is where automated remote troubleshooting becomes valuable, particularly for teams working remotely or embracing a "Work From Anywhere" (WFA) approach.
#### Using Built-in Tools for Network Diagnostics
On OSX/macOS, the ```sudo wdutil info``` command can provide a detailed dump of current wireless settings through the command line interface. It can also be configured to generate specific logs for troubleshooting purposes. In addition, the ```sysdiagnose``` tool offers a comprehensive range of logs, although many of them are only point-in-time data in relation to wireless, similar to wdutil.

Run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background to generate logs in ```/var/tmp/<blah>.tar.gz```. For interactive use (although it is not very interactive), run ```sudo /usr/bin/sysdiagnose``` and follow the privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Keep in mind that the file size is approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
