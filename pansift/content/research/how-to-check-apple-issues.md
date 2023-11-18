---
title: "How To Check Apple Issues"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "83.176.98.62"
date: 2023-11-18T18:50:52+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address like ```83.176.98.62``` or an IPv6 address like ```2000:79a6:a587:5f4a:2b3f:a85b:b318:330c```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses to individuals who are not well-versed in technology, as well as identifying MAC addresses like ```4d:d1:4a:b1:14:0d```, can be prone to errors and can become complex. Additionally, this method does not provide any historical data, especially when issues have occurred in the past.
## Navigating the World Wide Web
In order to access a website such as https://wisozk.org, you initially connect to a DNS server to convert the host portion (wisozk) combined with the Top Level Domain (org) of the URL into an IP address like ```11.135.234.111```. Interestingly, your computer and browser transmit their type with every web request, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways
The default gateway is typically an automatically assigned address through DHCP. It is usually an address like ```192.168.210.26``` (although they often end in .1 or .254 based on the scope size), and this is the location where your computer sends all of its traffic to be routed further. For ```IPv6```, detailed instructions are available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but on Mac or Linux, you can confirm this by running: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.210.26    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d7bb:ce2:bc4f:2109%en0  UGcg   en0
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
domain_name_server (ip_mult): {50.211.154.56, 22.110.49.30}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 4d:d1:4a:b1:14:0d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a3:cf:92:8b:19:2d
}</pre>




## Resolve Connectivity Issues in Wired and Wireless Networks
When transmitting data to your router, you may utilize either a wired or wireless (Wi-fi) medium at the physical and data layer.
### Effective Solutions for macOS Users
Regardless of whether you are running OSX/macOS versions such as ```10.11.4```, ```11.0.9```, or ```12.2.5```, there are various troubleshooting tools available. However, these manual interventions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools for Troubleshooting
One incredibly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI. It can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a comprehensive range of logs related to wireless, although much of the information is only relevant to a specific point in time, similar to wdutil.

To run the ```sysdiagnose``` tool in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the following command: ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, you can run it interactively with the command: ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
