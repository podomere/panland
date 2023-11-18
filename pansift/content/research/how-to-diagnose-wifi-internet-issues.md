---
title: "How To DiagnOSe Wifi Internet Issues"
subtitle: "Snackable Content?"
layout: research
ip_v4_address: "247.154.88.131"
date: 2023-11-18T20:53:24+00:00
draft: false
---

## Understanding IP Addressing

In the realm of the Internet, an individual may be assigned a Public IPv4 address, such as ```247.154.88.131```, or an IPv6 address, like ```2000:27a5:f640:add7:b801:6066:f8c5:50d9```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, attempting to relay or reference these IP addresses, as well as MAC addresses like ```91:44:a5:b7:36:57```, can be prone to mistakes and quickly become complex. Furthermore, this method does not provide any historical data, especially pertaining to past issues that may have arisen.
## Navigating the Internet

When venturing to a website, such as https://mayert.info, the first step is accessing a DNS server to convert the host portion (mayert) combined with the Top Level Domain (info) of the URL into an IP address, such as ```214.129.174.123```. Interestingly, the computer and browser reveal information about themselves with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```
## Understanding the Role of Default Gateways

The default gateway is typically automatically configured through DHCP. An example of a default gateway might be ```172.20.192.209``` (although they often end in .1 or .254 based on the scope size), and this is where a computer directs all of its traffic to be routed onward. For a comprehensive exploration of ```IPv6```, visit [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or perform checks on Mac or Linux with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.192.209    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:35a3:34da:c42b:147c%en0  UGcg   en0
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
domain_name_server (ip_mult): {253.233.1.69, 93.54.25.223}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 91:44:a5:b7:36:57
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c1:de:ff:7e:6b:9e
}</pre>




## Diagnosing Issues with Wired and Wireless Connections

When it comes to transmitting data to your router, you could be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Troubleshooting for Apple macOS / OSX Users
Irrespective of whether you are using OSX/macOS versions such as ```10.14.7```, ```11.0.3```, or ```12.3.7```, there exists an array of tools for troubleshooting. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting proves to be invaluable, especially for teams that prioritize remote work and Work From Anywhere (WFA).
#### Leveraging the Power of Built-in Scripts
A highly useful tool on OSX/macOS is the ```sudo wdutil info```, which provides a CLI dump of current wireless settings and can be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a wide range of logs, although much of it is only point-in-time in relation to wireless, just like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you prefer to run it interactively (despite the lack of interaction), you can use ```sudo /usr/bin/sysdiagnose``` and navigate to the correct location in Finder or use Cmd+Shift+G to point Finder to the path. However, be mindful of the file sizes, which are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity><img src="https://i.ytimg.com/vi/34m0u23_izY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=34m0u23_izY" data-lity>Automated Root Cause Analysis in Wireless Networks   Karan Gupta</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
