---
title: "DiagnOSe MacOS Internet"
subtitle: "T-shirt Sizes?"
layout: research
ip_v4_address: "153.64.225.225"
date: 2023-11-18T22:21:59+00:00
draft: false
---

## Understanding Internet Addressing 

When using the Internet, you may have a Public IPv4 address such as ```153.64.225.225``` or an IPv6 address like ```2000:37e9:6e5b:6098:6400:9c10:fd45:ac7e```. These can be verified from [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not familiar with technical aspects, communicating these addresses, or even mentioning MAC addresses like ```5e:22:83:bc:93:04```, can be prone to errors and quickly become complex. Moreover, this does not provide any historical data, especially when past issues occurred.
## Navigating the Web and the Process of Lookups

When accessing a webpage like https://bashirian.org, you first reach a DNS server to translate the host portion (bashirian) along with the Top Level Domain (org) of the URL to an IP address like ```188.17.244.84```. Your computer and browser actually sends its type with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## The Significance of Default Gateways

Your default gateway is usually an automatically configured address via DHCP. You receive a default gateway like ```172.28.31.200``` (although they typically end in .1 or .254 based on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a detailed explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.28.31.200    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ee07:e991:26f6:b3a5%en0  UGcg   en0
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
domain_name_server (ip_mult): {49.87.74.144, 209.132.112.27}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 5e:22:83:bc:93:04
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b2:7a:6a:29:e0:06
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks
In the realm of networking, the use of either a wired or wireless (Wi-Fi) medium at the physical and data layer is common when transmitting data to your router.
### Resolving Problems on Apple macOS / OSX
Regardless of whether your system is running on OSX/macOS versions like ```10.12.2```, ```11.0.4```, or ```12.1.7```, there are a variety of troubleshooting tools available. However, these manual actions and scripts do not provide a series of interconnected values over time. This is where automated remote troubleshooting proves to be beneficial, especially for teams that adopt remote work and Work From Anywhere (WFA) culture.

  #### Utilizing Built-in Scripts and Commands for Assistance
  An extremely valuable diagnostic tool on OSX/macOS is ```sudo wdutil info```, which imparts a dump of the current wireless settings to the CLI. This tool can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a wide range of logs (though much of it is only relevant to wireless at a specific point in time, similar to wdutil).

  Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will create logs in ```/var/tmp/<blah>.tar.gz```. For an *interactive* (albeit limited) experience, you can execute<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. When not run in the background, it should open Finder in the designated location or you can manually navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to pinpoint the path. Be cautious of the file sizes, which can amount to around 300MB.
## Related Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
