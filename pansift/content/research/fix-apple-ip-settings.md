---
title: "Fix Apple IP Settings"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "199.173.120.132"
date: 2023-11-18T18:36:51+00:00
draft: false
---

## Understanding Internet Addressing

When connecting to the Internet, users are assigned IP addresses, such as ```199.173.120.132``` for IPv4 or ```2000:6dc5:1aec:5cae:1499:29ae:2c9e:e034``` for IPv6. These can be verified at [https://test-ipv6.com/](https://test-ipv6.com/), but communicating and remembering such addresses, or MAC addresses like ```8b:88:b8:66:7f:0f```, can be challenging, especially for non-technical individuals. Moreover, it lacks historical data for problem resolution.
## Navigating Websites
Accessing a website, such as https://bernier-fisher.net, requires the translation of the URL's host portion (bernier-fisher) and Top Level Domain (net) into an IP address, like ```143.251.128.207```, through a DNS server. Every web request from a computer and browser also includes its type, e.g. ```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways
The default gateway, typically assigned via DHCP with addresses like ```172.23.230.72```, serves as the central routing point for a computer's outbound traffic. IPv6 connectivity issues can be resolved with a deep dive into [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can be checked on Mac or Linux with a few simple commands.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.23.230.72    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5fa5:e126:35fe:e5c4%en0  UGcg   en0
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
domain_name_server (ip_mult): {185.224.120.147, 131.254.153.147}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8b:88:b8:66:7f:0f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 9c:6c:96:1c:9d:cb
}</pre>




## Fixing Connectivity Issues for Wired or Wireless Networks

When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you're using OSX or macOS versions such as ```10.12.8```, ```11.2.2```, or ```12.2.4```, there are various troubleshooting tools available. However, these tools and manual actions do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for remote work and Work From Anywhere (WFA) teams.
#### Handy Built-in Scripts to Assist You
One useful tool for OSX/macOS users is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of these are only relevant to wireless matters and are not continuous like wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* experience, run```sudo /usr/bin/sysdiagnose```, which will display a privacy warning and open Finder in the correct location. Keep in mind that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
