---
title: "How Can I Understand MacOS Connectivity"
subtitle: "Let's Take This Offline?"
layout: research
ip_v4_address: "146.46.251.47"
date: 2023-11-18T17:46:58+00:00
draft: false
---

## Understanding Internet Addressing

When you connect to the Internet, you receive a Public IPv4 address such as `146.46.251.47` or an IPv6 address like `2000:fea:271:f1a9:6254:fee7:d30:80e2`. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). Translating and communicating these addresses, along with MAC addresses like `cc:77:5f:4d:55:a6`, can be challenging for those not well-versed in tech, and it fails to provide historical data.
## Navigating the World Wide Web

Accessing a webpage such as https://rolfson.name involves initially accessing a DNS server to convert the host portion (rolfson) combined with the Top Level Domain (name) of the URL to an IP address like `183.164.121.24`. Your computer and browser send their types with all web requests, for instance:
<br>`Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36`
## The Significance of Default Gateways

Generally, your default gateway is an automatically configured address through DHCP. This could be a default gateway like `10.255.70.67` (often ending in .1 or .254 based on scope size), where your computer directs all its traffic to be routed onwards. For `IPv6`, detailed instructions can be found in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.255.70.67    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:dd01:8971:a1c1:48a9%en0  UGcg   en0
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
domain_name_server (ip_mult): {158.33.184.187, 65.190.138.98}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr cc:77:5f:4d:55:a6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e5:16:9e:24:55:0e
}</pre>




## Resolve Issues with Wired or Wireless Connections
When it comes to transmitting data to your router, you might be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Devices
Regardless of whether you are running OSX/macOS version ```10.12.9```, ```11.0.7```, or ```12.1.7```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are adopting remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
On OSX/macOS, the ```sudo wdutil info``` tool is quite useful as it provides a dump of current wireless-related settings to the CLI, and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool, while perhaps more comprehensive, can be used to generate a wide range of logs, although much of it is specific to wireless and is similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```. Alternatively, for an *interactive* execution (with minimal interaction), run ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, allowing navigation to ```/var/tmp``` or using Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
