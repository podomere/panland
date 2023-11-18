---
title: "How To Understand OSX Issues"
subtitle: "T-shirt Sizes?"
layout: research
ip_v4_address: "109.173.70.63"
date: 2023-11-18T18:15:36+00:00
draft: false
---

## Understanding How Internet Address Allocation Functions

When using the Internet, individuals are assigned a Public IPv4 code such as ```109.173.70.63``` or an IPv6 code like ```2000:fc5d:9269:cb77:f935:b87f:aa98:900f```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). Nevertheless, the process of conveying these codes to non-technical individuals, or even referencing MAC addresses like ```c2:2b:be:07:75:2e```, is prone to mistakes and becomes complex rapidly. Furthermore, this method does not offer any historical data (particularly pertaining to previous issues).
## Navigating the World Wide Web
In order to access a website such as https://senger-vandervort.org, the user initially contacts a DNS server to convert the host segment (senger-vandervort) in combination with the URL's Top Level Domain (org) into an IP code like ```210.5.201.24```. It's important to note that the computer and browser transmit their type alongside all web requests e.g. <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Recognizing the Significance of Standard Gateways
Ordinarily, the default gateway is an address that is automatically configured via DHCP. The default gateway comes in the form of ```172.21.35.205``` (although typically ending in .1 or .254 based on the scale) and this is where the user's computer directs all traffic to be passed on. For ```IPv6```, an in-depth explanation is provided in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while Mac or Linux users can verify this by using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.35.205    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:cb03:97df:ade6:152e%en0  UGcg   en0
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
domain_name_server (ip_mult): {43.61.32.44, 17.215.239.108}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c2:2b:be:07:75:2e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 1a:a8:bc:43:d3:ac
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks

When transmitting data to your router, you may use either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple's macOS

Regardless of whether you are using OSX/macOS version ```10.14.6```, ```11.3.6```, or ```12.2.6```, there are various troubleshooting tools available. However, the manual actions and scripts may not provide a series of correlated values over time. This is where automated remote troubleshooting becomes especially valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Using Built-in Scripts for Assistance

One useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the Command Line Interface (CLI) and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of them are only point-in-time in relation to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* mode, run ```sudo /usr/bin/sysdiagnose``` and follow the privacy warning. When not run in the background, it should open Finder in the correct location, but you can also navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Just be cautious of the file sizes, which are approximately 300MB.
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
