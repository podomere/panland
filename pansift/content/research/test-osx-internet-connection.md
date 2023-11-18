---
title: "Test OSX Internet Connection"
subtitle: "Impact Map?"
layout: research
ip_v4_address: "200.251.11.125"
date: 2023-11-18T18:02:43+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the internet, you are assigned a unique Public IPv4 address, such as ```200.251.11.125```, or an IPv6 address like ```2000:2592:550e:6d9:633e:b74d:bfcb:fcc```. These addresses can be verified by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not tech-savvy, communicating these addresses, or even referencing MAC addresses like ```d5:ff:e8:e2:8e:0b```, can quickly become complex and error-prone. Furthermore, this method does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web
When accessing a web page, such as https://renner.com, the first step is to contact a DNS server to translate the host portion (renner) combined with the Top Level Domain (com) of the URL into an IP address, for example, ```210.210.239.118```. Additionally, your computer and browser include information about their types in all web requests, such as <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```.
## The Significance of Default Gateways
The default gateway is typically an automatically assigned address via DHCP, such as ```10.91.34.221``` (often ending in .1 or .254 depending on the scope size). This is where your computer sends all its traffic to be routed onwards. For IPv6, there is a detailed discussion on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) available for Mac or Linux users.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.91.34.221    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9eeb:6cc7:719f:68e9%en0  UGcg   en0
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
domain_name_server (ip_mult): {195.198.69.229, 65.78.233.216}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d5:ff:e8:e2:8e:0b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b5:a8:03:4e:eb:e3
}</pre>




## Diagnosing Connectivity Issues on macOS

When it comes to troubleshooting wired or wireless connectivity on Apple macOS, there are a variety of methods and tools that can be used. Whether you are using an older version like `10.15.6` or the latest `12.2.7`, there are options available to help identify and resolve connectivity issues, especially important for remote work and Work From Anywhere (WFA) scenarios.
### Utilizing Native Tools for Troubleshooting
One valuable built-in tool for troubleshooting on macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings and can be configured to generate specific logs for further analysis. Additionally, the `sysdiagnose` tool can be used to generate a comprehensive set of logs, although it is primarily focused on point-in-time observations related to wireless connectivity.

For running `sysdiagnose` in the background, the command `sudo nohup /usr/bin/sysdiagnose -u &` can be utilized, which will write logs to `/var/tmp/<blah>.tar.gz`. Alternatively, running `sudo /usr/bin/sysdiagnose` interactively will provide a privacy warning and open Finder in the correct location, allowing for easy access to the generated logs for analysis. It's important to note that the file sizes can be substantial, around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
