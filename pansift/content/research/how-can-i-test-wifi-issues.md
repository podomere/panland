---
title: "How Can I Test Wifi Issues"
subtitle: "Impact Map?"
layout: research
ip_v4_address: "4.46.81.233"
date: 2023-11-18T20:59:49+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, you might be assigned a Public IPv4 address such as ```4.46.81.233``` or an IPv6 address like ```2000:7f43:5b7f:85e8:ab30:4729:afd3:ac95```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and conveying these addresses, or even referring to MAC addresses like ```a5:63:16:a2:62:42```, can be prone to errors and becomes complex. Moreover, this method does not provide historical information (especially when past issues occurred).
## Navigating the Internet

In order to access a webpage such as https://mraz.name, a DNS server is first contacted to convert the host portion (mraz) combined with the Top Level Domain (name) of the URL, to an IP address like ```84.232.228.126```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways

Typically, your default gateway is an automatically assigned address via DHCP. A common default gateway is ```192.0.0.245``` (although they usually end in .1 or .254 depending on the scope size) and this is where your computer directs all its traffic to be routed onwards. For ```IPv6``` we offer an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can verify on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.245    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1b4a:17cc:ede0:33e6%en0  UGcg   en0
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
domain_name_server (ip_mult): {221.203.32.156, 6.230.251.248}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a5:63:16:a2:62:42
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 41:61:c3:0a:37:0c
}</pre>




## Resolving Connectivity Issues - Wired vs Wireless
When it comes to transmitting data to your router, you might be using a wired connection or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Strategies for Apple macOS / OSX
Regardless of whether you are operating on OSX/macOS version ```10.11.8```, ```11.2.1```, or ```12.1.5```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that are accustomed to remote work and the concept of Work From Anywhere (WFA).
#### Utilizing the In-Built Scripts
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is time-specific in relation to wireless settings, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs that are saved to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it *interactively* (even though there isn't much interaction), you can execute<br>```sudo /usr/bin/sysdiagnose```, which will trigger a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can manually navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Just be mindful of the file sizes, which are approximately 300MB give or take.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
