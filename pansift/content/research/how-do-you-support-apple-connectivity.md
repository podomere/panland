---
title: "How Do You Support Apple Connectivity"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "56.80.206.78"
date: 2023-11-18T19:10:07+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 or IPv6 address. The former looks like ```56.80.206.78``` while the latter may be something like ```b0:5d4d:eee0:778f:d6db:d89f:eada:d273```. Verifying your address can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or identifying these addresses, as well as MAC addresses such as ```37:5c:4d:80:f8:d3```, to individuals not familiar with technology can be prone to errors and complexity. Moreover, there is no historical data available, particularly regarding past issues.
## Navigating the Internet
When attempting to reach a website, such as https://waters.co, the first step involves contacting a DNS server to convert the host portion (waters) and the Top Level Domain (co) of the URL into an IP address, like ```68.85.248.195```. Each web request from your computer and browser also includes specific type information, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways
Typically, your default gateway is automatically configured through DHCP and is expressed as an address like ```192.0.0.25``` (often ending in .1 or .254 depending on the scope size). This is the point where your computer directs all of its traffic to be routed further. For ```IPv6```, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or alternatively, you can perform checks on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.25    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f7e8:d7b0:1fe6:a64a%en0  UGcg   en0
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
domain_name_server (ip_mult): {241.2.180.100, 104.209.160.135}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 37:5c:4d:80:f8:d3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c6:45:fc:c6:79:2d
}</pre>




## Resolving Issues with Wired or Wireless Connections
When it comes to transmitting data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are running ```10.12.4```, ```11.2.3```, or ```12.2.5```, there are various troubleshooting tools available for OSX/macOS. However, these tools do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes invaluable, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Scripts 
A useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is only point-in-time information related to wireless, much like wdutil.

To run it in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive option, you can run ```sudo /usr/bin/sysdiagnose```, although it will give a privacy warning. When run interactively, it should open Finder in the correct location or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
