---
title: "Troubleshoot MacOS Issues"
subtitle: "Tee It Up?"
layout: research
ip_v4_address: "27.155.210.29"
date: 2023-11-18T22:22:30+00:00
draft: false
---

## How Ip Addressing is Functioning

When using the Internet, you may receive a Public IPv4 address, for example like ```27.155.210.29```, or an IPv6 address such as ```2000:9406:7acb:9cbd:cf6d:dce9:bbbb:f099```. You can verify this at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not tech-savvy, communicating these addresses, or even mentioning MAC addresses like ```30:28:21:3e:c0:42```, can quickly become error-prone and complicated. Moreover, this does not provide any historical data, especially when dealing with past issues.
## Browsing the Web and the Process of Lookups

When accessing a website like https://kessler.co, you initially connect to a DNS server to convert the host portion (kessler) combined with the Top Level Domain (co) of the URL to an IP address, for example like ```24.249.36.82```. Your computer and browser sends its type with all web requests, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```.
## The Significance of Default Gateways

The default gateway is typically an automatically configured address through DHCP. You will receive a default gateway, for instance like ```192.0.0.79``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, detailed instructions can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can check on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.79    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:613:1f4d:6039:a8f3%en0  UGcg   en0
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
domain_name_server (ip_mult): {203.17.221.155, 240.104.132.162}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 30:28:21:3e:c0:42
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d1:b0:cd:46:31:c4
}</pre>




## Solutions for Wired and Wireless Connectivity Issues

When it comes to transmitting data to your router, you can use either a wired or wireless (Wi-Fi) medium at the physical and data layers.
### Steps for Troubleshooting on Apple macOS / OSX
No matter which version of OSX/macOS you are currently running - whether it's ```10.14.7```, ```11.1.6```, or ```12.0.3``` - there are various tools available for troubleshooting connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting proves to be invaluable, especially for remote work and Work From Anywhere (WFA) teams.
#### Utilizing Built-in Commands and Scripts
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Furthermore, the ```sysdiagnose``` tool offers a more comprehensive range of logs (though much of it is only relevant at a specific point in time, similar to wdutil).

To run sysdiagnose in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, use ```sudo /usr/bin/sysdiagnose```, but be aware of the large file sizes, around 300MB more or less.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
