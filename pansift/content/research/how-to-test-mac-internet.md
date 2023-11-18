---
title: "How To Test Mac Internet"
subtitle: "Market Share?"
layout: research
ip_v4_address: "40.220.109.206"
date: 2023-11-18T19:25:46+00:00
draft: false
---

## The Functionality of Internet Addressing

When using the internet, you are assigned a unique IP address, such as ```40.220.109.206``` for IPv4 or ```2000:1617:7ced:f45e:4693:4118:4b54:afe7``` for IPv6. The validation of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/), but communicating or referencing these addresses can be complex and prone to errors, especially for those unfamiliar with technical terminology. Furthermore, this method lacks any historical data, particularly when issues have occurred in the past.
## Navigating the Internet

Accessing a website, such as https://volkman-pagac.com, involves connecting to a DNS server to translate the host (volkman-pagac) and the Top Level Domain (com) of the URL into an IP address, like ```34.141.67.41```. Each web request sent from your computer and browser contains its type, such as: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

The default gateway is an automatically assigned address through DHCP, typically ending in .1 or .254, depending on the scope size, like ```192.168.221.59```. This is the point to which your computer sends all its traffic to be further routed. For ```IPv6```, detailed instructions on checking this on Mac or Linux can be found at: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/)
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.221.59    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8b17:1189:a300:c189%en0  UGcg   en0
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
domain_name_server (ip_mult): {219.4.99.79, 137.150.112.81}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d1:c9:e3:14:e8:d8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 22:a5:d6:eb:30:3f
}</pre>




## Diagnose and Solve Connectivity Issues, Whether Wired or Wireless
When it comes to transmitting data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layers.
### Troubleshooting Tips for Apple's macOS / OSX Platform
No matter which version of OSX/macOS you're running, whether it's ```10.15.5```, ```11.1.9```, or ```12.2.9```, there are various tools available for troubleshooting. However, manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting proves to be beneficial, particularly for teams that have embraced remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One particularly useful tool on OSX/macOS is ```sudo wdutil info```, which dumps the current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute sysdiagnose in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (despite minimal interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` by using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
