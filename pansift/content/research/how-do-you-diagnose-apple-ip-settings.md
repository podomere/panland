---
title: "How Do You DiagnOSe Apple IP Settings"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "157.178.83.105"
date: 2023-11-18T19:05:37+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, individuals may come across different types of IP addresses such as Public IPv4 address and IPv6 addresses. These can be verified through websites like [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, conveying or handling these addresses can be challenging and prone to errors, especially when referencing MAC addresses like ```14:07:13:ac:2c:75```. Moreover, there is a lack of historical data, particularly concerning past issues.
## Navigating the World Wide Web
In order to access a web page, such as https://pouros-boyer.name, one must first access a DNS server to convert the URL's host portion (pouros-boyer) along with the Top Level Domain (name) into an IP address, such as ```126.137.143.200```. It is interesting to note that a computer and its browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
By default, the gateway address is automatically configured through DHCP. The default gateway, such as ```192.0.0.56``` (which typically ends in .1 or .254 depending on the scope size), is where a computer dispatches all its traffic to be further routed. For ```IPv6```, users can learn more from the detailed article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and for Mac or Linux users, they can verify with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.56    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5f66:cdbb:68b7:9b60%en0  UGcg   en0
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
domain_name_server (ip_mult): {200.103.82.84, 16.140.199.132}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 14:07:13:ac:2c:75
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 0d:66:a0:7d:fd:5c
}</pre>




## Resolving Connectivity Issues with Wired and Wireless Networks
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions like `10.11.6`, `11.3.5`, or `12.0.2`, there are a variety of troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time, making it challenging to assess the situation. This is where automated remote troubleshooting becomes invaluable, especially for teams practicing remote work and Work From Anywhere (WFA).
#### Utilizing In-Built Scripts for Assistance
One of the useful tools on OSX/macOS is `sudo wdutil info`, which provides a dump of current wireless settings to the command line interface (CLI) and can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although many of them are point-in-time data in relation to wireless, similar to wdutil.

Running the command `sudo nohup /usr/bin/sysdiagnose -u &` will execute the sysdiagnose tool in the background, writing logs to `/var/tmp/<blah>.tar.gz`. For an interactive mode, the command `sudo /usr/bin/sysdiagnose` can be used, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or users can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, it's important to note that the file sizes can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
