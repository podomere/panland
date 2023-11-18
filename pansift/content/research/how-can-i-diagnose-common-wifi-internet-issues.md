---
title: "How Can I DiagnOSe Common Wifi Internet Issues"
subtitle: "Bucketize It?"
layout: research
ip_v4_address: "186.18.86.206"
date: 2023-11-18T21:19:29+00:00
draft: false
---

## Understanding Internet Addressing

When connected to the Internet, your device is assigned a unique Public IPv4 address, such as ```186.18.86.206```, or an IPv6 address, like ```2000:bbc6:dd29:5bca:af44:953c:a931:3424```. You can verify this information using [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals unfamiliar with technical jargon, along with MAC addresses like ```ea:15:6a:62:2a:b9```, can be error-prone and quickly become complex. Furthermore, this method does not provide historical data, especially when past issues arise.
## Navigating the Web

Accessing a website such as https://wintheiser.name involves initially reaching out to a DNS server to convert the host portion (wintheiser) combined with the Top Level Domain (name) of the URL to an IP address, such as ```65.180.33.207```. When making web requests, your computer and browser send their type, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways

Typically, your default gateway is automatically configured through DHCP and appears as an address like ```192.168.29.55``` (usually ending in .1 or .254, depending on the scope size). This is where your computer directs all its traffic to be routed further. For ```IPv6```, you can find detailed information in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or by checking on Mac or Linux with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.29.55    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:80c7:fdf8:f6c8:1223%en0  UGcg   en0
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
domain_name_server (ip_mult): {232.89.43.207, 36.78.30.190}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ea:15:6a:62:2a:b9
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c4:a7:6d:65:76:11
}</pre>




## Fixing Connectivity Issues: Wired vs. Wireless
When it comes to sending data to your router, you have the option of using a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
Regardless of whether you are running OSX/macOS versions like ```10.11.8```, ```11.2.4```, or ```12.1.2```, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time, making automated remote troubleshooting especially valuable for teams embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
A very useful tool on OSX/macOS is ```sudo wdutil info```, which dumps current wireless related settings to the CLI and can be set up to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs, though many are only relevant to wireless at a specific point in time, similar to wdutil.

To run ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background and write logs to ```/var/tmp/<blah>.tar.gz```, or to run it *interactively* with a privacy warning using ```sudo /usr/bin/sysdiagnose```, can be helpful. Just be mindful of the file sizes, which are typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity><img src="https://i.ytimg.com/vi/ZRZhgniImZM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ZRZhgniImZM" data-lity>Next Generation Troubleshooting with Meraki Wireless   Devin Barger   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity><img src="https://i.ytimg.com/vi/NL7tJm_QIKo/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NL7tJm_QIKo" data-lity>185   Troubleshooting Wi-Fi with Jim Vajda</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity><img src="https://i.ytimg.com/vi/AJ29knJ5Rsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=AJ29knJ5Rsk" data-lity>Do You Have A Wired or Wireless Problem</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity><img src="https://i.ytimg.com/vi/s0FBo08Sw4A/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=s0FBo08Sw4A" data-lity>Solving Wi-Fi problems in record time   John Anderson   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
