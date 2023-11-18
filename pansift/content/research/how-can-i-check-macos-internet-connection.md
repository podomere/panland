---
title: "How Can I Check MacOS Internet Connection"
subtitle: "Agile Marketing?"
layout: research
ip_v4_address: "166.55.221.95"
date: 2023-11-18T17:44:06+00:00
draft: false
---

## The Functioning of Internet Addressing 

When using the Internet, it is possible to obtain a Public IPv4 address, such as ```166.55.221.95```, or an IPv6 address, like ```2000:41cd:5810:3330:c97a:e163:d2f7:3e6f```. Verification can be done through [https://test-ipv6.com/](https://test-ipv6.com/). Communicating these addresses, or even referring to MAC addresses such as ```14:08:cf:2b:86:4f```, can be prone to errors and complex, especially for individuals who are not well-versed in technology. Furthermore, this method does not provide any historical data, particularly regarding past issues.
## Navigating the World Wide Web
To access a webpage like https://fadel.biz, the initial step is to contact a DNS server to convert the combination of the host portion (fadel) and the Top Level Domain (biz) of the URL into an IP address, such as ```132.140.97.222```. Upon making web requests, your computer and browser transmit your type, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
Generally, a default gateway is an address that is automatically configured via DHCP. It usually takes the form of ```192.0.0.102``` (though typically ending in .1 or .254 based on the scope size), and it is the point to which your computer sends all its traffic for further routing. Information on fixing ```IPv6``` connectivity is available in-depth at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and confirmation can be done on Mac or Linux by using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.102    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:dd44:4b6:7160:8df2%en0  UGcg   en0
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
domain_name_server (ip_mult): {60.182.66.42, 164.77.138.131}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 14:08:cf:2b:86:4f
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 4c:ff:a3:8f:4e:40
}</pre>




## Solve Network Connection Issues for Wired and Wireless Setups

When it comes to sending data to your router, you might be using a wired connection or a wireless (Wi-Fi) medium at the physical and data layer. 
### Resolving Connectivity Problems on Apple macOS / OSX
Regardless of whether you are using OSX or macOS versions like ```10.11.1```, ```11.0.7```, or ```12.1.2```, there are various troubleshooting tools available. However, these manual actions and scripts fail to provide a set of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for teams that have embraced remote work and Work From Anywhere (WFA).
#### Leverage Pre-installed Scripts for Assistance
An extremely useful tool on OSX/macOS is ```sudo wdutil info```, which displays the current wireless settings in the CLI and can be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool provides a comprehensive set of logs (although most of it is point-in-time information related to wireless, like wdutil).

To run it in the background and generate logs, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```, which will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, to run it interactively, use ```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Keep in mind that the file sizes are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
