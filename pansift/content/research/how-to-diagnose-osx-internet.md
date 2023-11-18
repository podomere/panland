---
title: "How To DiagnOSe OSX Internet"
subtitle: "Granular?"
layout: research
ip_v4_address: "221.105.161.107"
date: 2023-11-18T18:09:22+00:00
draft: false
---

## Understanding Internet Addressing Systems

When using the Internet, individuals may be assigned a Public IPv4 address such as ```221.105.161.107``` or an IPv6 address like ```2000:13bd:ca28:c42d:a62a:db78:e4f8:3313```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, conveying these addresses, or even identifying MAC addresses like ```b3:89:e3:e4:c3:57```, can be prone to errors and quickly become complex. Moreover, this method does not provide any historical data, particularly from previous issues.
## Navigating the World Wide Web
When accessing a webpage such as https://harris.biz, the first step is to access a DNS server to convert the host portion (harris) combined with the URL's Top Level Domain (biz) into an IP address like ```138.10.241.28```. Each web request made by your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways
The default gateway is typically an automatically configured address obtained through DHCP. An example of a default gateway is ```172.27.49.7``` (although they generally end in .1 or .254 depending on the scope size), and it is where your computer sends all its traffic to be routed onward. For ```IPv6```, there is an in-depth guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) and can be checked on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.49.7    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:86e:17b6:29d4:ea48%en0  UGcg   en0
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
domain_name_server (ip_mult): {103.93.217.197, 37.108.44.102}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b3:89:e3:e4:c3:57
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 7e:78:d0:13:28:d4
}</pre>




## Resolving Connectivity Issues with Wired or Wireless Networks
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting on Apple macOS / OSX Systems
Regardless of whether you are running OSX or macOS version ```10.15.3```, ```11.0.7```, or ```12.2.5```, there are various tools available for troubleshooting connectivity issues. However, these tools do not provide a comprehensive set of correlated values over time, which is where automated remote troubleshooting becomes essential, especially for teams embracing remote work and Work From Anywhere (WFA).
#### Embedded Scripts for Assistance
An extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a detailed dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool can be utilized to produce a wide range of logs, although much of the information is only relevant to wireless connectivity, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. For an *interactive* experience (even though there isn't much interaction), you can run<br>```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
