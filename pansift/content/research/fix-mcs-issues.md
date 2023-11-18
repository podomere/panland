---
title: "Fix Mcs Issues"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "108.162.8.162"
date: 2023-11-18T21:28:35+00:00
draft: false
---

## Understanding the Functioning of Internet Addresses

When using the Internet, you may have a Public IPv4 address such as ```108.162.8.162``` or an IPv6 address like ```2000:7b48:5d72:e633:6a4e:6233:b033:a17a```. It is possible to verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, it can be difficult for individuals who are not technology-savvy to convey these addresses, or even refer to MAC addresses such as ```a9:04:b0:a5:8d:26```. Furthermore, this method does not provide any historical information, particularly related to previous issues.
## Navigation on the World Wide Web

When attempting to access a website like https://wyman.io, the first step involves contacting a DNS server to convert the host name (wyman) along with the Top Level Domain (io) of the URL to an IP address, for example ```126.38.173.73```. In all web requests, your computer sends its type, for instance <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```.
## Significance of Default Gateways

Typically, your default gateway is an address that is automatically configured through DHCP. This address, such as ```192.168.37.137``` (although they often end in .1 or .254 based on the scope size), is where your computer routes all of its traffic. For ```IPv6```, detailed instructions can be found in the article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and this can be checked on Mac or Linux using the following command.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.37.137    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1c6b:f2d9:d447:e120%en0  UGcg   en0
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
domain_name_server (ip_mult): {107.47.229.15, 191.254.59.62}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a9:04:b0:a5:8d:26
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c0:57:c7:79:32:6c
}</pre>




## Resolving Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you may be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions such as 10.14.5, 11.2.4, or 12.2.1, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time, making automated remote troubleshooting a valuable option, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts to Assist
A valuable tool for OSX/macOS users is the `sudo wdutil info` command, which provides a dump to the CLI of current wireless settings and can be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs related to wireless (although most are point-in-time only, similar to wdutil).

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for the user. Alternatively, you can run `sudo /usr/bin/sysdiagnose` interactively, which will provide a privacy warning and open Finder in the correct location. Users can also navigate to `/var/tmp` or use Finder with Cmd+Shift+G to navigate to the path, keeping in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
