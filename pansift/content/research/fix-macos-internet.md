---
title: "Fix MacOS Internet"
subtitle: "Gamification?"
layout: research
ip_v4_address: "232.202.161.183"
date: 2023-11-18T22:20:10+00:00
draft: false
---

 Understanding Internet Address Allocation

When you connect to the Internet, you're assigned a public IPv4 address like ```5.122.14.147``` or an IPv6 address like ```2000:136f:6781:6d56:4ca3:7ece:e5de:c25```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, conveying these addresses or even referencing MAC addresses like ```08:05:d0:5d:21:59``` can be prone to errors and become complex. Moreover, this method does not provide any historical data, especially related to past issues.

  ## Navigating the Internet and the Inner Workings of Lookups
  Accessing a website such as https://davis.net involves initial contact with a DNS server to convert the host portion (davis) combined with the Top Level Domain (net) of the URL into an IP address like ```239.215.79.173```. Every web request from your computer and browser includes its specific type, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```

  ## The Crucial Function of Default Gateways
  Your default gateway is typically an automatically configured address obtained through DHCP. A default gateway such as ```172.19.60.176``` (often ending in .1 or .254 based on the scope size) is where your computer directs all its traffic to be routed further. For more details on configuring ```IPv6```, see our comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). You can also check this on Mac or Linux using:
  <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.19.60.176    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:32c9:9344:cd3b:95f1%en0  UGcg   en0
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
domain_name_server (ip_mult): {53.164.170.158, 144.204.243.253}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 08:05:d0:5d:21:59
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c8:7a:47:bb:a8:f8
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX Systems
Regardless of whether you are using OSX/macOS versions such as `10.13.3`, `11.3.6`, or `12.2.7`, there are several troubleshooting tools available. However, these tools do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that practice remote work and Work From Anywhere (WFA).

  #### Utilizing Built-in Scripts and Commands
  A helpful tool for OSX/macOS is the `sudo wdutil info`, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Another comprehensive tool is the `sysdiagnose`, which can generate a wide range of logs related to wireless, although they are mostly point-in-time.

  Running the command `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose`, but note that it will give a privacy warning. The file sizes can be around 300MB.
## Related Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
