---
title: "How To Fix Wifi No Access"
subtitle: "Home Stretch?"
layout: research
ip_v4_address: "205.61.238.250"
date: 2023-11-18T20:52:45+00:00
draft: false
---

## The Functioning of Internet Addressing

When accessing the Internet, you may be assigned a Public IPv4 address, such as ```205.61.238.250```, or an IPv6 address, like ```2000:802e:6780:4196:72e:49a2:a817:56b0```. The verification of this can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not technologically savvy, attempting to communicate these addresses, or even know the MAC addresses like ```f0:8d:81:ce:03:4a```, can be prone to errors and become complex. Furthermore, this process does not provide any historical data, especially during past issues.
## Navigating the Internet
Accessing a webpage, such as https://turcotte.info, initially requires accessing a DNS server to translate the host part, "turcotte," combined with the Top-Level Domain, "info," of the URL into an IP address, such as ```184.196.106.0```. Your computer and browser transmit their types with all web requests, for example:
`Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36`
## Understanding the Significance of Default Gateways
Typically, your default gateway is an automatically configured address via DHCP, such as ```172.27.233.77``` (usually ending in .1 or .254 based on scope size). This is where your computer directs all its traffic for further routing. A detailed guide on how to fix IPv6 connectivity can be found on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can check on Mac or Linux by using:
```bash
ip -6 route
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.233.77    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c1c6:d5bd:e140:6eaf%en0  UGcg   en0
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
domain_name_server (ip_mult): {87.65.131.216, 165.15.31.120}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f0:8d:81:ce:03:4a
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ab:70:ae:6f:ba:f0
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transferring data at the physical and data layer, there are two options: wired or wireless (Wi-Fi) mediums. Both have their own set of challenges, so it's important to troubleshoot and fix any problems that may arise.
### Tips for Apple macOS / OSX Users
No matter which version of OSX/macOS you're using - whether it's ```10.12.4```, ```11.3.2```, or ```12.1.2``` - there are several tools available for troubleshooting connectivity issues. While manual actions and scripts can help, they don't always provide a comprehensive view of the problem over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that work remotely or have a "Work From Anywhere" (WFA) policy.
#### Useful Built-in Scripts
One valuable tool for OSX/macOS users is the ```sudo wdutil info``` command, which displays current wireless settings and can also generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool is more comprehensive and can generate a wide range of logs related to connectivity issues, although much of the information is only relevant at a specific point in time, similar to wdutil.

To run sysdiagnose in the background and save the logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run sysdiagnose interactively, you can run ```sudo /usr/bin/sysdiagnose```, but be aware that the file sizes can be around 300MB.

<br><br>
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
