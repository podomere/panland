---
title: "How To Test Mac Internet Connection"
subtitle: "Bandwidth-constrained?"
layout: research
ip_v4_address: "69.73.77.69"
date: 2023-11-18T19:25:58+00:00
draft: false
---

## Functioning of Internet Addressing

When using the Internet, individuals may have a Public IPv4 address such as ```69.73.77.69``` or an IPv6 address like ```2000:9a76:ec1a:3532:3a36:df32:46f:721b```, which can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technologically inclined, attempting to communicate these addresses or even mention MAC addresses like ```fb:b7:9c:09:67:fc``` can lead to errors and complications. Moreover, this approach does not provide historical data, particularly when dealing with past issues.
## Navigating the Internet

When trying to access a webpage such as https://hudson.org, the first step is to contact a DNS server in order to convert the host portion (hudson) along with the Top Level Domain (org) of the URL into an IP address, like ```33.143.115.85```. It's worth noting that every web request from your computer and browser includes its type, for example:  <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## Significance of Default Gateways

Typically, your default gateway is an address that is configured automatically through DHCP. This results in a default gateway like ```192.0.0.71``` (although they usually end in .1 or .254 depending on the scope size), which serves as the point where your computer sends all of its traffic to be routed further. For ```IPv6```, a detailed guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available, but you can also check this on Mac or Linux by using the following command: <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.71    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:2c9:a8d0:630f:dd04%en0  UGcg   en0
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
domain_name_server (ip_mult): {207.223.63.201, 76.234.121.65}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr fb:b7:9c:09:67:fc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr de:52:ed:09:81:a6
}</pre>




## Fixing Network Connectivity Issues

When it comes to transmitting data to your router, you may encounter issues at the physical and data layers whether you are using a wired or wireless (Wi-Fi) medium.
### Solutions for Apple macOS / OSX Users

Regardless of the version of OSX/macOS you are using, be it `10.11.7`, `11.1.7`, or `12.0.6`, there are several troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams that promote remote work and Work From Anywhere (WFA).
#### Pre-installed Tools That Can Be Utilized

One useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump to the CLI of current wireless related settings and can be set up to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of it is only relevant to wireless at a specific moment in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background and write logs to `/var/tmp/<blah>.tar.gz`. For an *interactive* run (even though there is minimal interaction), you can use `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. If not run in the background, it should open Finder in the appropriate location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
