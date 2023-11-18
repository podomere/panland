---
title: "How Can I Check OSX No-access"
subtitle: "Bleeding Edge?"
layout: research
ip_v4_address: "132.23.220.92"
date: 2023-11-18T18:23:19+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you may be assigned a Public IPv4 address such as ```132.23.220.92``` or an IPv6 address like ```2000:9bfe:da64:e6c9:e8a8:1a36:8d54:2eb7```. A convenient way to verify this is by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or even referencing MAC addresses like ```52:73:ea:0f:94:87```, can become complicated for those not well-versed in technology. Furthermore, this approach does not provide any historical information, particularly when addressing past issues.
## Navigating the World Wide Web
When attempting to access a website, such as https://fisher.net, the first step is to contact a DNS server to convert the combination of the host portion (fisher) and the Top Level Domain (net) of the URL into an IP address, like ```196.137.47.30```. Every web request from your computer and web browser actually includes the type, for example, <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
Typically, your default gateway is automatically assigned through DHCP. This results in a default gateway, such as ```172.21.170.33``` (usually ending in .1 or .254 depending on the scope size), to which your computer directs all of its traffic for onward routing. For ```IPv6```, detailed instructions are available in our thorough examination of [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can refer to Mac or Linux for verification using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.170.33    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4d3b:58d4:6764:1c9%en0  UGcg   en0
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
domain_name_server (ip_mult): {130.241.57.77, 78.62.206.49}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 52:73:ea:0f:94:87
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e1:34:03:53:33:4b
}</pre>




## Repairing Network Connections

In order to transmit data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Steps for Addressing Issues on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.14.7```, ```11.6.5```, or ```12.3.6```, there are various troubleshooting tools available. However, manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes especially valuable, particularly for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilizing Pre-Installed Scripts for Assistance
A very useful tool on OSX/macOS is ```sudo wdutil info```, which delivers a dump to the CLI of current wireless related settings. This can also be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide array of logs, although much of it is only relevant to wireless at specific points in time, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively* (even though there is minimal interaction), you can execute ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
