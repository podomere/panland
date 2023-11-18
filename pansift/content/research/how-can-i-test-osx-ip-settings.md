---
title: "How Can I Test OSX IP Settings"
subtitle: "Gamification?"
layout: research
ip_v4_address: "208.76.69.233"
date: 2023-11-18T18:21:48+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address such as ```208.76.69.233```or an IPv6 address like ```2000:72b9:3cca:80e1:b4b7:8f2c:27c0:ffe3```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or even mentioning MAC addresses like ```58:65:86:36:16:95```, can be prone to mistakes and can become complex, especially for individuals not well-versed in technology. Furthermore, this method does not provide any historical data, particularly regarding past issues.
## Navigating the Internet

In order to access a webpage such as https://schoen.biz, an initial step involves contacting a DNS server to convert the host portion (schoen) in combination with the Top Level Domain (biz) of the URL to an IP address, for instance, ```52.180.5.184```. In every web request, your computer and browser actually transmit its type, for example: <br> ```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. Users are assigned a default gateway such as ```10.103.99.20``` (although they usually end in .1 or .254, depending on the scope size). This is the point where your computer directs all its traffic to be routed further. For those interested in more details about setting up IPv6 connectivity, a detailed article is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, this information can be verified by using the following commands: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.103.99.20    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9f34:f97b:531d:27a5%en0  UGcg   en0
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
domain_name_server (ip_mult): {81.58.103.60, 226.10.255.221}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 58:65:86:36:16:95
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ab:97:87:43:28:f9
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layers to send the information to your router.
### Resolving Problems on Apple macOS / OSX Devices
Regardless of the version of OSX/macOS you are running, whether it's ```10.11.3```, ```11.3.4```, or ```12.0.7```, there are various troubleshooting tools available. However, these manual methods and scripts do not provide a set of interconnected values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance
One particularly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless-related settings to the Command Line Interface (CLI) and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs, although much of it is relevant only at a specific point in time in relation to wireless, similar to wdutil.

To run it in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* (albeit limited interaction) session, you can run<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Just be aware that the file sizes are approximately 300MB, give or take.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
