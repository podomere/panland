---
title: "Fix Wifi No Access"
subtitle: "Granular?"
layout: research
ip_v4_address: "241.43.4.69"
date: 2023-11-18T20:47:03+00:00
draft: false
---

## Understanding Internet Addressing
When connecting to the Internet, you are assigned a Public IPv4 address, such as ```241.43.4.69```, or an IPv6 address, such as ```2000:711f:ea52:e0f4:a68:521e:f479:45ad```. You can verify your address by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or MAC addresses like ```22:12:e6:0f:f9:a2```, can be complex and error-prone, especially for those unfamiliar with technical jargon. Furthermore, this method does not provide any historical data, particularly during previous issues.
## Navigating the World Wide Web
Accessing a webpage such as https://morar.biz involves initially contacting a DNS server to translate the host portion (morar) and the Top Level Domain (biz) of the URL into an IP address, like ```201.26.177.119```. Your computer and browser include important information with each web request, for example:
```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Significance of Default Gateways
The default gateway is typically an automatically configured address obtained via DHCP, such as ```172.31.164.180``` (usually ending in .1 or .254 depending on the scope size). This gateway is where your computer sends all its traffic to be routed onwards. For detailed guidance on ```IPv6``` connectivity, read our in-depth article on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). To check on Mac or Linux, use the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.31.164.180    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a29a:9852:9870:a91f%en0  UGcg   en0
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
domain_name_server (ip_mult): {110.229.6.181, 221.193.23.117}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 22:12:e6:0f:f9:a2
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 99:8e:5a:69:86:ae
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of which version of OSX/macOS you are running - whether it's 10.12.8, 11.0.5, or 12.0.7 - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that are embracing remote work and Work From Anywhere (WFA) setups.
#### Useful Built-in Scripts
One invaluable tool on OSX/macOS is "sudo wdutil info," which provides a dump of current wireless settings to the CLI and can be configured to generate specific logs for troubleshooting. Furthermore, the "sysdiagnose" tool can be used to generate a wide variety of logs, although much of it is only relevant to a specific point in time in relation to wireless, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" will execute the tool in the background and write logs to "/var/tmp/<blah>.tar.gz." If you prefer to run it interactively, you can use "sudo /usr/bin/sysdiagnose," which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to "/var/tmp" or use Finder with Cmd+Shift+G to locate the path. However, be cautious of the file sizes, as they can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity><img src="https://i.ytimg.com/vi/1G4qihqHZJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1G4qihqHZJ0" data-lity>Bad Wi-Fi? Are you SURE it&#39;s a wireless problem? Here&#39;s how to find out</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity><img src="https://i.ytimg.com/vi/9RzmyNRK9e4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=9RzmyNRK9e4" data-lity>Wireless Packet Captures with Multiple Adapters   Yer Yang   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
