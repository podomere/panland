---
title: "How To Check OSX Internet"
subtitle: "Rubber Meets The Road?"
layout: research
ip_v4_address: "65.218.34.139"
date: 2023-11-18T18:13:24+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique IP address, such as ```65.218.34.139``` for IPv4 or ```2000:659a:83cf:33c1:2d96:ea58:4668:68f7``` for IPv6. You can verify your IP address at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses or MAC addresses like ```5e:9e:ad:c5:44:a2``` can be complex and error-prone, especially for those who are not technically inclined. Furthermore, it does not provide historical data to address previous issues.
## Navigating the World Wide Web

Accessing a website such as https://gusikowski-romaguera.info involves contacting a DNS server to translate the host (gusikowski-romaguera) and the Top Level Domain (info) of the URL into an IP address, such as ```55.175.16.161```. Additionally, your computer and browser sends its type with all web requests, for example: <br>
```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways

Your default gateway is typically an automatically assigned address through DHCP, such as ```172.17.83.19``` (often ending in .1 or .254 based on the scope size). This is the endpoint where your computer directs all its traffic to be routed further. For deep insight on ```IPv6```, you can refer to [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or check on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.17.83.19    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:bae4:57bc:2c39:db6e%en0  UGcg   en0
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
domain_name_server (ip_mult): {199.144.61.212, 41.93.137.138}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5e:9e:ad:c5:44:a2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 90:fa:fc:a4:1f:0e
}</pre>




## Fixing Connectivity Issues
When it comes to transferring data to your router, you might encounter issues at the physical and data layer, whether you're using a wired or wireless (Wi-Fi) medium.
### Troubleshooting on Apple macOS / OSX
No matter which version of OSX/macOS you're using, whether it's ```10.15.9```, ```11.0.5```, or ```12.3.7```, there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a series of interconnected values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that adopt remote work and Work From Anywhere (WFA) practices.
#### Useful Built-in Utilities
One extremely useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although many of them are only relevant to wireless settings at a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively* (despite minimal interaction), use the command ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the right location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Just be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
