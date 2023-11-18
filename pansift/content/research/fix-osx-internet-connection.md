---
title: "Fix OSX Internet Connection"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "66.234.28.217"
date: 2023-11-18T17:58:41+00:00
draft: false
---

## The Fundamentals of Internet Addressing

In the realm of the Internet, individuals may possess a Public IPv4 address, such as ```66.234.28.217```, or an IPv6 address like ```2000:ca31:c782:76e8:b6c9:b236:725b:e0ba```. This information can be confirmed at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying or referencing these addresses and even MAC addresses like ```5b:15:bc:de:11:93``` can pose challenges for those not well-versed in technology, and the situation can become complex rather quickly. Moreover, this method does not provide historical data, particularly from previous occurrences of issues.
## Navigating the World Wide Web

Accessing a webpage, such as https://kuvalis.io, entails initially reaching out to a DNS server in order to translate the host portion (kuvalis) in combination with the Top Level Domain (io) of the URL into an IP address (e.g., ```201.16.62.222```). It is worth noting that a computer and browser disclose their type with all web requests, for instance:
```html
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A
```
## Understanding the Significance of Default Gateways

Typically, a default gateway is automatically configured via DHCP. A default gateway, such as ```172.31.47.217``` (usually ending in .1 or .254 depending on the scope size), is where a computer directs all its traffic to be routed onwards. Visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) for an in-depth analysis on ```IPv6```, or refer to the following command for checking on Mac or Linux:
```markdown
ifconfig ï»¿| grep -B 6 -m 1 "inet6 addr:"
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.31.47.217    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2cec:a120:9b9b:1fac%en0  UGcg   en0
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
domain_name_server (ip_mult): {142.26.115.213, 53.187.192.228}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5b:15:bc:de:11:93
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d9:e1:f6:41:37:4b
}</pre>




## Fixing Issues with Wired or Wireless Networks

When it comes to sending data to your router, you might be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple Operating Systems
Regardless of whether you're using OSX/macOS versions such as ```10.12.7```, ```11.0.9```, or ```12.2.7```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that follow a remote work or Work From Anywhere (WFA) approach.
#### Effective Built-in Scripts
A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which offers a dump of current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to generate a comprehensive range of logs related to wireless issues, although many are only point-in-time observations similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs at ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (although there isn't much interaction), you can execute ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Just keep in mind that the file sizes are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
