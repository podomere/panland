---
title: "How Can I Troubleshoot Wifi No Access"
subtitle: "Heads Down?"
layout: research
ip_v4_address: "125.77.64.149"
date: 2023-11-18T20:59:28+00:00
draft: false
---

## Understanding IP Addressing on the Internet

When connecting to the Internet, you are assigned a Public IPv4 address, such as ```125.77.64.149```, or an IPv6 address, like ```2000:2614:edbb:3cd3:27d2:18f9:760a:e9fa```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/), but explaining them to non-technical individuals, or even referencing MAC addresses like ```fe:40:b8:58:4b:8d```, can be prone to errors and complex. Moreover, this method does not provide any historical data, particularly when addressing previous issues.
## Navigating the World Wide Web
When attempting to access a website, such as https://brekke.com, you must first contact a DNS server to convert the host portion (brekke) combined with the Top Level Domain (com) of the URL into an IP address, for example, ```251.138.28.72```. With all web requests, your computer and browser send their type, such as: 
```html
Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0
```
## The Significance of Default Gateways
Typically, your default gateway is an address automatically configured through DHCP, such as ```10.209.214.106``` (although they generally end in .1 or .254, depending on the scope size). This is where your computer sends all its traffic to be routed onwards. For ```IPv6```, in-depth instructions can be found at [/blog/how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/); however, you can verify on Mac or Linux by using:
```html
<br>
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.209.214.106    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:27a1:cadd:a8ff:c7e9%en0  UGcg   en0
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
domain_name_server (ip_mult): {62.176.177.247, 76.202.66.253}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr fe:40:b8:58:4b:8d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e1:70:38:27:3b:ff
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transferring data to your router, the physical and data layer may involve using a wired or wireless (Wi-Fi) medium.
### Troubleshooting Techniques for Apple macOS / OSX
Regardless of the version of OSX/macOS being used, whether it's 10.12.8, 11.2.7, or 12.2.2, there are various tools available for troubleshooting purposes. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes incredibly useful, especially for teams that are remote work-oriented and embrace the concept of Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One valuable tool on OSX/macOS is "sudo wdutil info," which provides a dump of current wireless related settings to the CLI and can be configured to generate specific logs for troubleshooting. Additionally, the "sysdiagnose" tool can be used to generate a wide range of logs, although many of them are point-in-time only in relation to wireless, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" in the background will write logs to "/var/tmp/<blah>.tar.gz" for you. If you prefer to run it interactively, you can run "sudo /usr/bin/sysdiagnose," which will open Finder in the correct location or allow you to navigate to "/var/tmp" or use Finder with Cmd+Shift+G to point to the path. Just keep in mind the file sizes, which are around 300MB more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity><img src="https://i.ytimg.com/vi/miRV8qDOKBE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=miRV8qDOKBE" data-lity>Apples to Apples: An Analysis of the Effects of mDNS Traffic   Bryan Ward   WLPC Phoenix 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
