---
title: "How Do You Fix Mac No-access"
subtitle: "Deep Dive?"
layout: research
ip_v4_address: "170.116.221.16"
date: 2023-11-18T19:39:23+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals may be assigned either a Public IPv4 address, such as ```170.116.221.16```, or an IPv6 address like ```2000:9af4:7b9f:9e6d:3406:7f33:8c28:9db1```. Verification of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those without technical expertise, conveying and handling these addresses can quickly become complicated and prone to errors. Furthermore, these addresses do not provide any historical data, particularly from previous incidents.
## Navigating the Internet
In order to reach a website like https://schmidt.org, the first step is to access a DNS server to convert the host part (schmidt) combined with the Top Level Domain (org) of the URL into an IP address, such as ```241.43.227.221```. When making web requests, the type of computer and browser are included, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```.
## The Significance of Default Gateways
The default gateway is typically an address that is automatically configured through DHCP. A default gateway, such as ```192.0.0.40``` (although typically ending in .1 or .254 depending on the scope size), is where the computer sends all of its traffic to be routed. For ```IPv6```, a thorough explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, the gateway can be checked with: 
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.40    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f14b:c5b5:9668:c9b7%en0  UGcg   en0
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
domain_name_server (ip_mult): {77.120.13.110, 154.218.226.76}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 69:f6:59:49:f1:a6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 2b:d3:5f:e0:81:58
}</pre>




## Resolving Issues with Wired and Wireless Connections
When transmitting data to your router, it's essential to troubleshoot any issues that may arise at the physical and data layer, whether you're using a wired or wireless (Wi-Fi) medium.
### Solutions for Apple macOS / OSX Users
Regardless of whether you are using ```10.12.6```, ```11.6.7```, or ```12.1.1```, there are various tools available for troubleshooting on your Apple macOS / OSX system. However, manually executing these actions and scripts does not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that are engaged in remote work and Work From Anywhere (WFA).
#### Leveraging Built-in Scripts for Assistance
A useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings in the CLI and can also be configured to generate specific logs for troubleshooting. Another, more comprehensive tool is the ```sysdiagnose``` tool, which can generate a wide range of logs related to wireless (although many are point-in-time logs, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz```. For those who prefer to run it *interactively*, running ```sudo /usr/bin/sysdiagnose``` will prompt a privacy warning and open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
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
