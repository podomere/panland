---
title: "DiagnOSe MacOS IP Settings"
subtitle: "Agile Marketing?"
layout: research
ip_v4_address: "250.236.237.241"
date: 2023-11-18T22:22:13+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a unique Public IPv4 address, such as ```250.236.237.241```, or an IPv6 address like ```2000:151c:13a5:ac97:dfbd:5119:2e7e:5115```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, communicating these addresses or referencing MAC addresses like ```4e:28:f9:bd:0e:ae``` can quickly become complicated and prone to errors. Moreover, this does not provide any historical data, especially from past incidents.

  ## Navigating the Internet and the Process of Lookups
  When you want to access a website like https://mueller.net, your first step is to contact a DNS server to convert the host part (mueller) combined with the Top Level Domain (net) of the URL into an IP address, such as ```227.155.118.121```. Every time your computer and browser request a web page, they also submit their type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```

  ## The Significance of Default Gateways
  Your default gateway is typically an automatically assigned address through DHCP. You may receive a default gateway like ```10.190.62.60``` (usually ending in .1 or .254, depending on the scope size), which is where your computer sends all its traffic to be further routed. For extensive information on ```IPv6``` connectivity, read our in-depth guide: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Alternatively, you can check on Mac or Linux using:
  <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.190.62.60    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:57ad:e119:8242:fdb0%en0  UGcg   en0
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
domain_name_server (ip_mult): {95.46.238.31, 235.251.198.157}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 4e:28:f9:bd:0e:ae
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a3:29:0f:3e:f3:aa
}</pre>




## Fixing Network Connectivity Issues
When it comes to transmitting data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple Operating Systems
No matter which version of OSX/macOS you're using - whether it's ```10.15.3```, ```11.3.6```, or ```12.2.8``` - there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that embrace remote work and Work From Anywhere (WFA).

  #### Effective Built-in Scripts and Commands
A very useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Another comprehensive tool is the ```sysdiagnose``` tool, which can generate a wide range of logs (although mostly point-in-time related to wireless, just like wdutil).

  Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Just be cautious of the file sizes, which are around 300MB more or less.
## Useful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
