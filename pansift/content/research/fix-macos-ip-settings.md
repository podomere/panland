---
title: "Fix MacOS IP Settings"
subtitle: "Button Up The Loose Ends?"
layout: research
ip_v4_address: "63.132.202.214"
date: 2023-11-18T22:21:28+00:00
draft: false
---

## The Fundamentals of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```63.132.202.214```, or an IPv6 address, like ```2000:3b1e:3ae5:981c:60a9:2078:f09b:dca9```. To verify your address, visit [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not tech-savvy, or even sharing MAC addresses, such as ```33:73:ba:f6:e0:52```, can be prone to errors and quickly become complex. Moreover, these addresses do not provide any historical data, particularly from past issues.
## How Web Access Works and the Process of Lookups

When trying to access a website, like https://cormier.net, you first connect to a DNS server to translate the host portion (cormier) combined with the Top Level Domain (net) of the URL to an IP address, such as ```226.165.188.15```. With each web request, your computer and browser transmit their type, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## Understanding the Role of Default Gateways

The default gateway is typically an address that is automatically configured via DHCP. You will receive a default gateway, like ```192.168.232.67``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer sends all of its traffic to be routed onward. For a deeper understanding of IPv6 connectivity, you can refer to our blog on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can check this with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.232.67    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:336a:a072:b852:b7b1%en0  UGcg   en0
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
domain_name_server (ip_mult): {211.123.104.35, 253.169.58.207}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 33:73:ba:f6:e0:52
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2c:a7:04:e2:2d:db
}</pre>




## Fixing Wired and Wireless Connectivity Issues
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Problems on Apple macOS / OSX
Regardless of the version of OSX/macOS you are running, whether it's ```10.13.9```, ```11.0.4```, or ```12.3.1```, there are various troubleshooting tools available. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA).

  #### Utilizing Built-in Scripts and Commands
  A very useful tool on OSX/macOS is ```sudo wdutil info```, which dumps current wireless related settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time in relation to wireless, similar to wdutil.

  Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. Alternatively, you can run it *interactively* (although there is not much interaction) by executing ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G. However, be aware of the file sizes, which are approximately 300MB.
## Useful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
