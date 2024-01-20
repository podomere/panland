---
title: "Troubleshoot Mcs No Access"
subtitle: "Give You Some Time Back?"
layout: research
ip_v4_address: "233.246.1.242"
date: 2023-11-18T21:30:25+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```233.246.1.242```, or an IPv6 address like ```2000:54fb:919b:3c7f:8604:403e:ca41:6db9```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to non-technical individuals, or even mentioning MAC addresses like ```2a:91:3f:c5:c9:d8```, can be prone to errors and can become complex quite quickly. Furthermore, this method does not provide any historical data, especially when documenting past issues.
## Navigating the World Wide Web

When accessing a website, such as https://ullrich.co, your computer initially communicates with a DNS server to translate the host portion (ullrich) combined with the Top Level Domain (co) of the URL into an IP address, such as ```56.68.146.120```. Additionally, your computer and browser automatically send their type with all web requests, for example:
```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways

Your default gateway is typically an address that is automatically configured via DHCP. This address, such as ```10.141.91.71``` (although they normally end in .1 or .254 depending on the scope size), is where your computer forwards all its traffic to be routed onwards. For ```IPv6```, you can find more detailed information at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, you can check this using:

### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.141.91.71    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3065:52e2:2af3:d2e0%en0  UGcg   en0
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
domain_name_server (ip_mult): {170.106.186.107, 2.234.211.150}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2a:91:3f:c5:c9:d8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 88:41:7c:0b:d0:e0
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Strategies for Apple macOS / OSX Users

No matter which version of OSX/macOS you're running - whether it's 10.11.2, 11.6.5 or 12.3.6 - there are various troubleshooting tools available. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilizing In-Built Scripts for Assistance

One particularly useful tool on OSX/macOS is "sudo wdutil info," which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Moreover, the "sysdiagnose" tool offers a more comprehensive approach, creating a wide range of logs (though much of it is only relevant to wireless at a specific moment, similar to wdutil).

To run it in the background and generate logs to "/var/tmp/<blah>.tar.gz," use the command "sudo nohup /usr/bin/sysdiagnose -u &." If you prefer to run it interactively, you can use "sudo /usr/bin/sysdiagnose," which will provide a privacy warning. Running it without background execution should open Finder in the correct location, or you can navigate to "/var/tmp" manually or using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
