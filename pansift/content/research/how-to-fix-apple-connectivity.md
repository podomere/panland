---
title: "How To Fix Apple Connectivity"
subtitle: "Plug And Chug?"
layout: research
ip_v4_address: "141.40.3.80"
date: 2023-11-18T18:45:40+00:00
draft: false
---

## Understanding Internet Addressing

When it comes to the Internet, you may be assigned a Public IPv4 address such as ```141.40.3.80``` or an IPv6 address like ```2000:4b1d:13d:94df:3edd:ef4d:c7e1:dd01```. You can verify this through [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses to those who are not tech-savvy, or even referencing MAC addresses like ```0a:67:7d:8e:53:ac```, can lead to errors and confusion. Moreover, it does not provide any historical data, especially when dealing with past issues.
## Navigating the Web

In order to access a website such as https://jast-turcotte.net, your computer first contacts a DNS server to translate the host portion (jast-turcotte) along with the Top Level Domain (net) of the URL into an IP address like ```198.166.167.95```. Additionally, your computer and browser include its type in all web requests, for example:
```html
Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko
```
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically configured address through DHCP. This default gateway could be something like ```172.30.91.157``` (although they generally end in .1 or .254 based on the scope size) and this is where your computer sends all of its traffic to be routed further. For ```IPv6```, you can find more detailed information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). You can also verify this on Mac or Linux using the following command:
```html
ifconfig```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.30.91.157    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   dd2e:54:47f6:b31d:127:3008:e07:c743%en0  UGcg   en0
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
domain_name_server (ip_mult): {130.39.190.119, 79.65.135.147}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0a:67:7d:8e:53:ac
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a8:82:44:58:be:4c
}</pre>




## Resolve Issues with Wired and Wireless Connections
Whether you are using a wired Ethernet connection or a wireless (Wi-Fi) medium at the physical and data layer to transmit data to your router, troubleshooting issues can arise.
### Tips for Resolving Problems on Apple macOS / OSX
No matter which version of OSX or macOS you are using, whether it's ```10.12.6```, ```11.1.1```, or ```12.3.5```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes useful, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools for Troubleshooting
One useful tool on OSX and macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, logs will be written to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
