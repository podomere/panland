---
title: "How Do You DiagnOSe OSX Issues"
subtitle: "Infographic?"
layout: research
ip_v4_address: "225.216.6.134"
date: 2023-11-18T18:27:36+00:00
draft: false
---

## Explanation of Internet Addressing

When using the Internet, it is possible to have a Public IPv4 address, such as ```225.216.6.134```, or an IPv6 address, such as ```2000:27a4:522:1f2c:e300:81bc:3812:4eb4```. Verification of these addresses can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to explain and convey these addresses to non-technical individuals, as well as referencing MAC addresses like ```b2:32:ca:05:b5:2e```, can be prone to errors and become complex. Furthermore, it does not provide any historical data, particularly in regard to previous problems that have occurred.
## How to Access the Internet

When wishing to visit a web page like https://hermann.info, the initial step involves accessing a DNS server to convert the host portion (hermann), combined with the Top Level Domain (info) of the URL, into an IP address, such as ```171.80.162.240```. During all web requests, your computer and browser sends its type, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Understanding the Significance of Default Gateways

The default gateway is usually an address configured automatically via DHCP. This default gateway, which typically ends in .1 or .254 depending on the scope size, such as ```172.28.49.8```, is where your computer sends all of its traffic to be routed onwards. For those interested in more information on ```IPv6```, a detailed explanation can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), while checking on Mac or Linux can be done using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.28.49.8    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1408:9954:bf27:5a51%en0  UGcg   en0
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
domain_name_server (ip_mult): {105.58.71.68, 235.0.7.59}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr b2:32:ca:05:b5:2e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 83:c4:5a:a3:18:6a
}</pre>




## Resolving Connectivity Issues with Wired and Wireless Networks

When it comes to the physical and data layers, you might be utilizing a wired or wireless (Wi-Fi) medium to transmit data to your router.
### Troubleshooting on Apple macOS / OSX Versions
Regardless of whether you are using OSX/macOS versions such as `10.14.6`, `11.5.8`, or `12.0.4`, there are various tools available for fixing connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that embrace remote work and Work From Anywhere (WFA).
#### Effective Built-in Utilities
One valuable tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of current wireless settings to the CLI, and it can also be configured to produce specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs related to wireless issues, although much of it is only relevant at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively*, you can execute `sudo /usr/bin/sysdiagnose` which will give a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes will be around 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
