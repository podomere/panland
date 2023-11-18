---
title: "Support Mac Connectivity"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "151.185.59.19"
date: 2023-11-18T19:19:14+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, your device might be assigned a Public IPv4 address such as ```151.185.59.19``` or an IPv6 address like ```2000:ef5f:4e90:bdcf:21f7:4734:b48:a748```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not familiar with technology, or even the mention of MAC addresses like ```8c:73:84:dc:f7:36```, can lead to errors and complexity. Moreover, it does not provide any historical data, particularly when issues have occurred in the past.
## Navigating the Internet
When attempting to access a webpage, such as https://anderson.name, the first step is to connect to a DNS server, which translates the host portion (anderson) in combination with the Top Level Domain (name) of the URL to an IP address like ```240.38.62.44```. Furthermore, your computer and browser include detail about their type in all web requests, for instance, <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
The default gateway is typically an address that is automatically configured through DHCP. You would receive a default gateway like ```172.25.179.73``` (usually ending in .1 or .254 based on the scope size), and this is where your computer sends all its traffic to be directed further. For ```IPv6```, a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, and the verification can be done on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.25.179.73    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5a23:de30:8e69:9d3d%en0  UGcg   en0
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
domain_name_server (ip_mult): {29.189.34.5, 106.253.99.227}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8c:73:84:dc:f7:36
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2a:2a:8c:e1:9e:c0
}</pre>




## Resolve Connection Issues for Wired and Wireless Networks
When it comes to sending data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer. Troubleshooting these connection issues is essential for ensuring smooth network operation.
### Steps to Take for Apple macOS / OSX Users
Regardless of the version of OSX or macOS you are currently using, whether it's 10.15.4, 11.5.4, or 12.1.3, there are various tools available for resolving network connectivity issues. However, these manual actions and scripts do not provide a comprehensive view of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have embraced remote work and Work From Anywhere (WFA) practices.
#### Utilize the Inbuilt Scripts for Assistance
On OSX/macOS, the ```sudo wdutil info``` tool is incredibly useful as it provides a detailed dump of current wireless settings to the command line interface (CLI). It can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive range of logs; however, much of the information is only relevant to a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive run, use ```sudo /usr/bin/sysdiagnose``` which will display a privacy warning. When not run in the background, this command should open Finder in the correct location, and you can also navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the files. Keep in mind that the file sizes are around 300MB on average.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
