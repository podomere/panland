---
title: "Understand Common Wifi Router Issues"
subtitle: "Granular?"
layout: research
ip_v4_address: "84.160.10.192"
date: 2023-11-18T21:13:18+00:00
draft: false
---

## Understanding Internet Addressing

When using the internet, you are assigned a Public IPv4 address such as ```84.160.10.192``` or an IPv6 address like ```2000:142f:6ea0:5fb:1fe7:3563:b3fe:f0b7```. The website [https://test-ipv6.com/](https://test-ipv6.com/) can help you check these addresses. However, communicating these addresses, or even mentioning MAC addresses like ```07:0d:7c:e4:8a:4e```, can be challenging, especially for those unfamiliar with technology. Moreover, this method does not provide any historical data, particularly from past issues.
## Navigating Web Pages

In order to access a website such as https://larkin.biz, you initially connect to a DNS server to convert the host portion (larkin) along with the Top Level Domain (biz) of the URL, to an IP address like ```206.49.140.125```. Your computer and browser transmit its type with each web request, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways

By default, your gateway is automatically assigned through DHCP, typically ending with .1 or .254 depending on the scope size, such as ```10.251.104.234```. This is where your computer forwards all its traffic to be routed onwards. For ```IPv6```, detailed information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) can be found, and checking on Mac or Linux can be done with:

```bash
```
ip -6 route
```
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.251.104.234    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:82d1:30e9:3713:fa91%en0  UGcg   en0
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
domain_name_server (ip_mult): {160.184.88.238, 62.33.129.14}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 07:0d:7c:e4:8a:4e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr e1:4a:ed:c6:d8:8e
}</pre>




## Resolving Connectivity Issues with Wired or Wireless Networks

When it comes to transmitting data to your router at the physical and data layer, you might be using either a wired or wireless (Wi-Fi) medium.
### Troubleshooting Tips for Apple macOS / OSX
No matter which version of OSX/macOS you are currently running - whether it's ```10.11.1```, ```11.4.7```, or ```12.0.9``` - there are various tools available for troubleshooting. However, these manual actions and scripts fail to provide a series of correlated values over time. This is where automated remote troubleshooting becomes particularly valuable, especially for teams that are embracing remote work and the Work From Anywhere (WFA) concept.
#### In-Built Tools for Assistance
One extremely useful tool on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the command line interface (CLI). This tool can also be configured to generate specific logs for troubleshooting purposes. Another comprehensive option is the ```sysdiagnose``` tool, which can generate a wide range of logs, although much of it is related to wireless settings and is only a snapshot in time, similar to the wdutil tool.

To run the ```sysdiagnose``` tool in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively*, you can use  ```sudo /usr/bin/sysdiagnose``` (although there is minimal interaction). Running it without the background option should open Finder in the correct location, or you can navigate to the path ```/var/tmp``` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity><img src="https://i.ytimg.com/vi/rjE-BEVlS-0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rjE-BEVlS-0" data-lity>Hotspot 2.0   WLPC Wireless LAN Weekly EP 49</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
