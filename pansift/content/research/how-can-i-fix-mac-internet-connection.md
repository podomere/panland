---
title: "How Can I Fix Mac Internet Connection"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "108.106.71.85"
date: 2023-11-18T19:30:41+00:00
draft: false
---

## How Addressing Functions on the Internet

When using the Internet, individuals may receive a Public IPv4 address such as ```108.106.71.85``` or an IPv6 address like ```2000:889c:9cc4:150b:18ea:352:7e2:5be3```. Verification of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses, or MAC addresses such as ```0f:7d:8f:8f:80:5b```, can be complex and prone to errors, particularly for those without a technical background. Moreover, this method does not provide any historical data, especially from past issues.
## Navigating the Internet
In order to access a web page like https://kshlerin.org, an initial visit to a DNS server is required to convert the URL's host (kshlerin) combined with the Top Level Domain (org) into an IP address, such as ```103.99.171.171```. Additionally, when making web requests, your computer and browser transmit their types, for example: 
```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
Typically, a default gateway is an address configured automatically through DHCP. This results in a default gateway such as ```192.168.105.211``` (commonly ending in .1 or .254 based on scope size), to which your computer sends all traffic to be further routed. For a detailed analysis of ```IPv6```, more information can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) and Mac or Linux users can verify this with the following command:
```shell
command goes here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.105.211    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ad28:1261:9027:f97c%en0  UGcg   en0
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
domain_name_server (ip_mult): {225.6.2.14, 40.153.142.197}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0f:7d:8f:8f:80:5b
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a1:eb:60:40:c7:3d
}</pre>




## Fixing Connectivity Issues for Wired and Wireless Networks

When it comes to sending data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Steps for Apple macOS / OSX
Regardless of whether you are running OSX/macOS version ```10.15.8```, ```11.3.8```, or ```12.0.5```, there is a variety of tools available for troubleshooting. However, these tools do not provide a series of correlated values over time, which makes automated remote troubleshooting particularly useful for teams that are embracing remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts to Aid Troubleshooting
An extremely useful tool for OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI, and can also be configured to generate specific logs for troubleshooting. Additionally, the ```sysdiagnose``` tool can be used to produce a wide range of logs related to wireless issues, although most of these are point-in-time data, similar to wdutil.

To run this tool in the background and generate logs at ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can run ```sudo /usr/bin/sysdiagnose``` which will display a privacy warning. When not run in the background, it will open Finder in the correct location or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. However, be aware that the file sizes can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
