---
title: "How To DiagnOSe Apple Issues"
subtitle: "Plug And Chug?"
layout: research
ip_v4_address: "139.13.136.152"
date: 2023-11-18T18:46:47+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, you may be assigned a Public IPv4 address such as ```139.13.136.152``` or an IPv6 address like ```2000:481c:8e3d:c37f:9455:1bba:5b89:7257```. Verification of these addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses or MAC addresses such as ```0e:f4:5a:fd:a0:38``` to individuals not well-versed in technological jargon can be prone to error and can become complex rapidly. Furthermore, this method does not provide any historical records, particularly in the occurrence of past issues.
## How to Reach Websites
Accessing a website like https://pacocha.co entails initially connecting to a DNS server to convert the combination of the host portion (pacocha) and the Top Level Domain (co) of the URL into an IP address, for example, ```213.33.138.105```. Upon making web requests, your computer and browser actually transmit its type, for instance, <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways
Usually, your default gateway is an automatically configured address through DHCP. The default gateway typically ends in .1 or .254, depending on the scope size, such as ```192.0.0.45```, and serves as the destination for all of your computer's traffic to be routed. For an in-depth explanation on ```IPv6```, you can refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while verification on Mac or Linux can be done using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.45    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:77c3:a84c:7128:3560%en0  UGcg   en0
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
domain_name_server (ip_mult): {127.221.162.135, 122.130.36.98}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0e:f4:5a:fd:a0:38
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 44:df:fd:21:73:25
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to sending data to your router, you might be using a wired connection or a wireless (Wi-Fi) medium at the physical and data layers.
### Troubleshooting Tips for Apple's macOS
Regardless of whether you're using OSX or macOS versions such as ```10.13.7```, ```11.1.9```, or ```12.2.5```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time, which is essential for remote troubleshooting, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Tools
A very valuable tool on macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Another comprehensive tool is the ```sysdiagnose``` tool, which can generate a wide range of logs, although many are limited to point-in-time information related to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, you can use the following command: ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not run in the background, it should open Finder in the correct location, and you can also navigate to the ```/var/tmp``` location using Finder. However, be aware that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
