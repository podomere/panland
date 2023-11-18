---
title: "How Can I Check Mac Internet Connection"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "170.61.191.223"
date: 2023-11-18T19:35:20+00:00
draft: false
---

## Understanding the Function of Internet Addresses

When using the Internet, you will be assigned a Public IPv4 address, such as ```170.61.191.223```, or an IPv6 address, such as ```2000:a2fa:d3a1:d973:d520:8c32:1d2f:f580```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses to those who are not technologically savvy can be prone to errors and become complex. Moreover, this approach lacks historical data, particularly when addressing past issues.
## Navigating the World Wide Web
When attempting to access a website like https://harvey.co, your first step is to contact a DNS server to convert the host portion (harvey) in combination with the Top Level Domain (co) of the URL into an IP address, such as ```156.203.26.48```. Every web request from your computer and browser includes its type, such as <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways
The default gateway is typically an address that is automatically configured via DHCP. This address, such as ```192.168.90.204``` (although it generally ends in .1 or .254 based on the scope size), is where your computer sends all of its traffic for routing. For information on ```IPv6```, a comprehensive guide is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, you can check this on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.90.204    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5a47:e033:931a:5295%en0  UGcg   en0
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
domain_name_server (ip_mult): {190.112.251.155, 226.151.198.129}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e1:37:19:8a:9a:58
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr af:13:6b:d9:e6:7d
}</pre>




## Resolve Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data, the physical and data layer options include using either a wired or wireless (Wi-Fi) medium to communicate with your router.
### Effective Solutions for Apple macOS / OSX Users
Regardless of the version of OSX or macOS you are using, whether it's 10.12.9, 11.3.4, or 12.2.1, there exists a variety of troubleshooting tools. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that have adopted remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts for Troubleshooting
A helpful tool on OSX/macOS is the `sudo wdutil info`, which provides a CLI dump of current wireless settings and can be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs related to wireless issues, although most of it is only relevant to a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute the tool in the background and produce logs in `/var/tmp/<blah>.tar.gz`. To run it interactively, use `sudo /usr/bin/sysdiagnose`, though there is minimal interaction involved. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
