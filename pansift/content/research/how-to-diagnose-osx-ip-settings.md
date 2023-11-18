---
title: "How To DiagnOSe OSX IP Settings"
subtitle: "Heads Down?"
layout: research
ip_v4_address: "41.241.70.48"
date: 2023-11-18T18:09:50+00:00
draft: false
---

## Understanding the Allocation of Internet Addresses

When connecting to the Internet, you are assigned a Public IPv4 address, such as ```41.241.70.48```, or an IPv6 address, such as ```2000:a7a4:db86:c4cf:fd0b:fc69:f9c4:e4a8```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals without technical expertise, communicating these addresses, or even referencing MAC addresses like ```fd:3e:f1:d1:32:03```, can be prone to errors and become complex very quickly. Moreover, this method does not provide any historical data, especially regarding past issues.
## Navigating the Internet

When accessing a website such as https://goodwin.co, you must first contact a DNS server to translate the host portion (goodwin) combined with the Top Level Domain (co) of the URL into an IP address, such as ```41.197.219.253```. Notably, your computer and browser transmit its type with all web requests, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

Typically, your default gateway is an automatically configured address through DHCP. You receive a default gateway like ```192.0.0.52``` (although they often end in .1 or .254 depending on the scope size) and this is the destination where your computer directs all its traffic to be routed further. For ```IPv6```, detailed instructions are available in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify on Mac or Linux using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.52    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5d9d:b06d:b7f2:ceb0%en0  UGcg   en0
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
domain_name_server (ip_mult): {62.174.215.245, 172.43.209.64}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr fd:3e:f1:d1:32:03
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8b:b8:69:43:33:4d
}</pre>




## Fixing Connection Issues in Wired or Wireless Networks
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are running OSX/macOS version 10.12.9, 11.3.3, or 12.2.4, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a set of correlated values over time, which is where automated remote troubleshooting becomes particularly useful, especially for teams embracing remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts for Troubleshooting
One useful tool on OSX/macOS is "sudo wdutil info," which provides a current wireless settings dump to the command-line interface and can also be configured to generate specific logs for troubleshooting. Additionally, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of it is point-in-time information related to wireless, similar to wdutil.

To run the sysdiagnose tool in the background and write logs to "/var/tmp/<blah>.tar.gz," use the command "sudo nohup /usr/bin/sysdiagnose -u &". For an *interactive* (though minimal interaction) experience, you can run "sudo /usr/bin/sysdiagnose," which will provide a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" or use Finder with Cmd+Shift+G to point Finder to the path. However, be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
