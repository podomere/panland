---
title: "How To Test OSX Internet Connection"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "61.238.30.153"
date: 2023-11-18T18:12:22+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals may receive different types of IP addresses. These can include a Public IPv4 address such as ```61.238.30.153``` or an IPv6 address like ```2000:a5df:a12:224d:4783:9e8:418d:7a7c```. The verification of these addresses can be checked at [https://test-ipv6.com/](https://test-ipv6.com/). This process can be challenging for non-technical individuals and may lead to errors when trying to communicate or recall these addresses, or even when dealing with MAC addresses like ```23:71:6a:07:40:e1```. Furthermore, this method is not suitable for accessing historical data, especially in the case of past problems.
## Navigating the Internet

When attempting to reach a website such as https://hane-okon.org, the initial step involves accessing a DNS server to convert the host section (hane-okon) combined with the Top Level Domain (org) of the URL into an IP address, for instance ```67.95.119.214```. With every web request, your computer and browser transmit their type, as evidenced by <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways

The default gateway typically receives an automatically administered address through DHCP. This address, such as ```172.20.162.244``` (although they typically end in .1 or .254 depending on the scope size), is where a computer directs all its traffic to be routed further. For information on how to address ```IPv6``` connectivity issues, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, the status of default gateways can be verified with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.162.244    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3a2e:e2cc:95c6:27fb%en0  UGcg   en0
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
domain_name_server (ip_mult): {106.142.222.185, 81.180.128.170}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 23:71:6a:07:40:e1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 3c:1c:f0:59:33:9b
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may choose to use either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Systems
Regardless of which version of OSX/macOS you are running - be it 10.15.2, 11.3.1, or 12.1.5 - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time, making it essential to consider the benefits of automated remote troubleshooting, particularly for teams that have adopted remote work and Work From Anywhere (WFA) policies.
#### Effective Built-in Scripts
One extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a comprehensive dump of current wireless settings to the CLI and can also generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although most of the information is only relevant at a specific point in time, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, or to run it interactively, you can utilize ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. It's important to note that the file sizes can reach approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
