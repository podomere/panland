---
title: "How Do You Fix MacOS Internet"
subtitle: "Deep Dive?"
layout: research
ip_v4_address: "104.87.219.230"
date: 2023-11-18T17:48:37+00:00
draft: false
---

## An Overview of Internet Addressing

When you connect to the Internet, your device is assigned a unique address, such as ```104.87.219.230``` or ```2000:b779:ee0b:699b:b084:e030:6af5:8071```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses or referring to MAC addresses like ```3c:53:74:95:8e:09``` to individuals who are not technologically inclined can be prone to errors and quickly become complex. Furthermore, this method does not provide any historical data.
## Navigating Websites
When attempting to visit a webpage, such as https://pouros.io, your device first consults a DNS server to convert the host name (pouros) and the website's Top Level Domain (io) into an IP address, such as ```24.104.30.129```. Additionally, your computer and browser send detailed information with every web request, such as the type of browser being used: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Understanding the Significance of Default Gateways
The default gateway, typically obtained through DHCP, is an automatically assigned address, such as ```192.168.192.77``` (although they often end in .1 or .254 based on the scope size), to which your computer forwards all of its outgoing traffic. For troubleshooting ```IPv6``` connectivity issues, detailed information can be found in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux systems, the default gateway can be checked using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.192.77    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:8019:1c5a:1765:9265%en0  UGcg   en0
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
domain_name_server (ip_mult): {46.212.24.191, 167.230.255.139}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3c:53:74:95:8e:09
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a8:c7:d0:aa:9a:08
}</pre>




## Fixing Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you may be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Troubleshooting on Apple macOS / OSX
No matter which version of OSX/macOS you have, whether it's ```10.11.7```, ```11.5.6```, or ```12.3.3```, there are various methods for troubleshooting. However, these manual processes and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, especially for teams that are transitioning to remote work and embracing Work From Anywhere (WFA).
#### Useful Built-in Scripts
One helpful tool on OSX/macOS is the ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can also generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool can be used to generate a wide range of logs (although much of it is only relevant in relation to wireless, similar to wdutil).

To run it in the background and have logs written to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it *interactively* (although there is minimal interaction), you can use the command<br>```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
