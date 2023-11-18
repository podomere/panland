---
title: "Troubleshoot Apple IP Settings"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "162.139.227.28"
date: 2023-11-18T18:39:30+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you will be assigned a Public IPv4 address such as ```162.139.227.28``` or an IPv6 address like ```2000:d116:8f31:5305:2c36:f798:1db6:65e1```. Verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/), but it can get confusing and error-prone when non-technical individuals attempt to communicate or manage these addresses, along with MAC addresses like ```da:57:b4:a2:ce:a8```. Moreover, there's no provision for historical data, particularly during past issues.
## Navigating the World Wide Web

When accessing a website such as https://olson.name, your first point of contact is a DNS server, which translates the host portion (olson) and the Top Level Domain (name) of the URL into an IP address like ```51.210.112.197```. Notably, your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways

The default gateway is typically an automatically configured address via DHCP. This gateway, such as ```172.30.182.112``` (often ending in .1 or .254 based on the scope size), serves as the point to which your computer sends all its traffic to be routed onwards. For ```IPv6```, detailed instructions can be found in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but Mac and Linux users can check using:

```bash
route -n -A inet6
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.30.182.112    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e435:2738:a996:a69c%en0  UGcg   en0
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
domain_name_server (ip_mult): {59.247.79.234, 115.11.122.213}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr da:57:b4:a2:ce:a8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8a:73:5a:52:56:60
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transferring data to your router, you may be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
No matter if you are running OSX/macOS version ```10.15.9```, ```11.0.4```, or ```12.2.5```, there are various tools available for troubleshooting. However, manual actions and scripts do not provide a series of correlated values over time, making the process cumbersome. This is where automated remote troubleshooting proves to be invaluable, particularly for teams that have embraced remote work and operate under the Work From Anywhere (WFA) model.
#### Utilizing Built-in Scripts for Assistance
A particularly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the command line interface, and can also be set up to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although it primarily consists of point-in-time data in relation to wireless, similar to wdutil.

By running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background, logs will be written to ```/var/tmp/<blah>.tar.gz```. To run it interactively, you can use ```sudo /usr/bin/sysdiagnose``` which will issue a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
