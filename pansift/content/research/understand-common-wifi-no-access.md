---
title: "Understand Common Wifi No Access"
subtitle: "Swim Lane?"
layout: research
ip_v4_address: "4.249.37.39"
date: 2023-11-18T21:13:10+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, your device may be assigned a Public IPv4 address such as ```4.249.37.39``` or an IPv6 address like ```2000:218:da67:101d:161b:c4ef:8ee9:3dad```. Verification of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses or even MAC addresses like ```b8:4e:9f:8f:b7:cf``` to individuals who are not technologically savvy can be prone to errors and quickly become complex. In addition, this method lacks historical data, particularly for past issues.
## Navigating the World Wide Web

When attempting to access a webpage such as https://heaney.info, the first step is to contact a DNS server to translate the host name (heaney) in combination with the Top Level Domain (info) of the URL to an IP address like ```170.220.59.169```. It is important to note that your computer and browser include its type with each web request, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways

The default gateway is typically a DHCP-configured address that the computer automatically obtains. The default gateway, such as ```192.0.0.161```, (often ending in .1 or .254 based on the scope size) is where the computer sends all of its traffic to be forwarded. A detailed guide on ```IPv6``` can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while Mac and Linux users can verify using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.161    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:e1c9:ab60:4940:9722%en0  UGcg   en0
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
domain_name_server (ip_mult): {160.252.36.198, 182.133.178.37}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b8:4e:9f:8f:b7:cf
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr dc:ce:e0:57:e5:3e
}</pre>




## Resolve Connection Issues for Wired and Wireless Networks

When it comes to transferring data to your router, you might be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### How to Troubleshoot on Apple macOS / OSX Devices
Regardless of whether you are using OSX/macOS versions such as `10.11.3`, `11.6.5`, or `12.0.1`, there are several troubleshooting tools available. However, these tools may not provide a consistent set of interconnected values over time, especially for teams that are adapting to remote work and Work From Anywhere (WFA).
#### Pre-Installed Scripts for Assistance
An effective tool for troubleshooting on OSX/macOS is the `sudo wdutil info`, which provides a comprehensive dump of current wireless settings to the command line interface and can also be configured to generate specific troubleshoot logs. Additionally, for a more comprehensive set of logs related to wireless issues, the `sysdiagnose` tool can be used.

To run `sysdiagnose` in the background and generate logs in `/var/tmp/<blah>.tar.gz`, use the command `sudo nohup /usr/bin/sysdiagnose -u &`. If you prefer to run it interactively, use the command `sudo /usr/bin/sysdiagnose` and follow the instructions, keeping in mind the relatively large file size of approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
