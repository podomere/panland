---
title: "Check OSX Issues"
subtitle: "Branding?"
layout: research
ip_v4_address: "100.247.40.43"
date: 2023-11-18T18:03:23+00:00
draft: false
---

## Understanding Internet Addressing

When using the internet, you are assigned a unique public IP address, such as ```100.247.40.43``` for IPv4 or ```2000:920:d2be:e5c0:7e89:9028:309d:9697``` for IPv6. You can verify your address by visiting [https://test-ipv6.com/](https://test-ipv6.com/). Explaining and relaying these long and complex addresses, as well as MAC addresses like ```24:8d:f1:bd:04:b8```, to those not well-versed in technology can prove to be challenging. Furthermore, this method lacks historical data, which is especially important when troubleshooting past issues.
## Navigating the Internet

Accessing a website, such as https://dare.name, involves contacting a DNS server to translate the URL's host section (dare) and its Top Level Domain (name) into an IP address, like ```68.175.13.187```. In addition, each web request from your computer and browser contains information about its type, such as: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## The Role of Default Gateways

Your default gateway is often automatically assigned through DHCP and typically appears as an address like ```192.0.0.68``` (although they usually end in .1 or .254, depending on the scope size). This gateway is responsible for routing all outgoing traffic from your computer. To troubleshoot IPv6 connectivity on Mac or Linux, follow our guide at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or use the command line.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.68    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:674c:9ed3:860f:50b3%en0  UGcg   en0
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
domain_name_server (ip_mult): {213.112.5.125, 176.246.126.54}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 24:8d:f1:bd:04:b8
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fc:47:54:43:21:18
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are running OSX/macOS version ```10.14.7```, ```11.3.5```, or ```12.1.4```, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time, which is crucial for remote troubleshooting, especially for teams that adopt remote work and Work From Anywhere (WFA) practices.
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings and can be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool can be used to generate a wide range of logs related to wireless, although many of these are point-in-time only, like wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, you can run ```sudo /usr/bin/sysdiagnose``` interactively, which will open Finder in the correct location. However, be cautious of the file sizes, which can be around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
