---
title: "How To Check OSX No-access"
subtitle: "Heads Down?"
layout: research
ip_v4_address: "135.228.26.228"
date: 2023-11-18T18:14:03+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```135.228.26.228```, or an IPv6 address, like ```2000:3af1:3284:f88:a113:2cdc:b328:1209```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those who are not tech-savvy or even referring to MAC addresses, such as ```19:24:d3:9b:26:c1```, can be prone to errors and quickly become complex. Moreover, this does not provide any historical data, particularly when past issues occurred.
## Navigating the World Wide Web

Accessing a web page, like https://koss.org, involves an initial request to a DNS server to translate the host portion (koss) combined with the Top Level Domain (org) of the URL into an IP address, such as ```182.11.20.194```. Every web request sent from your computer and browser includes the user-agent type, for example,<br>
```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically configured address via DHCP. It is a default gateway, like ```192.168.57.243``` (usually ending in .1 or .254, depending on the scope size), where your computer sends all of its traffic to be routed onwards. For ```IPv6```, you can explore further in our detailed article on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or verify on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.57.243    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:457b:ed3:dd94:fdd8%en0  UGcg   en0
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
domain_name_server (ip_mult): {245.111.198.5, 86.70.144.118}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 19:24:d3:9b:26:c1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 71:84:e8:72:11:e7
}</pre>




## Fixing Connectivity Issues With Wired and Wireless Networks
When it comes to reaching your router, you might be utilizing either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Solutions for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are running, whether it's ```10.11.9```, ```11.1.5```, or ```12.1.6```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time, which is where automated remote troubleshooting becomes invaluable, especially for teams that have adopted remote work and the Work From Anywhere (WFA) approach.
#### Useful Built-in Tools for Troubleshooting
One of the most useful tools for OSX/macOS users is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Another tool, ```sysdiagnose```, offers a more comprehensive set of logs, although many are only relevant to wireless settings, similar to wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, the command ```sudo /usr/bin/sysdiagnose``` can be used, but be cautious of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
