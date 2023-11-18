---
title: "Understand Apple Connectivity"
subtitle: "Market Share?"
layout: research
ip_v4_address: "154.216.144.51"
date: 2023-11-18T18:44:20+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```154.216.144.51```  or an IPv6 address like ```2000:1b9f:7b01:b73e:f086:8f75:225a:c20c```. You can verify this on [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, communicating these addresses, or even recognizing MAC addresses like ```c9:f1:c0:db:09:b5```, can be prone to errors and become complex. Moreover, this method does not provide any historical data, especially pertaining to past issues.
## Process of Accessing the Internet

When attempting to access a website, such as https://pfeffer-dickinson.com, the first step involves contacting a DNS server to translate the specific host portion (pfeffer-dickinson) along with the Top Level Domain (.com) of the URL into an IP address, like ```37.160.253.84```. Your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured via DHCP. This gateway can be something like ```172.21.249.120``` (although they usually end in .1 or .254 depending on the scope size), and it is the destination where your computer sends all its traffic to be routed onwards. For ```IPv6```, detailed instructions can be found in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify this on Mac or Linux by using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.249.120    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3663:3d04:6654:8ea9%en0  UGcg   en0
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
domain_name_server (ip_mult): {203.27.209.56, 167.161.164.96}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c9:f1:c0:db:09:b5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 68:28:71:8f:e0:c4
}</pre>




## Resolve Issues with Wired or Wireless Connections
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple's macOS / OSX Systems
Regardless of whether you are running OSX/macOS version ```10.11.9```, ```11.1.8```, or ```12.3.4```, there are numerous tools available for troubleshooting. However, these manual actions and scripts do not provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Effective Built-in Scripts
One incredibly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs (although many of them are point-in-time related to wireless, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute it in the background, writing logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can use<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
