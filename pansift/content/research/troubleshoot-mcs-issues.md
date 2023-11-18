---
title: "Troubleshoot Mcs Issues"
subtitle: "Synergy?"
layout: research
ip_v4_address: "74.218.204.18"
date: 2023-11-18T21:30:00+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, individuals might have a unique Public IPv4 address like ```74.218.204.18``` or a different IPv6 address such as ```2000:3b01:f53:5ebe:961e:cf96:e6c5:369a```. These addresses can be verified from [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses to non-technical individuals, or even citing MAC addresses like ```76:97:5c:5a:7b:f1```, can be prone to errors and can become complex quite rapidly. Furthermore, this method does not offer any historical data, particularly from past issues.
## Navigating the Internet

To access a website like https://mayert-koepp.com, you initially contact a DNS server in order to convert the host section (mayert-koepp) combined with the Top Level Domain (com) of the URL to an IP address, such as ```129.120.148.201```. Your computer and browser actually include its type with all web requests, for example: <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Predefined Gateways

Your default gateway is often an automatically configured address via DHCP. You are assigned a default gateway, such as ```192.168.110.65``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer sends all its traffic to be routed to other destinations. For ```IPv6```, we cover an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can verify on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.110.65    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:86b1:1d3a:6614:23ea%en0  UGcg   en0
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
domain_name_server (ip_mult): {191.79.214.110, 143.222.87.50}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 76:97:5c:5a:7b:f1
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 98:34:61:ef:e5:94
}</pre>




## Resolving Connectivity Issues in Wired and Wireless Networks

When transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions such as ```10.11.3```, ```11.2.1```, or ```12.0.6```, there are various tools available for troubleshooting. However, these tools do not provide a series of correlated values over time, making it challenging for manual actions and scripts to be effective. In such cases, automated remote troubleshooting becomes valuable, particularly for teams who have adopted remote work and Work From Anywhere (WFA).
#### Effective Built-in Scripts
An immensely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting purposes. Alternatively, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a multitude of logs, albeit many of them being point-in-time records related to wireless, similar to wdutil.

To run ```sysdiagnose``` in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose``` and navigate to the correct location in Finder, bearing in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
