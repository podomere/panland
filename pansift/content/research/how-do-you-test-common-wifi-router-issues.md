---
title: "How Do You Test Common Wifi Router Issues"
subtitle: "Etc. Etc.?"
layout: research
ip_v4_address: "76.117.52.132"
date: 2023-11-18T21:26:19+00:00
draft: false
---

## Understanding Internet Addressing Mechanism

When connecting to the Internet, you are assigned a unique public IPv4 address, such as ```76.117.52.132```, or an IPv6 address, such as ```2000:ac63:be25:566b:dd14:c46d:39a8:a266```. Verification of these addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, including MAC addresses like ```d6:c9:fd:d5:ec:95```, becomes error-prone and complex, especially for non-technical users. There is also a lack of historical data, particularly relating to past issues.
## Navigating the World Wide Web

To access a web page like https://cummerata-hermann.name, your computer initially contacts a DNS server to translate the combination of the host segment (cummerata-hermann) and the Top Level Domain (.name) of the URL into an IP address, such as ```181.118.255.177```. Furthermore, every web request from your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Significance of Default Gateways

The default gateway is typically an automatically assigned address via DHCP, such as ```10.139.144.50``` (usually ending in .1 or .254 based on the scope size). This is where your computer forwards all its traffic for further routing. For IPv6, detailed guidance on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available. Additionally, you can check this on Mac or Linux through:

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.139.144.50    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8fbc:bbce:6173:ec8f%en0  UGcg   en0
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
domain_name_server (ip_mult): {102.102.232.156, 158.57.42.91}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d6:c9:fd:d5:ec:95
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 57:c8:01:54:43:5d
}</pre>




## Help with Connectivity Issues
When it comes to transmitting data at the physical and data layer, you might encounter issues with your wired or wireless (Wi-Fi) medium. This can impact the connection to your router and cause connectivity issues.
### Solutions for Apple macOS / OSX Users
Regardless of the version of OSX/macOS you are using, whether it's ```10.14.5```, ```11.3.4```, or ```12.1.2```, there are a variety of troubleshooting tools available. However, these tools may not provide a series of correlated values over time, which is essential for effective troubleshooting. This is where automated remote troubleshooting becomes valuable, especially for teams engaged in remote work and Work From Anywhere (WFA).
#### Effective Built-in Scripts for Troubleshooting
One valuable tool for OSX/macOS users is the ```sudo wdutil info```, which provides a dump of the current wireless related settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a variety of logs, although much of it is point-in-time related to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz```. For an *interactive* experience, users can run ```sudo /usr/bin/sysdiagnose``` and navigate to the correct location in Finder, or use Finder with Cmd+Shift+G to locate the path. Be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity><img src="https://i.ytimg.com/vi/5sSjGo2DZHc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5sSjGo2DZHc" data-lity>WiFiShark Fu   Eddie Forero   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
