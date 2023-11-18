---
title: "Test MacOS No-access"
subtitle: "Granular?"
layout: research
ip_v4_address: "199.246.95.92"
date: 2023-11-18T17:18:45+00:00
draft: false
---

## Understanding the Mechanism of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```199.246.95.92```, or an IPv6 address, such as ```2000:b964:13d2:1da4:afc5:cf8e:f8b8:f700```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to communicate these addresses to those who are not technically inclined, or even mentioning MAC addresses like ```9e:96:85:b7:30:5e```, can be prone to errors and become complex quite rapidly. Furthermore, this method does not provide any historical data, especially regarding previous issues.
## Navigating the Internet 
In order to access a website like https://champlin-beahan.net, your device first contacts a DNS server to convert the combined host portion (champlin-beahan) and the Top Level Domain (net) of the URL into an IP address, such as ```188.202.87.112```. Your computer and browser actually sends its type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways
Your default gateway is normally an address that is automatically configured via DHCP. You receive a default gateway, such as ```10.101.207.112``` (though they typically end in .1 or .254 depending on the scope size), and this is where your computer forwards all of its traffic to be routed. For ```IPv6```, we offer an in-depth analysis on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify this on Mac or Linux using:
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.101.207.112    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c4b2:57cb:c47e:bef5%en0  UGcg   en0
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
domain_name_server (ip_mult): {153.136.141.227, 139.66.214.74}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9e:96:85:b7:30:5e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b9:13:f4:31:2f:bd
}</pre>




## Resolving Issues with Wired and Wireless Connections
When transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX
Irrespective of your OSX/macOS version - whether it's 10.14.5, 11.4.9, or 12.3.3, there are various troubleshooting tools available. However, these tools only provide individual data and not a series of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams practicing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
In OSX/macOS, the `sudo wdutil info` tool is extremely beneficial as it provides a dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Moreover, the `sysdiagnose` tool can be used to generate a wide range of logs, although most of the data is only relevant to a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, which will result in a privacy warning. When not run in the background, it will open Finder in the correct location, allowing you to navigate to `/var/tmp` or use Finder with Cmd+Shift+G to point Finder to the specific path. However, be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
