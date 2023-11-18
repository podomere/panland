---
title: "How Can I Support OSX IP Settings"
subtitle: "Synergy?"
layout: research
ip_v4_address: "182.205.162.89"
date: 2023-11-18T18:24:30+00:00
draft: false
---

## Understanding How Internet Addressing Operates

When using the internet, you are assigned a Public IPv4 address, such as ```182.205.162.89```, or an IPv6 address, such as ```2000:e5f1:8130:89f3:6f8:6db8:fa5:b6e5```. You can verify these addresses at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not tech-savvy or referencing MAC addresses like ```3e:48:90:f3:97:38``` can quickly become complicated and error-prone. Moreover, it does not provide historical data, especially regarding past issues.
## Navigating the World Wide Web

When attempting to access a webpage, such as https://labadie-kshlerin.biz, you first connect to a DNS server, which translates the host portion (labadie-kshlerin) along with the URL's Top Level Domain (biz) to an IP address like ```81.117.228.11```. Additionally, your computer and browser automatically include its type in all web requests, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured through DHCP. You receive a default gateway, such as ```192.168.207.139``` (usually ending in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For a thorough exploration of ```IPv6```, you can read our article on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can verify this on Mac or Linux using:

```bash
your command here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.207.139    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c9ac:6d36:eab0:57f6%en0  UGcg   en0
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
domain_name_server (ip_mult): {62.166.101.42, 61.213.103.119}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3e:48:90:f3:97:38
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 65:5e:d3:12:b2:93
}</pre>




## Troubleshooting and Resolving Connectivity Issues

When it comes to the physical and data layer, you may find yourself using either a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Resolving Issues on Apple macOS / OSX Systems

Regardless of the version of OSX/macOS you are using, whether it's ```10.15.4```, ```11.0.1```, or ```12.1.7```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance

One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which produces a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, albeit many of them providing only point-in-time information related to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or alternatively, you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to direct Finder to the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
