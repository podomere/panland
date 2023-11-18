---
title: "How Do You Test Wifi Internet Issues"
subtitle: "Rubber Meets The Road?"
layout: research
ip_v4_address: "119.53.240.165"
date: 2023-11-18T21:05:19+00:00
draft: false
---

## Functioning of Internet Addressing

When connected to the Internet, you may be assigned a Public IPv4 address such as ```119.53.240.165``` or an IPv6 address like ```2000:1453:c60b:2647:7a22:2745:3c26:1021```. This can be confirmed at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses to non-technical individuals, or even referencing MAC addresses like ```ed:12:b7:da:3b:27```, can be prone to errors and become complex. Furthermore, it does not provide any historical data, particularly regarding past issues.
## Navigating the World Wide Web
To access a webpage such as https://walter-gulgowski.io, the first step is to connect to a DNS server to convert the host portion (walter-gulgowski) combined with the Top Level Domain (io) of the URL into an IP address like ```147.10.70.8```. Your computer and browser include its type with every web request, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways
The default gateway is typically an address that is automatically configured via DHCP. A typical default gateway appears as ```10.165.250.131``` (although they usually end in .1 or .254 depending on the scope size) and is responsible for routing all of your computer's traffic. For ```IPv6```, a detailed explanation is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but can be verified on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.165.250.131    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:4a8f:ccc6:36d4:d10d%en0  UGcg   en0
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
domain_name_server (ip_mult): {18.151.17.114, 181.115.48.251}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ed:12:b7:da:3b:27
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 68:90:cc:86:cd:11
}</pre>




## Troubleshooting Connectivity Issues
When it comes to establishing a connection, whether wired or wireless, you may encounter issues at the physical and data layers. This can impact the transmission of data to your router, leading to connectivity issues.
### Resolving Connectivity Problems on Apple Devices
Regardless of the version of macOS you are using, whether it's 10.14.9, 11.4.3, or 12.3.3, there are various troubleshooting tools available. However, these manual processes and scripts may not provide a comprehensive overview of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams engaged in remote work and the Work From Anywhere (WFA) approach.
#### Useful Built-in Scripts
A valuable tool on macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the command line interface. It can also be configured to generate specific logs for troubleshooting purposes. In addition, the `sysdiagnose` tool offers a more comprehensive option for generating a wide range of logs, although it mainly captures point-in-time wireless data similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will create logs in `/var/tmp/<blah>.tar.gz` for you. Alternatively, if you prefer to run it interactively, you can use the command `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When run interactively, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
