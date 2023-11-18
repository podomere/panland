---
title: "How To Check Common Wifi Connectivity"
subtitle: "Snackable Content?"
layout: research
ip_v4_address: "227.164.187.3"
date: 2023-11-18T21:16:26+00:00
draft: false
---

## Understanding Internet Addressing

When you're on the Internet, you are assigned a unique address such as ```227.164.187.3``` for IPv4 or ```2000:cafa:f51f:7956:d130:bb71:b6a5:503d``` for IPv6. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, as well as MAC addresses like ```b0:cf:7e:54:cb:c6```, to individuals who are not familiar with technology can be prone to errors and can become complex. Moreover, this method does not provide historical data, especially when previous issues occurred.
## Navigating the World Wide Web
Accessing a website like https://kessler-marvin.co involves initially accessing a DNS server to convert the host portion (kessler-marvin) combined with the Top Level Domain (co) of the URL to an IP address such as ```194.66.184.65```. Furthermore, your computer and browser send information regarding their type with each web request, as exemplified by ```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Significance of Default Gateways
Your default gateway is typically an automatically assigned address via DHCP. This address, for example ```10.71.1.69``` (commonly ending in .1 or .254 based on the scope size), is where your computer routes all of its traffic. For ```IPv6```, a detailed explanation can be found [here](/blog/how-to-fix-ipv6-connectivity/), and can be checked on Mac or Linux using the following command:
```bash
$ ip -6 route show
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.71.1.69    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8b00:f373:f8fc:596f%en0  UGcg   en0
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
domain_name_server (ip_mult): {47.70.128.147, 36.170.27.193}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b0:cf:7e:54:cb:c6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ee:46:01:83:e9:c9
}</pre>




## Solutions for Resolving Wired and Wireless Connectivity Issues

When it comes to transmitting data to your router, it's essential to troubleshoot problems that may arise at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) medium.
### Strategies for Addressing Issues on Apple macOS / OSX

Regardless of whether you are running ```10.14.5```, ```11.0.2```, or ```12.3.2```, there are various tools available for troubleshooting on OSX/macOS. However, these manual actions and scripts do not provide a series of correlated values over time, which can be crucial for identifying and solving connectivity issues, particularly for remote work and Work From Anywhere (WFA) scenarios.
#### Utilizing Pre-Installed Scripts for Assistance

A valuable tool for troubleshooting wireless issues on OSX/macOS is the ```sudo wdutil info```, which provides a dump to the CLI of current wireless settings. Additionally, the more comprehensive ```sysdiagnose``` tool can be used to generate a wide range of logs, although many of these are only applicable to a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive experience, use the command ```sudo /usr/bin/sysdiagnose``` but be mindful of the large file sizes, reaching approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
