---
title: "How Do You Support MacOS Connectivity"
subtitle: "Heads Down?"
layout: research
ip_v4_address: "82.171.97.84"
date: 2023-11-18T17:55:34+00:00
draft: false
---

## Understanding How Internet Addresses Function

The Internet allows for the allocation of Public IPv4 addresses (e.g. ```82.171.97.84```) and IPv6 addresses (e.g. ```2000:2eb8:cba0:b828:3e3c:1bf1:e6c7:8b66```). Verification of these addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals without a technical background, communicating and utilizing these addresses, in addition to calling out MAC addresses like ```39:a0:2a:24:8f:2b```, can quickly become convoluted and susceptible to errors. Moreover, this approach does not provide any historical data, particularly regarding past issues.
## The Process of Navigating the World Wide Web

When attempting to access a website such as https://schumm.com, the first step involves connecting to a DNS server in order to translate the host portion (schumm) in conjunction with the Top Level Domain (com) of the URL into an IP address such as ```26.75.238.255```. Each web request originating from your computer and browser includes information about its type, for example:
<br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways
The default gateway is typically an automatically configured address obtained through DHCP, such as ```192.0.0.108``` (although they usually end in .1 or .254 depending on the scope size). This address is where your computer directs all of its traffic to be routed onwards. For a more in-depth exploration of default gateways for IPv6, visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, users can verify this on Mac or Linux systems by:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.108    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f511:7608:8c65:ac90%en0  UGcg   en0
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
domain_name_server (ip_mult): {223.68.0.40, 31.55.1.22}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 39:a0:2a:24:8f:2b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 37:93:7c:16:3a:8a
}</pre>




## Tips for Resolving Wired and Wireless Connectivity Issues
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Actions to Take on Apple macOS / OSX
No matter which version of OSX/macOS you are currently running, whether it's ```10.11.1```, ```11.5.5```, or ```12.3.6```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a continuous set of correlated values over time. This is where automated remote troubleshooting becomes beneficial, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Default Scripts That Might Be Useful
A very useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of them are only relevant to wireless settings, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, you can execute it in the background and it will write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (even though there is not much interaction), you can run ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to navigate to the path. Just keep in mind that the file sizes will be approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
