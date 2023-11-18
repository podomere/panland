---
title: "How Do You Fix Wifi No Access"
subtitle: "Immersive Experience?"
layout: research
ip_v4_address: "59.112.101.99"
date: 2023-11-18T21:03:06+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the internet, you are assigned a Public IPv4 address such as ```59.112.101.99``` or an IPv6 address like ```2000:536c:50a8:ed81:d6b0:e7bb:235b:6cfc```. It is possible to verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, and even mentioning MAC addresses like ```53:cd:d7:8e:b8:61```, can be prone to errors and become complex. Moreover, this approach does not provide any historical data, particularly when troubleshooting past issues.
## Navigating the World Wide Web
When attempting to access a web page like https://mckenzie.org, the process begins by reaching out to a DNS server to translate the host portion (mckenzie) combined with the Top Level Domain (org) into an IP address such as ```55.22.199.45```. Interestingly, every web request from your computer and browser includes its type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```.
## Significance of Default Gateways
The default gateway is usually an automatically assigned address through DHCP. It typically resembles something like ```192.0.0.172``` (although they commonly end in .1 or .254 based on the scope size) and this is where all the traffic from your computer is routed to for further processing. For ```IPv6```, we provide an in-depth discussion on the topic in [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux, you can assess this through:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.172    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:cc1a:8ecf:9665:444d%en0  UGcg   en0
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
domain_name_server (ip_mult): {162.166.27.147, 164.223.70.192}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 53:cd:d7:8e:b8:61
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr bb:43:3d:96:20:bc
}</pre>




## Addressing Issues with Wired and Wireless Connections
When transmitting data, whether it's through a wired or wireless (Wi-Fi) medium, you are operating at the physical and data layer as you send the information to your router. 
### Troubleshooting Tips for Apple macOS / OSX
Regardless of the version of OSX/macOS you are currently using - whether it's 10.15.6, 11.5.4, or 12.3.3 - there are various tools available for addressing connectivity issues. However, these manual interventions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams engaged in remote work and the Work From Anywhere (WFA) model.
#### Utilizing Built-in Tools for Assistance
One valuable tool available on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Moreover, the ```sysdiagnose``` tool offers a more comprehensive approach, allowing users to generate a wide array of logs, although many of these are only relevant to a specific point in time, similar to the wdutil tool.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will generate logs in ```/var/tmp/<blah>.tar.gz``` for you. Alternatively, running ```sudo /usr/bin/sysdiagnose``` interactively will provide a privacy warning, and it should open Finder in the correct location or allow you to navigate to ```/var/tmp```, or use Finder with Cmd+Shift+G to specify the location. It's important to note that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity><img src="https://i.ytimg.com/vi/zq5WOz06k_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=zq5WOz06k_k" data-lity>What Problem is UWB Trying to Solve with Stephen Cooper</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity><img src="https://i.ytimg.com/vi/PVa0C60HgyM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=PVa0C60HgyM" data-lity>Wireless Adjuster Certification - Do You Need It?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
