---
title: "How Can I Understand OSX IP Settings"
subtitle: "Streamline?"
layout: research
ip_v4_address: "139.99.200.92"
date: 2023-11-18T18:25:52+00:00
draft: false
---

## The Functioning of Internet Addressing 

When connecting to the Internet, you will receive a Public IPv4 address, such as ```139.99.200.92```, or an IPv6 address, such as ```2000:2942:4e18:b046:f6d0:b59:8928:d371```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses or MAC addresses, like ```fb:e3:f2:d0:78:09```, can be prone to errors and can become complex quickly. Moreover, this does not provide any historical data, especially from previous issues.
## Navigating the World Wide Web

To access a webpage, such as https://keebler.org, you initially contact a DNS server to convert the host name (keebler) combined with the Top Level Domain (org) of the URL into an IP address, like ```237.17.169.201```. When making web requests, your computer and browser actually send their type, for example <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. You receive a default gateway, such as ```172.26.87.98``` (though they usually end in .1 or .254 depending on the scope size), and this is where your computer routes all its traffic. For IPv6, you can refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for a detailed explanation, or check on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.26.87.98    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e0b9:f44e:adc2:31db%en0  UGcg   en0
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
domain_name_server (ip_mult): {203.67.56.216, 107.207.79.42}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr fb:e3:f2:d0:78:09
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr be:4b:75:c5:d0:87
}</pre>




## Solutions for Addressing Wired and Wireless Connectivity Issues

When it comes to sending data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Troubleshooting on Apple macOS / OSX Platforms
Regardless of the version of OSX or macOS you are using, such as ```10.15.2```, ```11.4.5```, or ```12.2.2```, there are various troubleshooting tools available. However, relying solely on manual actions and scripts may not provide a comprehensive view of correlated values over time. This is where the role of automated remote troubleshooting becomes crucial, especially for teams that have adopted the concept of remote work and Work From Anywhere (WFA).
#### Leveraging Built-in Scripts for Assistance
One valuable tool on OSX/macOS is ```sudo wdutil info```, which provides a comprehensive dump of current wireless settings to the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool offers a more extensive range of logs, although it primarily captures point-in-time data related to wireless settings, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively*, you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When running it in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
