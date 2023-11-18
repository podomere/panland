---
title: "Check Apple Internet"
subtitle: "Agile Marketing?"
layout: research
ip_v4_address: "238.151.156.3"
date: 2023-11-18T18:41:45+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```238.151.156.3``` or an IPv6 address like ```2000:aa18:71b2:c3d:62f3:996d:139f:2ae5```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those less familiar with technology, communicating these addresses, or even referring to MAC addresses like ```08:65:f3:1c:e8:74```, can lead to errors and complexities. Furthermore, it does not provide any historical data.
## Navigating the World Wide Web

When accessing a web page such as https://legros-aufderhar.com, the first step involves contacting a DNS server to convert the host portion (legros-aufderhar) along with the Top Level Domain (com) of the URL into an IP address like ```212.202.203.75```. Every web request from your computer and browser includes its type, such as <br>```Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16```
## The Significance of Default Gateways

The default gateway is typically an address configured automatically via DHCP. This gateway, like ```10.151.144.80``` (usually ending in .1 or .254 depending on the scope size), is where your computer directs all of its traffic to be routed onward. For ```IPv6```, a detailed explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and you can verify this on Mac or Linux using: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.151.144.80    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:7fe0:b98:12cb:fb39%en0  UGcg   en0
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
domain_name_server (ip_mult): {242.102.224.83, 83.242.21.105}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 08:65:f3:1c:e8:74
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 1c:ae:f6:1f:8a:e6
}</pre>




## Troubleshooting Connectivity Issues
When it comes to transmitting data to your router, you may encounter issues with either wired or wireless (Wi-Fi) connections at the physical and data layer.
### Troubleshooting Tools for Apple Users
Regardless of whether you are running OSX or macOS, whether it's version ```10.11.9```, ```11.2.4```, or ```12.2.3```, there are various tools available for troubleshooting connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time, making it challenging to identify the root cause of the problem. This is where automated remote troubleshooting becomes especially valuable, particularly for teams that have adopted remote work or Work From Anywhere (WFA).
#### Utilizing Built-in Scrip​ts
One of the useful tools for OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of the current wireless settings to the CLI and can be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool offers a more comprehensive option for generating various logs, although much of the information is only relevant to the current time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` will execute the command in the background, creating logs in ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (despite limited interaction), you can input ```sudo /usr/bin/sysdiagnose```, which will prompt a privacy warning. If not run in the background, Finder should open in the correct location, or you can navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to locate the path. Keep in mind that the file sizes are around 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
