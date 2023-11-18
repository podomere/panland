---
title: "How Do You Fix Common Wifi Issues"
subtitle: "Heavy Lifting?"
layout: research
ip_v4_address: "59.244.70.4"
date: 2023-11-18T21:23:32+00:00
draft: false
---

## Understanding IP Addressing on the Internet

When using the Internet, you are assigned a Public IPv4 address, such as ```59.244.70.4```, or an IPv6 address like ```2000:f436:23dd:36c5:58b0:573e:791c:da76```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not technologically savvy, or even specifying MAC addresses like ```2b:ca:f0:1a:e7:db```, can be prone to errors and quickly becomes complicated. Moreover, this method does not provide any historical data, particularly when addressing past issues.
## Navigating the World Wide Web

To access a webpage like https://okon-harvey.io, you initially contact a DNS server in order to translate the host portion (okon-harvey) in combination with the Top Level Domain (io) of the URL into an IP address, such as ```50.245.128.5```. When making web requests, your computer and browser actually sends its type - for example: 
<br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways

Typically, your default gateway is an automatically configured address that is assigned through DHCP. You will receive a default gateway such as ```192.0.0.155```, although they generally end in .1 or .254 depending on the scope size, and this is where your computer routes all its traffic to be forwarded. For ```IPv6```, detailed information on checking on Mac or Linux can be found in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.155    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:5740:81de:77e6:9cfa%en0  UGcg   en0
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
domain_name_server (ip_mult): {24.160.245.203, 90.252.7.211}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 2b:ca:f0:1a:e7:db
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 0f:af:95:05:a7:6e
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks

When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Methods for Apple macOS / OSX Users
No matter which version of OSX/macOS you have, whether it's ```10.14.8```, ```11.0.6```, or ```12.3.8```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time, which is crucial for effective troubleshooting. This is where automated remote troubleshooting becomes essential, especially for teams that operate with a remote work and Work From Anywhere (WFA) approach.
#### Effective Built-in Scripts for Troubleshooting
One extremely useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings to the command line interface, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, although much of it is point-in-time data related to wireless, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the tool in the background and write logs to ```/var/tmp/<blah>.tar.gz```. If you prefer to run it interactively, you can use ```sudo /usr/bin/sysdiagnose```, which will issue a privacy warning. When not run in the background, it should open Finder in the correct location, where you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the files. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity><img src="https://i.ytimg.com/vi/npVezI4l7tA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=npVezI4l7tA" data-lity>Real World Protocol Analysis   Peter Mackenzie   WLPC_EU Lisbon 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity><img src="https://i.ytimg.com/vi/p_K9xHxFM8Y/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=p_K9xHxFM8Y" data-lity>IEEE 802 11kvr   Perry Correll   WLPC Phoenix 2019</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
