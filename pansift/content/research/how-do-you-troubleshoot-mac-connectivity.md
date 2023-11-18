---
title: "How Do You Troubleshoot Mac Connectivity"
subtitle: "Rubber Meets The Road?"
layout: research
ip_v4_address: "8.16.101.106"
date: 2023-11-18T19:40:58+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, you are assigned a Public IPv4 or IPv6 address. For example, a Public IPv4 address looks like ```8.16.101.106``` and an IPv6 address looks like ```2000:e044:aead:47c5:e7ac:cffb:5ec5:163f```. If you want to check your address, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, trying to communicate or use MAC addresses such as ```48:f4:25:46:f7:ff``` can be confusing and prone to errors, especially for those who are not tech-savvy. Moreover, this method does not provide any historical data, particularly for past issues.
## Navigating the Internet

When you want to access a web page, such as https://mclaughlin.com, your computer first contacts a DNS server to translate the host part (mclaughlin) and the Top Level Domain (com) of the URL into an IP address, such as ```106.27.158.202```. Additionally, your computer and browser send information about its type along with all web requests, for example: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways

The default gateway is typically an address assigned automatically via DHCP. For example, you might receive a default gateway like ```172.23.15.34``` (although they usually end in .1 or .254 depending on the scope size). This is the address where your computer sends all its traffic to be routed onwards. If you want to check your default gateway on Mac or Linux, you can perform a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/).
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.23.15.34    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:60ee:4db6:26e1:eaf4%en0  UGcg   en0
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
domain_name_server (ip_mult): {178.158.169.149, 173.13.129.125}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 48:f4:25:46:f7:ff
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 58:94:1c:2d:74:44
}</pre>




## Resolving Wired or Wireless Connectivity Issues
When it comes to transferring data to your router, you may encounter issues at the physical and data layer, whether you are using a wired or wireless (Wi-Fi) connection.
### Tips for Apple macOS / OSX Users
Regardless of which version of OSX/macOS you are running - whether it's ```10.11.2```, ```11.2.2```, or ```12.1.6``` - there are various troubleshooting tools available. However, these manual actions and scripts may not provide a consistent set of values over time. This is where automated remote troubleshooting proves to be especially valuable, especially for organizations that have adopted remote work and Work From Anywhere (WFA) policies.
#### Useful Scripts Integrated into the System
One useful tool for OSX/macOS users is the ```sudo wdutil info``` command, which provides a dump of current wireless settings via the CLI and can also be configured to generate specific troubleshooting logs. Furthermore, the ```sysdiagnose``` tool can be utilized to generate a wide range of logs, although many of these are only related to wireless issues, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For interactive use, you can run ```sudo /usr/bin/sysdiagnose```, which will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Cmd+Shift+G in Finder. Keep in mind that the file sizes will be around 300MB or so.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
