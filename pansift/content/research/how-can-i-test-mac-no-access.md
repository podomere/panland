---
title: "How Can I Test Mac No-access"
subtitle: "Let's Take This Offline?"
layout: research
ip_v4_address: "177.196.229.3"
date: 2023-11-18T19:34:37+00:00
draft: false
---

## The Fundamentals of Internet Address System

When using the Internet, individuals may receive a Public IPv4 address such as ```177.196.229.3``` or an IPv6 address like ```2000:bd4:9c2c:d023:f7ff:8550:7ed6:18a9```. A convenient way to verify this information is through [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or referencing these addresses, including MAC addresses like ```3a:6b:ab:2f:c6:58```, can be prone to errors and rapidly become complex, particularly for those without technical expertise. Furthermore, this method does not provide any historical data, especially for past issues.
## How Web Pages are Accessed

When accessing a website such as https://rolfson.info, the first step involves connecting to a DNS server in order to convert the combination of the host part (rolfson) and the Top Level Domain (info) of the URL into an IP address, for example, ```157.133.14.54```. It is important to note that the computer and browser automatically transmits its type with all web requests, e.g. <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically assigned address provided through DHCP. An example of a default gateway would be ```10.209.190.213```, with the last digits typically being .1 or .254 depending on the scope size. This is where all of the computer's traffic is directed for further routing. To delve deeper into configuring this for ```IPv6```, comprehensive instructions can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, this can also be verified.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.209.190.213    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:72ce:d45b:b842:db99%en0  UGcg   en0
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
domain_name_server (ip_mult): {188.128.130.156, 28.162.191.91}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3a:6b:ab:2f:c6:58
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 46:aa:69:ea:51:f0
}</pre>




## Fixing Connectivity Issues
When it comes to transmitting data to your router, you may encounter connectivity issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of which version of OSX/macOS you are using, be it 10.11.6, 11.1.5, or 12.2.8, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that have adopted remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools
One of the helpful tools on OSX/macOS is sudo wdutil info, which provides a dump of current wireless-related settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the sysdiagnose tool can be used to generate a wide range of logs, although much of it is point-in-time information related to wireless, similar to wdutil.

To run sysdiagnose in the background and write logs to /var/tmp/<blah>.tar.gz, you can use the command sudo nohup /usr/bin/sysdiagnose -u &. Alternatively, you can run it interactively with sudo /usr/bin/sysdiagnose, which will open Finder in the correct location or allow you to navigate to /var/tmp. However, be mindful of the file sizes, which can be around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
