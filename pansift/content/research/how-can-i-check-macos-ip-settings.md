---
title: "How Can I Check MacOS IP Settings"
subtitle: "Buying Cycle?"
layout: research
ip_v4_address: "235.247.215.192"
date: 2023-11-18T17:44:23+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, you are allocated with a Public IPv4 address, for example, ```235.247.215.192```, or an IPv6 address such as ```2000:e515:6484:fa48:4195:5f08:ff73:2928```. You can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not technologically savvy, or even identifying MAC addresses like ```95:93:9e:2c:8b:42```, can be prone to errors and can become complicated quickly. Moreover, this does not provide any historical data, particularly when past issues occurred.
## Navigating the World Wide Web 
In order to access a website such as https://goldner-powlowski.net, you first contact a DNS server to convert the host part (goldner-powlowski) along with the URL's Top Level Domain (net), into an IP address like ```232.208.123.180```. Your computer and browser sends its type with every web request. For example, <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways
Typically, your default gateway is an address that is automatically configured through DHCP. You are assigned a default gateway such as ```192.0.0.114``` (although they usually end in .1 or .254 based on the scope size), and this is where your computer sends all its traffic to be routed further. For ```IPv6```, you can find detailed information on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). On Mac or Linux, you can check with: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.114    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d44d:c136:23d7:877d%en0  UGcg   en0
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
domain_name_server (ip_mult): {92.190.138.227, 50.50.73.3}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 95:93:9e:2c:8b:42
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 99:8f:cb:fc:a6:86
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transferring data to your router, it's important to troubleshoot issues involving both wired and wireless (Wi-Fi) mediums at the physical and data layer.
### Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS version ```10.12.6```, ```11.4.2```, or ```12.3.7```, there are various troubleshooting tools available. However, these tools may not provide a series of correlated values over time, especially for teams that rely on remote work and Work From Anywhere (WFA) setups.
#### Utilizing Pre-Installed Scripts
One convenient tool for OSX/macOS users is the ```sudo wdutil info``` command, which displays current wireless settings and can be configured to generate troubleshooting logs. Additionally, the more comprehensive ```sysdiagnose``` tool can be used to produce a wide range of logs related to wireless issues. Running it in the background with the command ```sudo nohup /usr/bin/sysdiagnose -u &``` will create logs in ```/var/tmp/<blah>.tar.gz```, while running it interactively with ```sudo /usr/bin/sysdiagnose``` will provide a privacy warning and open Finder in the correct location or allow navigation to ```/var/tmp``` using Cmd+Shift+G. Keep in mind that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
