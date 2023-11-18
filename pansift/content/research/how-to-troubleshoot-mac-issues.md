---
title: "How To Troubleshoot Mac Issues"
subtitle: "Home Stretch?"
layout: research
ip_v4_address: "202.14.206.226"
date: 2023-11-18T19:24:04+00:00
draft: false
---

## The Fundamentals of Internet Addressing

When using the Internet, individuals may have a unique Public IPv4 address, such as ```202.14.206.226```, or an IPv6 address, like ```2000:6824:3716:bf19:e519:8b7a:7343:6be4```. These addresses can be verified through [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, as well as MAC addresses like ```c6:64:82:8f:16:2e```, can be complex and error-prone, especially for those with limited technical knowledge. This method also does not provide any historical data, particularly during past difficulties.
## Navigating the World Wide Web
Accessing a web page, such as https://rau.name, initially involves connecting to a DNS server to convert the URL's host portion (rau) combined with the Top Level Domain (name) into an IP address like ```222.79.123.66```. In all web requests, your computer and browser send their type, for instance <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways
The default gateway is usually an address automatically configured through DHCP. It typically ends in .1 or .254, depending on the scope size, for example, ```192.0.0.92```. This is where your computer directs all its traffic for further routing. For detailed instructions on verifying default gateways for ```IPv6```, refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, this can be checked using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.92    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ce3b:c38:1897:9969%en0  UGcg   en0
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
domain_name_server (ip_mult): {7.179.215.160, 27.232.17.0}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c6:64:82:8f:16:2e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr cc:ff:e4:11:0c:f0
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks

When it comes to transferring data to your router, the choice of using a wired or wireless (Wi-Fi) medium at the physical and data layer can pose some challenges.
### Troubleshooting Solutions for Apple macOS / OSX Users

No matter which version of OSX/macOS you are currently running - be it 10.15.8, 11.1.6, or 12.0.5 - there are various troubleshooting tools available to help. However, these manual actions and scripts fail to provide a set of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have embraced remote work and the Work From Anywhere (WFA) concept.
#### In-Built Tools for Assistance

One particularly useful tool for OSX/macOS users is the `sudo wdutil info` command, which provides a detailed dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Moreover, the `sysdiagnose` tool offers a more comprehensive solution by generating a wide range of logs (although many are only relevant to wireless settings at a specific point in time, much like wdutil).

To run sysdiagnose in the background and have it write logs to `/var/tmp/<blah>.tar.gz`, you can use the command `sudo nohup /usr/bin/sysdiagnose -u &`. Alternatively, you can run it interactively by using `sudo /usr/bin/sysdiagnose`, although it will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to `/var/tmp` via Finder using Cmd+Shift+G. Keep in mind that the file sizes are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
