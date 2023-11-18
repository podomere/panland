---
title: "How Can I Fix Apple Internet"
subtitle: "Sprint To The Finish Line?"
layout: research
ip_v4_address: "116.137.234.37"
date: 2023-11-18T18:55:16+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, individuals may have a Public IPv4 or IPv6 address, such as ```116.137.234.37``` or ```2000:a335:c2cc:ae2b:1be6:953a:515d:4360```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or sharing these addresses, along with MAC addresses like ```e5:37:ee:5e:04:b0```, can become complex and error-prone, especially for those who are not technically inclined. Furthermore, it does not offer any historical data, particularly for past issues.
## Navigating the World Wide Web

Accessing a webpage, such as https://macejkovic-gusikowski.name, involves the initial contact with a DNS server to convert the host portion (macejkovic-gusikowski) along with the Top Level Domain (name) of the URL into an IP address, such as ```241.217.105.126```. Every time a web request is made, your computer and browser also transmit its type, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways

The default gateway is generally an address that is automatically configured through DHCP. This gateway, such as ```192.0.0.226``` (often ending in .1 or .254 based on scope size), is where all of your computer's traffic is directed for further routing. For ```IPv6```, detailed guidance is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and on Mac or Linux systems, it can be verified using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.226    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4e0d:4e5c:d2c2:9f4b%en0  UGcg   en0
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
domain_name_server (ip_mult): {28.252.78.60, 131.55.165.138}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e5:37:ee:5e:04:b0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 31:7a:bb:70:55:a8
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX
Regardless of whether you are using OSX/macOS ```10.15.9```, ```11.6.8```, or ```12.2.3```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that are engaged in remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One incredibly useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless related settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless settings at a specific point in time, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, it will run in the background and write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively*, you can run ```sudo /usr/bin/sysdiagnose``` and it will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to point Finder to the path. Just be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
