---
title: "How To Fix Common Wifi No Access"
subtitle: "Value Add?"
layout: research
ip_v4_address: "175.103.2.98"
date: 2023-11-18T21:13:51+00:00
draft: false
---

## Understanding IP Addressing

When using the Internet, you are assigned an IP address, such as ```175.103.2.98``` for IPv4 or ```2000:2827:e78f:770f:bc7e:15e:b2eb:c75e``` for IPv6. To verify your IP address, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, and even calling out MAC addresses like ```35:96:42:0d:5c:40```, can be prone to errors, especially for those who are not tech-savvy. Furthermore, this method does not provide any historical data, particularly when dealing with past issues.
## Navigating the Internet

Accessing a website such as https://nicolas-walter.org involves contacting a DNS server to convert the host portion (nicolas-walter) and the Top Level Domain (org) of the URL into an IP address, such as ```156.129.124.9```. Each web request from your computer and browser contains information about its type, for example, <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding Default Gateways

The default gateway is typically an automatically configured address through DHCP. You are assigned a default gateway, such as ```10.190.238.66``` (which typically ends in .1 or .254 based on the scope size), and this is where your computer directs all its traffic to be routed onwards. For ```IPv6```, a detailed explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and on Mac or Linux systems you can verify using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.190.238.66    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:db3e:13e8:c632:c058%en0  UGcg   en0
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
domain_name_server (ip_mult): {0.222.87.170, 229.182.179.67}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 35:96:42:0d:5c:40
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fd:37:77:73:8c:64
}</pre>




## Resolving Issues with Wired or Wireless Connections
When sending data to your router, you may utilize a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Solutions for Apple macOS / OSX Systems
Regardless of the version of OSX/macOS (such as ```10.15.5```, ```11.5.6```, or ```12.2.5```), there are various tools available for resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams operating in remote and Work From Anywhere (WFA) settings.
#### In-Built Scripts to Aid Troubleshooting
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs (although much of it is only relevant to wireless settings at a specific time, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, if you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. Running it in this manner will either open Finder in the correct location or allow you to navigate to ```/var/tmp``` using Finder with the Cmd+Shift+G command. It's important to be aware of the file sizes, which can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
