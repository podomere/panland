---
title: "How Do You Support OSX IP Settings"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "217.165.130.63"
date: 2023-11-18T18:34:05+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, you receive a Public IPv4 address, such as ```217.165.130.63```, or an IPv6 address, such as ```2000:3c6d:880e:bf4d:c9d8:e5d9:c8f9:b52a```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, conveying these addresses or MAC addresses, like ```61:3f:18:90:5b:ae```, can be prone to errors and quickly become complicated. Moreover, it does not provide any historical data, especially when historical issues arise.
## Navigating the Internet
To visit a webpage, such as https://beatty.biz, you start by accessing a DNS server to convert the host portion (beatty) combined with the Top Level Domain (biz) of the URL into an IP address, for example, ```139.5.148.235```. Your computer and browser also transmit their type with all web requests, such as <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## The Significance of Default Gateways
Typically, your default gateway is an address configured automatically via DHCP. You receive a default gateway, such as ```192.168.175.236``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer directs all its traffic to be forwarded. For ```IPv6```, we provide an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can check it on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.175.236    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c048:d0da:7367:7857%en0  UGcg   en0
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
domain_name_server (ip_mult): {94.121.192.45, 142.26.72.176}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 61:3f:18:90:5b:ae
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 28:14:d3:96:4f:af
}</pre>




## Troubleshooting Connectivity Issues
When it comes to transmitting data to your router, you might be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Resolving Connection Problems on Apple Devices
Regardless of whether you are running MacOS or OSX version ```10.14.9```, ```11.0.9```, or ```12.1.7```, there are various tools available for troubleshooting. However, these manual methods and scripts do not provide a continuous stream of correlated values over time. This is where automated remote troubleshooting becomes crucial, especially for remote work and Work From Anywhere (WFA) situations.
#### Utilizing In-Built Scripts for Assistance
An extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs (although many are only relevant to wireless at a specific point in time, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (even though there isn't much interaction), you can use ```sudo /usr/bin/sysdiagnose```, which will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
