---
title: "How To Understand Wifi Router Issues"
subtitle: "Market Share?"
layout: research
ip_v4_address: "116.138.167.37"
date: 2023-11-18T20:57:28+00:00
draft: false
---

## Understanding How Internet Addressing Functions

When connecting to the Internet, you are assigned a Public IPv4 address such as ```116.138.167.37``` or an IPv6 address like ```2000:f9ad:37c:8e33:f646:3c8b:1ec0:7e43```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even mentioning MAC addresses like ```dd:1b:ba:2b:9a:62```, to individuals without technical expertise can be prone to errors and can become complex quite rapidly. Moreover, there is no historical data available, particularly from past issues that have occurred.
## Navigating the World Wide Web

When attempting to visit a website, for example, https://bayer-kirlin.net, the first step is to access a DNS server in order to convert the host portion (bayer-kirlin) combined with the Top Level Domain (net) of the URL into an IP address such as ```196.4.173.10```. The computer and browser transmit their specifications with each web request, for instance: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## The Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured via DHCP. The default gateway address, such as ```192.0.0.189``` (usually ending in .1 or .254 depending on the scope size), is where your computer forwards all of its traffic to be routed further. Detailed instructions on how to address issues with ```IPv6``` are available in the following in-depth guide: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, you can verify this on Mac or Linux platforms with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.189    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4704:829b:3bed:636%en0  UGcg   en0
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
domain_name_server (ip_mult): {3.35.83.104, 49.185.177.84}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr dd:1b:ba:2b:9a:62
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 87:6e:b3:66:50:33
}</pre>




## Rectifying Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you have the option of using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Solutions for Apple macOS / OSX Users
Regardless of whether you are using OSX or macOS versions such as 10.13.8, 11.1.4, or 12.1.7, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time, which is where the advantage of automated remote troubleshooting becomes apparent. This is particularly beneficial for teams that adapt to remote work and a Work From Anywhere (WFA) approach.
#### Integrated Scripts for Assistance
A valuable tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the `sysdiagnose` tool offers a more comprehensive option for generating a wide range of logs, although many of these are only relevant to wireless settings at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will create logs in `/var/tmp/<blah>.tar.gz`. Alternatively, for an *interactive* experience, you can run `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When run in the foreground, it will open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. It is important to note that the file size is approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
