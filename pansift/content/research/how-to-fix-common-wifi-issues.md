---
title: "How To Fix Common Wifi Issues"
subtitle: "Value Proposition?"
layout: research
ip_v4_address: "124.21.240.165"
date: 2023-11-18T21:13:26+00:00
draft: false
---

## Understanding the Basics of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address, such as ```124.21.240.165```, or an IPv6 address, for example, ```2000:d8e:510d:f330:c96c:c151:89c7:aa2b```. It is possible to verify these addresses by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, it can be challenging for individuals who are not technologically inclined to convey or identify these addresses, and even MAC addresses such as ```e6:60:70:13:96:42```. Besides, there is no provision for historical data, especially when issues occurred previously.
## Navigating the Internet
Accessing a webpage like https://herman.info requires the initial interaction with a DNS server to convert the host portion (herman) combined with the Top Level Domain (info) of the URL to an IP address like ```139.178.205.248```. Furthermore, when making web requests, your computer and browser disclose their type, for instance: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Significance of Default Gateways
Ordinarily, your default gateway is an address that is configured automatically through DHCP. Typically, you will receive a default gateway such as ```10.33.209.238``` (although they generally end in .1 or .254 depending on the scope size), and this is where your computer directs all its traffic to be routed onwards. For ```IPv6```, our comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) provides detailed information, although you can also verify this on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.33.209.238    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8468:c994:6e10:c57e%en0  UGcg   en0
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
domain_name_server (ip_mult): {207.222.250.224, 189.218.185.16}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr e6:60:70:13:96:42
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 83:ef:c7:43:ca:47
}</pre>




## Solutions for Wired or Wireless Connectivity Issues
When it comes to transmitting data to your router, you may be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Strategies for Resolving Problems on Apple macOS / OSX
Irrespective of whether you are using OSX or macOS version ```10.12.8```, ```11.2.2```, or ```12.0.5```, there is a variety of troubleshooting tools available. However, they do not provide a set of correlated values over time. For this reason, automated remote troubleshooting becomes valuable, particularly for teams that adopt remote work and Work From Anywhere (WFA) practices.
#### Handy Scripts That Offer Assistance
A highly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a CLI dump of current wireless settings and can be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although most of them are specific to a particular point in time in relation to wireless, similar to wdutil.

If you want to run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, for an *interactive* (though limited interaction) experience, you can run ```sudo /usr/bin/sysdiagnose``` and it will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
