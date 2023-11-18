---
title: "How Can I Understand OSX Connectivity"
subtitle: "Granular?"
layout: research
ip_v4_address: "178.224.54.94"
date: 2023-11-18T18:25:10+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```178.224.54.94```, or an IPv6 address, like ```2000:c7ea:4ea9:f6ca:294:ae92:5632:6e02```. You can verify this information on [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not technically inclined, as well as mentioning MAC addresses like ```24:b0:a0:f8:90:5c```, can be prone to errors and become complex. Moreover, it does not provide historical data, especially from prior issues.
## Navigating the Internet
When attempting to access a webpage, such as https://herman.net, you first contact a DNS server to convert the host (herman) and the Top Level Domain (net) of the URL into an IP address, like ```40.245.67.225```. Your computer and browser include specific details with every web request, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Significance of Default Gateways
The default gateway is typically an address automatically configured via DHCP. You are assigned a default gateway, such as ```192.168.111.136``` (usually ending in .1 or .254 depending on the scope size), to which your computer sends all its traffic to be routed. For ```IPv6```, a detailed analysis can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and on Mac or Linux, it can be verified using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.111.136    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:30c3:2db9:16e9:e914%en0  UGcg   en0
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
domain_name_server (ip_mult): {177.27.76.184, 73.122.162.197}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 24:b0:a0:f8:90:5c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 59:19:e3:49:7b:bb
}</pre>




## Solutions for Wired and Wireless Connection Issues
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Steps to Resolve Problems on Apple macOS / OSX
Regardless of whether you are using OSX/macOS version ```10.13.6```, ```11.2.4```, or ```12.0.9```, there are various troubleshooting tools available. However, these manual actions and scripts lack the ability to provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Effective Built-in Tools for Troubleshooting
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings in the CLI, and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although much of it is only relevant to wireless settings, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it *interactively* (although there isn't much interaction), you can execute<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, the logs should open in Finder at the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. However, be cautious of the file sizes, which can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
