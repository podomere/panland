---
title: "How Do You Test Apple Internet"
subtitle: "T-shirt Sizes?"
layout: research
ip_v4_address: "170.20.81.26"
date: 2023-11-18T19:07:44+00:00
draft: false
---

## Understanding Internet Addressing
When using the internet, an individual may be assigned a Public IPv4 address like ```170.20.81.26``` or an IPv6 address like ```2000:d56d:2612:20d4:1272:59:a8f7:f3a7```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those who are not tech-savvy, or even referencing MAC addresses like ```6a:67:48:8a:b4:70```, can be prone to errors and become complex. Furthermore, historical data is not provided, particularly related to previous issues.
## Navigating the World Wide Web
When attempting to access a website such as https://ernser-ferry.info, the process begins with a request to a DNS server in order to convert the host name (ernser-ferry) combined with the Top Level Domain (info) of the URL into an IP address, such as ```148.195.74.191```. Interestingly, all web requests from a computer and browser include a type, for example <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP, such as ```192.0.0.59``` (usually ending in .1 or .254 depending on the scope size). This is where a computer forwards all of its traffic to be routed. For ```IPv6```, detailed instructions are available in our blog post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, it's possible to verify this using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.59    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e877:7e25:e78d:2e63%en0  UGcg   en0
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
domain_name_server (ip_mult): {253.189.124.33, 96.235.7.57}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 6a:67:48:8a:b4:70
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 0b:49:ae:0b:16:2b
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to sending data to your router, you might be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Troubleshooting
Regardless of whether you are using OSX or macOS version ```10.14.3```, ```11.3.5```, or ```12.3.3```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Pre-installed Scripts for Assistance
A useful tool for OSX/macOS is ```sudo wdutil info```, which provides a dump to the CLI of current wireless related settings and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a particular point in time, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, it will run in the background and write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (even though there is not much interaction), you can use<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to navigate to the path. Keep in mind that the file sizes are approximately 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
