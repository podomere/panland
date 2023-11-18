---
title: "How Do You Test Mac Internet"
subtitle: "Button Up The Loose Ends?"
layout: research
ip_v4_address: "77.94.4.9"
date: 2023-11-18T19:42:26+00:00
draft: false
---

## The Functioning of Internet Addressing

When connecting to the Internet, you will receive either a Public IPv4 address such as ```77.94.4.9``` or an IPv6 address like ```2000:bbb3:a7ce:387d:b93e:1c4d:f7cf:9e0f```. To verify this, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, when attempting to communicate these addresses to those who are not technically inclined, or mention MAC addresses like ```a9:ce:48:1a:f5:8c```, mistakes can occur and it can become complex rather quickly. Furthermore, this does not provide any historical information, especially regarding past issues.
## Navigating the Internet

When attempting to access a webpage such as https://labadie.io, you first connect to a DNS server to convert the host section (labadie) combined with the Top Level Domain (io) of the URL, to an IP address like ```185.47.142.224```. Moreover, your computer and browser sends its type with all web requests, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways

Your default gateway is typically an automatically assigned address through DHCP. This may be a default gateway like ```192.168.171.23``` (although they usually end in .1 or .254, depending on the scope size), and it is where your computer sends all of its traffic to be routed onward. For ```IPv6```, detailed information can be found in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also check on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.171.23    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3aa5:2a07:ac0c:41d2%en0  UGcg   en0
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
domain_name_server (ip_mult): {236.4.4.89, 91.218.135.93}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a9:ce:48:1a:f5:8c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr cc:21:28:9f:9d:94
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Steps to Resolve Problems on Apple macOS / OSX
Regardless of whether you are using OSX/macOS ```10.14.7```, ```11.6.2```, or ```12.0.1```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that practice remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a comprehensive range of logs, although much of it is only relevant to wireless settings, similar to wdutil.

To run it in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For interactive use, you can run ```sudo /usr/bin/sysdiagnose``` which will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Be mindful of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
