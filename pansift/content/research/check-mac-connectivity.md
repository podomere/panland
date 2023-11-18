---
title: "Check Mac Connectivity"
subtitle: "Ideate?"
layout: research
ip_v4_address: "177.67.91.48"
date: 2023-11-18T19:17:58+00:00
draft: false
---

## Demystifying Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```177.67.91.48```, or an IPv6 address, like ```2000:aab4:6f2d:e653:6241:f1d0:eaa4:a2b4```. You can easily check this at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, and even MAC addresses like ```52:c4:aa:f1:b5:6d```, to individuals not well-versed in technology can become cumbersome and error-prone. Moreover, this method lacks historical data, especially from past issues.
## Navigating the World Wide Web

When accessing a web page, such as https://wilderman.name, you first contact a DNS server to convert the host portion (wilderman) and the Top Level Domain (name) of the URL into an IP address, for example, ```149.198.205.76```. Your computer and browser also include its type in all web requests, like <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Exploring the Significance of Default Gateways

The default gateway is typically an address automatically configured via DHCP. It often ends in .1 or .254 depending on the scope size, such as ```192.168.149.80```. This is the point where your computer forwards all its traffic to be routed further. For ```IPv6```, you can delve deeper into this topic in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and for Mac or Linux, you can verify using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.149.80    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:aeac:bb22:456a:dbf7%en0  UGcg   en0
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
domain_name_server (ip_mult): {21.248.127.159, 33.120.44.43}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 52:c4:aa:f1:b5:6d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ac:38:a4:9c:bb:87
}</pre>




## Fixing Network Connectivity Issues
Whether you are using a wired or wireless connection, the physical and data layer play a crucial role in transmitting data to your router.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are running OSX/macOS version ```10.13.1```, ```11.0.3```, or ```12.3.2```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for remote teams and Work From Anywhere (WFA) environments.
#### Helpful Built-in Scripts
A useful tool on OSX/macOS is ```sudo wdutil info```, which provides wireless-related settings and can be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool can generate a wide range of logs, though many are only relevant to wireless settings, similar to wdutil.

To run ```sysdiagnose``` in the background, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```, which will write logs to ```/var/tmp/<blah>.tar.gz```. For an interactive (though not highly interactive) run, use the command ```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not run in the background, it will open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder or Cmd+Shift+G. Note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
