---
title: "How Do You Check Common Wifi Connectivity"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "82.210.209.130"
date: 2023-11-18T21:26:35+00:00
draft: false
---

## Understanding Internet Addressing

When it comes to the internet, you are assigned a Public IPv4 address such as ```82.210.209.130``` or an IPv6 address like ```2000:857c:7a6b:d1de:eb9c:c387:404a:90de```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, communicating these addresses, or even referencing MAC addresses like ```87:6c:36:2a:cd:2c```, can be challenging for those unfamiliar with the technical aspects. Furthermore, this method does not provide any historical data, especially regarding past issues.
## Navigating the World Wide Web

When attempting to access a web page such as https://walker-conroy.com, your computer first contacts a DNS server to translate the host portion (walker-conroy) in combination with the Top Level Domain (com) of the URL into an IP address like ```20.137.236.207```. Each web request from your computer and browser includes detailed information, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## The Significance of Default Gateways

Your default gateway is typically assigned automatically through DHCP and may appear as an address like ```10.10.192.255``` (though they usually end in .1 or .254 depending on the scope size). This is where your computer directs all its traffic to be routed onwards. We offer detailed instructions for checking the default gateway on Mac or Linux in our blog post: [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/)
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.10.192.255    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:feb4:a771:7fc9:706d%en0  UGcg   en0
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
domain_name_server (ip_mult): {203.138.110.138, 35.63.15.112}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 87:6c:36:2a:cd:2c
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ac:e1:84:fb:93:44
}</pre>




## Fixing Connectivity Issues with Wired and Wireless Network

When transferring data to your router, it's important to troubleshoot any issues that may arise with both wired and wireless (Wi-Fi) connections at the physical and data layer.
### Steps to Resolve Network Problems on Apple macOS / OSX
Regardless of the version of OSX/macOS you are using, whether it's ```10.14.5```, ```11.5.5```, or ```12.0.8```, there are various tools available for troubleshooting network connectivity. However, these tools often lack the ability to provide continuous correlated values over time. This is where automated remote troubleshooting becomes invaluable, particularly for teams that operate in a remote or Work From Anywhere (WFA) environment.
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed output of current wireless settings through the CLI. This command can also be configured to generate specific logs for troubleshooting purposes. Moreover, the ```sysdiagnose``` tool offers a more comprehensive approach, producing a wide range of logs, although many are only relevant to a specific point in time, similar to wdutil.

To run sysdiagnose in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an interactive (albeit minimal interaction) experience, use the command ```sudo /usr/bin/sysdiagnose``` and follow the prompts. Be mindful of the large file sizes, typically around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity><img src="https://i.ytimg.com/vi/XIgyJ0f8Zl4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=XIgyJ0f8Zl4" data-lity>Wi Fi Issues in the Wild   Gopinath K.N.   WLPC Phoenix 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity><img src="https://i.ytimg.com/vi/Xf7gieMiqGU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Xf7gieMiqGU" data-lity>WIDS/WIPS / Reseller FAQ   WLPC Wireless LAN Weekly EP 14</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity><img src="https://i.ytimg.com/vi/wNBRINpizoU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=wNBRINpizoU" data-lity>Troubleshooting in Higher Ed   Stefan Kronawithleitner   WLPC Prague 2023</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity><img src="https://i.ytimg.com/vi/kBEcRYe9gRw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kBEcRYe9gRw" data-lity>Wi-Fi diagnostics built into MacOS you might not be aware of</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
