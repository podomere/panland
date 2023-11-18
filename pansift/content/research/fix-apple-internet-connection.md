---
title: "Fix Apple Internet Connection"
subtitle: "Synergy?"
layout: research
ip_v4_address: "8.191.15.252"
date: 2023-11-18T18:36:38+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, you will be assigned either a Public IPv4 address, such as ```8.191.15.252```, or an IPv6 address, such as ```2000:7ed4:4219:2d11:f00d:fe2a:5bb4:c2ae```. This information can be verified through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying and understanding these addresses, as well as MAC addresses like ```8f:96:a4:a8:7f:b0```, can become intricate and prone to errors. Moreover, these details do not provide any historical data, especially during previous issues.
## Navigating through the Web

To access a webpage, for example, https://greenfelder.com, your computer first communicates with a DNS server to convert the host portion (greenfelder) combined with the Top Level Domain (com) of the URL into an IP address, such as ```247.172.81.27```. In addition, your computer and browser send their type with every web request, such as ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```.
## Significance of Default Gateways

Typically, your default gateway is an automatically assigned address through DHCP, like ```10.19.67.157``` (often ending in .1 or .254 based on scope size), and it serves as the routing point for all your computer's outgoing traffic. For ```IPv6```, detailed instructions can be found in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify this on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.19.67.157    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3b3a:d2da:d30a:8dd5%en0  UGcg   en0
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
domain_name_server (ip_mult): {167.204.76.216, 83.170.112.163}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8f:96:a4:a8:7f:b0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f3:50:b1:b3:32:40
}</pre>




## Diagnose and Resolve Issues with Wired and Wireless Connections
When sending data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Troubleshooting Methods for Apple macOS / OSX Users
Regardless of your current OSX/macOS version, whether it's ```10.12.1```, ```11.3.9```, or ```12.1.3```, there exists a variety of tools for troubleshooting. However, these manual actions and scripts fail to provide a set of correlated values over time, leading to the significance of automated remote troubleshooting, especially for teams engaging in remote work and Work From Anywhere (WFA).
#### Utilize the Built-in Scripts for Assistance
A valuable tool on OSX/macOS is the ```sudo wdutil info```, which provides a comprehensive dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating various logs, although most of it is only relevant in relation to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, albeit with minimal interaction, you can execute ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. Not running it in the background should open Finder in the correct location, and you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Keep in mind the file sizes, which will be around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
