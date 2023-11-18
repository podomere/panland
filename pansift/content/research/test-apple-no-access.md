---
title: "Test Apple No-access"
subtitle: "Value Add?"
layout: research
ip_v4_address: "122.61.61.214"
date: 2023-11-18T18:41:07+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When utilizing the Internet, individuals may have a Public IPv4 address such as ```122.61.61.214``` or an IPv6 address like ```2000:2c7c:c1a0:53a3:3c4e:cefd:6d46:4984```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). Nevertheless, conveying these addresses to those who are not technologically inclined, or even referencing MAC addresses such as ```e0:c1:91:85:4f:d4```, can lead to errors and can become intricate. Additionally, this method does not provide historical data, particularly when past issues arose.
## Navigating the Internet
In order to access a website like https://greenfelder.org, individuals initially connect to a DNS server to convert the host portion (greenfelder) combined with the Top Level Domain (org) of the URL into an IP address such as ```184.34.8.207```. The computer and browser also transmits its type with all web requests, for example: 
```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways
The default gateway is typically an automatically configured address via DHCP. Users receive a default gateway like ```192.168.32.181``` (commonly ending in .1 or .254 depending on the scope size) and this is where the computer directs all its traffic to be routed onwards. For ```IPv6```, a comprehensive examination is available in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but it can be checked on Mac or Linux using the following command:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.32.181    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d010:ad7f:19c:a252%en0  UGcg   en0
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
domain_name_server (ip_mult): {91.142.193.87, 33.142.202.150}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e0:c1:91:85:4f:d4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 45:98:57:bc:6e:b2
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks

When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using macOS or OSX version 10.13.5, 11.5.4, or 12.3.7, there are various troubleshooting tools available. However, these tools do not provide a series of correlated values over time, making automated remote troubleshooting more beneficial, especially for teams working remotely or following a Work From Anywhere (WFA) approach.
#### Utilizing Built-in Scripts for Assistance
One useful tool for OSX/macOS users is the ```sudo wdutil info``` command, which provides current wireless settings and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can generate a wide range of logs, although many are only relevant to a particular point in time, similar to wdutil.

To run sysdiagnose in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive experience, run ```sudo /usr/bin/sysdiagnose``` and heed the privacy warning. The file sizes generated are approximately 300MB, so be mindful of storage space.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
