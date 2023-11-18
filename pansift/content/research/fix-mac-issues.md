---
title: "Fix Mac Issues"
subtitle: "Value Add?"
layout: research
ip_v4_address: "182.48.35.52"
date: 2023-11-18T19:12:35+00:00
draft: false
---

## Understanding the Functioning of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address, such as ```182.48.35.52```, or an IPv6 address, like ```2000:10e9:1d0c:165c:87bf:4357:d687:4a52```. This information can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining and communicating these addresses, or even referencing MAC addresses such as ```8e:43:72:bf:ec:54```, can be prone to errors and become complex quickly, particularly for those with limited technical knowledge. Furthermore, it does not provide any historical data, especially from previous issues.
## Navigating the Internet
When attempting to access a website, like https://moen-reynolds.name, the first step involves requesting assistance from a DNS server to translate the host portion (moen-reynolds) combined with the Top Level Domain (name) of the URL into an IP address, for example, ```81.7.73.213```. Furthermore, the computer and browser specify their type with all web requests, such as <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```.
## Understanding the Significance of Default Gateways
Generally, the default gateway is an address that is automatically configured via DHCP. This often translates to receiving a default gateway, such as ```192.0.0.99``` (though typically ending in .1 or .254 depending on the scope size), to which the computer sends all its traffic to be routed onwards. For a deeper understanding of this process for ```IPv6```, refer to our detailed explanation at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). However, on Mac or Linux systems, verification can be done with:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.99    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:a031:347a:271b:6550%en0  UGcg   en0
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
domain_name_server (ip_mult): {146.251.107.138, 20.196.250.207}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 8e:43:72:bf:ec:54
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 7c:1e:ea:3b:4c:c0
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transferring data, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer to send the data to your router.
### Troubleshooting Steps for Apple macOS / OSX
Regardless of the version of OSX/macOS you are using - whether it's 10.13.5, 11.5.1, or 12.2.4 - there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, particularly for teams that embrace remote work and Work From Anywhere (WFA).
#### Pre-installed Scripts for Assistance
One useful tool on OSX/macOS is "sudo wdutil info," which provides a dump of current wireless settings to the CLI, and can be configured to generate specific logs for troubleshooting purposes. Additionally, the "sysdiagnose" tool can be used to generate a wide range of logs, although much of it is related to wireless settings and is only relevant at a specific point in time.

To run it in the background and generate logs, use the command "sudo nohup /usr/bin/sysdiagnose -u &," which will write logs to "/var/tmp/<blah>.tar.gz." For interactive use, you can run "sudo /usr/bin/sysdiagnose," which will prompt a privacy warning and open Finder in the correct location. Alternatively, you can navigate to "/var/tmp" using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
