---
title: "How Can I DiagnOSe OSX Internet"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "125.248.236.10"
date: 2023-11-18T18:18:37+00:00
draft: false
---

## Explanation of Internet Addressing System

When using the Internet, you are assigned a Public IPv4 address, such as ```125.248.236.10```, or an IPv6 address, such as ```2000:1c96:e848:90f7:a1f9:4508:f5c5:2bab```. These addresses can be verified by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, relaying these addresses, including MAC addresses like ```df:58:7c:70:39:36```, to individuals who are not technologically savvy can result in errors and complications. Furthermore, this method does not provide any historical data, particularly when addressing past issues.
## Navigating the Internet

To access a webpage, such as https://bartell.net, you must first contact a DNS server to convert the host portion (bartell) and the Top Level Domain (net) of the URL into an IP address, like ```109.18.36.191```. Whenever your computer and browser make web requests, they also transmit their type, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## Significance of Default Gateways

The default gateway is typically an address that is automatically configured via DHCP. You will receive a default gateway, such as ```192.0.0.180``` (although they generally end with either .1 or .254 depending on the scope size), where your computer channels all its traffic to be further routed. For ```IPv6```, detailed instructions can be found in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while Mac or Linux users can verify this by running: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.180    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:eff9:5591:386a:eab%en0  UGcg   en0
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
domain_name_server (ip_mult): {45.108.57.201, 222.189.67.139}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr df:58:7c:70:39:36
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 41:82:d0:5d:9c:ad
}</pre>




## Resolve Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be utilizing either a wired or a wireless (Wi-Fi) medium at the physical and data layers.
### Steps for Apple macOS / OSX Troubleshooting
Regardless of whether your system is running on OSX/macOS versions such as `10.13.2`, `11.3.8`, or `12.3.4`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting proves to be particularly useful, especially for teams that endorse remote work and Work From Anywhere (WFA).
#### Utilize Pre-installed Scripts for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the Command Line Interface (CLI) and can be configured to generate specific logs for troubleshooting purposes. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although many of them are only point-in-time records related to wireless, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it in an *interactive* manner (although there is minimal interaction), you can execute `sudo /usr/bin/sysdiagnose` and it will display a privacy warning. Running it without the background option should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G, but be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
