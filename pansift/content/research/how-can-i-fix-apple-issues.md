---
title: "How Can I Fix Apple Issues"
subtitle: "Snackable Content?"
layout: research
ip_v4_address: "19.31.231.214"
date: 2023-11-18T18:54:49+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the internet, you are assigned a Public IPv4 address such as ```19.31.231.214``` or an IPv6 address like ```2000:17c7:d053:9bc0:d4b5:b662:2d72:ffe8```. This can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, conveying these addresses or even referencing MAC addresses like ```7d:f9:b0:1d:08:d6``` can be prone to mistakes and can become complex quickly. Furthermore, this method does not provide any historical data, especially from past issues.
## Navigating the Internet

To access a website such as https://wilderman.org, you first connect to a DNS server to convert the host portion (wilderman) combined with the Top Level Domain (org) of the URL into an IP address like ```164.25.207.192```. Whenever there are requests for webpages, your computer and browser send their types, such as <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways

The default gateway is typically an automatically assigned address through DHCP. It could be a default gateway similar to ```192.168.110.107``` (although they usually end in .1 or .254 based on the scope size), and it is the point where your computer channels all its traffic to be routed further. For ```IPv6,``` a comprehensive guide can be found [here](/blog/how-to-fix-ipv6-connectivity/), and you can verify it on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.110.107    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9ca6:1052:cf20:49f%en0  UGcg   en0
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
domain_name_server (ip_mult): {91.17.123.154, 147.52.217.182}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 7d:f9:b0:1d:08:d6
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 6a:99:a2:7d:4a:8d
}</pre>




## Resolving Wired and Wireless Connectivity Issues
When it comes to transmitting data to your router, you might be utilizing a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Solutions for Apple macOS / OSX
Irrespective of whether you are using OSX/macOS versions like `10.13.5`, `11.4.7`, or `12.2.7`, there are numerous troubleshooting tools available. However, manual actions and scripts fail to provide a set of correlated values over time. This is where the significance of automated remote troubleshooting comes into play, particularly for teams that are inclined towards remote work and Work From Anywhere (WFA).
#### Useful Built-in Tools for Assistance
A highly beneficial tool in OSX/macOS is `sudo wdutil info`, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting purposes. In addition, the `sysdiagnose` tool offers a more comprehensive option for generating a wide range of logs, although it mainly focuses on point-in-time wireless related data similar to wdutil.

To run `sysdiagnose` in the background and generate logs in `/var/tmp/<blah>.tar.gz`, use the command `sudo nohup /usr/bin/sysdiagnose -u &`. For an interactive mode, you can run `sudo /usr/bin/sysdiagnose`, which will trigger a privacy warning and then open Finder in the correct location for you to access the logs. However, be mindful of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
