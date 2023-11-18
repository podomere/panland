---
title: "How Can I Fix Mac Internet"
subtitle: "Customer Journey?"
layout: research
ip_v4_address: "90.106.200.46"
date: 2023-11-18T19:30:30+00:00
draft: false
---

## Understanding the Operation of Internet Addresses

When connected to the internet, you will be assigned a unique Public IPv4 address, for example ```90.106.200.46```, or an IPv6 address like ```2000:a2d6:ac01:58cb:23dc:f56e:8ec5:f1b1```. You can verify this assignment by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to those not well-versed in technology, and even referencing MAC addresses such as ```f3:f5:aa:e4:71:fa```, can lead to errors and complications. It is also notably lacking in historical data, especially pertaining to past issues.
## Navigating the Internet

When attempting to access a website like https://corwin.io, the first step is to contact a DNS server to convert the host section (corwin) combined with the Top Level Domain (io) of the URL to an IP address, such as ```79.166.184.204```. Notably, your computer and browser includes information about its type in each web request, for example: <br>
```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## Significance of Default Gateways

The default gateway is typically an address that is automatically configured through DHCP. An example of a default gateway is ```192.168.123.116``` (although they generally conclude with .1 or .254 depending on the scope size), which is the destination for all outgoing traffic from your computer. For guidance on configuring IPv6, a comprehensive explanation is provided in the post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but the procedure can be verified on Mac or Linux by using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.123.116    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1e3c:5727:8e51:6b95%en0  UGcg   en0
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
domain_name_server (ip_mult): {191.146.255.32, 214.5.9.77}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr f3:f5:aa:e4:71:fa
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c1:a1:9e:3b:7c:26
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data, the choice between wired or wireless (Wi-Fi) at the physical and data layer can impact your connectivity to the router.
### Troubleshooting Tips for Apple macOS / OSX
Irrespective of whether you are using OSX/macOS version ```10.14.1```, ```11.1.2```, or ```12.3.3```, there are various methods and tools available for troubleshooting connectivity issues. However, these methods and scripts do not provide a continuous stream of correlated data over time. This is where automated remote troubleshooting becomes crucial, especially for teams that operate in a remote work or Work From Anywhere (WFA) setup.
#### Utilizing Pre-installed Scripts for Assistance
A useful built-in tool for OSX/macOS is the ```sudo wdutil info``` command, which provides a detailed dump of current wireless settings in the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating a wide range of logs related to wireless connectivity, even though most of the information is only relevant at a specific point in time, similar to wdutil.

To run sysdiagnose in the background and save logs to ```/var/tmp/<blah>.tar.gz```, you can use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, to run it interactively, you can use the command ```sudo /usr/bin/sysdiagnose```, which will provide a privacy warning. When not run in the background, it should open Finder in the correct location, allowing you to access the logs or use the Finder with Cmd+Shift+G to navigate to the specific path. However, be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
