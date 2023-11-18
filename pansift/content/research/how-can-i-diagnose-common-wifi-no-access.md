---
title: "How Can I DiagnOSe Common Wifi No Access"
subtitle: "Granular?"
layout: research
ip_v4_address: "161.184.248.70"
date: 2023-11-18T21:19:38+00:00
draft: false
---

## The Function of Internet Addressing

In the realm of the Internet, individuals may be assigned a Public IPv4 address such as ```161.184.248.70``` or an IPv6 address like ```2000:7d86:ccf9:4062:58a6:5369:f626:c23```. A useful tool for checking these addresses is available at [https://test-ipv6.com/](https://test-ipv6.com/). Nonetheless, trying to convey these addresses to those not well-versed in technology, or even identifying MAC addresses like ```17:d5:96:cf:6c:f8```, can be prone to error and become complex exceedingly fast. Moreover, this method does not provide any historical data (especially from previous issues).
## Navigating the World Wide Web
In order to access a web page, like https://oreilly.org, the initial step involves accessing a DNS server to translate the host segment (oreilly) with the Top Level Domain (org) of the URL to an IP address, such as ```87.94.61.238```. Whenever your computer and browser make web requests, it sends its type along with it, for example:
```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Primary Gateways
By way of DHCP, your default gateway is typically an address that is configured automatically. You will be assigned a default gateway, such as ```192.168.148.52``` (with common endings being .1 or .254 based on the size of the scope), to which all of your computer's traffic will be sent for onward routing. As for ```IPv6```, a comprehensive examination is available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but checking on a Mac or Linux system can be done as follows:
```bash
command to check for IPv6 on Mac or Linux
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.148.52    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1bc0:8332:ea33:6ac1%en0  UGcg   en0
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
domain_name_server (ip_mult): {239.250.109.89, 98.183.153.236}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 17:d5:96:cf:6c:f8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 00:8a:70:54:11:74
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When dealing with data transmission, it is important to troubleshoot connectivity issues for both wired and wireless (Wi-Fi) mediums used to send data to your router.
### Troubleshooting Tips for Apple macOS / OSX Users
Regardless of the version of OSX/macOS being used, whether it's ```10.15.1```, ```11.5.8```, or ```12.0.5```, there are various tools available for troubleshooting connectivity problems. However, manual actions and scripts do not provide a consistent set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that have adopted remote work and Work From Anywhere (WFA) practices.
#### Utilizing Pre-Installed Scripts for Assistance
One useful tool available on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Another comprehensive tool is the ```sysdiagnose``` function, which can generate a wide range of logs (although many are only relevant to wireless connectivity, similar to wdutil).

```sudo nohup /usr/bin/sysdiagnose -u &``` can be used to run the tool in the background, while it writes logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (despite minimal interaction), you can execute the command<br>```sudo /usr/bin/sysdiagnose```, which prompts a privacy warning. When not run in the background, it should open Finder in the appropriate location, or users can navigate to ```/var/tmp``` manually or use Finder with Cmd+Shift+G to locate the path. It's important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity><img src="https://i.ytimg.com/vi/hZ2RBmOz8RE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hZ2RBmOz8RE" data-lity>Securing the World&#39;s Most Dangerous Wi-Fi Network   Colin Vallance   WLPC Phoenix 2020</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity><img src="https://i.ytimg.com/vi/v8y-r9JBhmw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=v8y-r9JBhmw" data-lity>The Importance of Broadcast/Multicast Filtering in Wi-Fi HD   Arjan Koopen   WLPC EU Budapest 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
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
