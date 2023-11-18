---
title: "How To Check MacOS Internet Connection"
subtitle: "Gamification?"
layout: research
ip_v4_address: "237.173.150.227"
date: 2023-11-18T17:29:17+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you are assigned a Public IPv4 address, such as ```237.173.150.227```, or an IPv6 address, such as ```2000:f39e:7b35:ea3:9314:f005:f3d9:ac22```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, conveying these addresses, or even referencing MAC addresses like ```32:1b:ce:8a:ee:d5```, can be prone to mistakes and can become complex quickly. Moreover, this method does not provide any historical data, particularly when dealing with past issues.
## Navigating the World Wide Web

When attempting to access a webpage, such as https://schulist.com, your computer initially reaches out to a DNS server to convert the host portion (schulist) along with the Top Level Domain (com) of the URL into an IP address like ```129.182.73.226```. Furthermore, your computer and browser disclose its type with every web request, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically assigned address via DHCP. You are provided with a default gateway, such as ```172.20.112.200``` (although they generally end in .1 or .254 based on the scope size), and this is where your computer directs all of its traffic to be routed further. For ```IPv6```, a more detailed explanation is available in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.112.200    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5030:7a6b:2fc0:cd93%en0  UGcg   en0
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
domain_name_server (ip_mult): {56.237.72.107, 209.225.22.224}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 32:1b:ce:8a:ee:d5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9e:23:fa:4b:ef:d5
}</pre>




## Addressing Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you might be utilizing either a wired or a wireless (Wi-Fi) medium operating at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Irrespective of the version of OSX/macOS you are using, whether it's ```10.13.4```, ```11.3.4```, or ```12.2.8```, there are a variety of tools available for fixing connectivity issues. However, the manual actions and scripts only offer fragmented data and do not provide a comprehensive overview. This is where automated remote troubleshooting comes in, especially for teams following a remote work setup and embracing the Work From Anywhere (WFA) approach.
#### Utilizing In-Built Scripts for Assistance
An extremely valuable tool for troubleshooting on OSX/macOS is ```sudo wdutil info```, which presents a detailed dump of the current wireless settings through the CLI, and can also be configured to generate specific logs for resolving issues. Furthermore, for a more comprehensive approach, the ```sysdiagnose``` tool can be used to generate a wide range of logs (although these are mostly related to wireless and are only reflective of a specific point in time, much like wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and produce logs in ```/var/tmp/<blah>.tar.gz``` for analysis. If you prefer an *interactive* run (even though there isn't much interactivity involved), you can execute ```sudo /usr/bin/sysdiagnose``` and a privacy warning will be displayed. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G. It's important to be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
