---
title: "How Can I Check Wifi Router Issues"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "14.134.218.240"
date: 2023-11-18T21:01:05+00:00
draft: false
---

## Explanation of IP Addressing

When you use the Internet, you are provided with a Public IPv4 address, for example, ```14.134.218.240```, or an IPv6 address, such as ```2000:19a6:524c:4b8a:b814:5ed3:3a7a:932a```. To verify this information, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not well-versed in technology, conveying and working with such addresses, as well as MAC addresses, like ```3d:9c:0c:f0:8f:e4```, can be prone to errors and quickly becomes complex. Furthermore, this method does not provide any historical data, especially for past issues.
## Website Accessing Process

In order to access a website such as https://wiza-morar.net, you first communicate with a DNS server to convert the host part (wiza-morar) combined with the Top Level Domain (net) of the URL into an IP address, for example, ```104.241.139.189```. Your computer and browser include its type with every web request, such as: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

Your default gateway is typically an address configured automatically through DHCP, such as ```192.168.101.154``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer directs all its traffic for further routing. For ```IPv6```, more information can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can also check on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.101.154    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:52d2:26fd:9316:c68b%en0  UGcg   en0
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
domain_name_server (ip_mult): {186.140.164.154, 81.129.243.197}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3d:9c:0c:f0:8f:e4
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 51:b9:4e:34:1b:84
}</pre>




## Diagnosing and Resolving Connection Issues - Wired and Wireless
When it comes to sending data to your router, you may be using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Trouble-shooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.15.9```, ```11.2.5```, or ```12.0.6```, there are various tools available for diagnosing and resolving issues. However, these manual actions and scripts do not provide a series of correlated values over time, which is where automated remote troubleshooting can be particularly useful, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides current wireless-related settings and can be configured to generate specific logs for troubleshooting purposes. Another comprehensive tool is the ```sysdiagnose``` tool, which can generate a wide range of logs, although much of it is point-in-time data in relation to wireless, similar to wdutil. 

To run sysdiagnose in the background and write logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For interactive use, run the command ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning and open Finder in the correct location or allow you to navigate to ```/var/tmp``` using Cmd+Shift+G. Be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
