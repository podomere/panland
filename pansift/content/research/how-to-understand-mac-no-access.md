---
title: "How To Understand Mac No-access"
subtitle: "Get A Pulse On?"
layout: research
ip_v4_address: "36.142.2.17"
date: 2023-11-18T19:29:57+00:00
draft: false
---

## Demystifying Internet Addressing

When connecting to the Internet, you are assigned a Public IPv4 address like ```36.142.2.17``` or an IPv6 address like ```2000:566e:6680:b044:8f9a:f992:e9cc:51e4```. The verification of these addresses can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, relaying these addresses or even the MAC addresses like ```35:92:6f:c6:d4:a0``` can be prone to errors and can become complicated in a short span of time. Moreover, this method does not provide any historical data, particularly when past issues need to be referred to.
## Navigating the World Wide Web
When attempting to reach a website, such as https://stokes-kunde.net, you first connect to a DNS server to convert the host portion (stokes-kunde) in combination with the Top Level Domain (net) of the URL into an IP address like ```130.81.63.58```. Every time your computer and browser sends a web request, it includes its type, for example, <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways
Ordinarily, your default gateway is an automatically configured address through DHCP. A default gateway such as ```172.21.56.48``` (although they typically end in .1 or .254, depending on the scope size) is where your computer directs all its traffic to be routed further. For IPv6, a detailed guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can check on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.56.48    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3962:9564:a7f1:b0aa%en0  UGcg   en0
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
domain_name_server (ip_mult): {57.89.252.244, 106.182.245.151}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 35:92:6f:c6:d4:a0
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 74:d8:e2:6c:0b:45
}</pre>




## Addressing Connectivity Issues in Wired and Wireless Networks

When it comes to data transmission, you may opt for either a wired or wireless (Wi-Fi) medium to connect to your router at the physical and data layer.
### Tips and Tricks for Resolving Network Problems on Apple macOS

No matter which version of OSX or macOS you are currently using, whether it's ```10.11.6```, ```11.6.5```, or ```12.1.5```, there are various troubleshooting tools at your disposal. However, these manual methods and scripts often fail to provide a comprehensive set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that adopt remote work and the Work From Anywhere (WFA) approach.
#### Leveraging the Power of Built-in Scripts

One of the most useful tools for OSX/macOS users is the ```sudo wdutil info``` command, which provides a detailed report of current wireless settings via the CLI. Additionally, the ```sysdiagnose``` tool offers a more comprehensive solution by generating a wide range of logs, although many of these logs are only relevant to the wireless aspect, similar to wdutil.

To run sysdiagnose in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, you can use the following command: ```sudo nohup /usr/bin/sysdiagnose -u &```. If you prefer to run it interactively, you can execute ```sudo /usr/bin/sysdiagnose```. Just keep in mind that running it interactively will trigger a privacy warning. The logs are stored in ```/var/tmp```, and you can navigate there via Finder or by using the Cmd+Shift+G shortcut in Finder to locate the path. However, be cautious of the file sizes, which can be around 300MB or more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
