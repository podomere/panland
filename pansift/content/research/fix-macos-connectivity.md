---
title: "Fix MacOS Connectivity"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "35.155.73.42"
date: 2023-11-18T22:08:34+00:00
draft: false
---

alse
---

## Understanding the Functioning of Internet Addressing

When using the Internet, you might be assigned a Public IPv4 address such as ```132.182.129.200``` or an IPv6 address like ```2000:bc1e:7342:2227:297:4204:3505:8f88```. You can verify this information at [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not technically inclined, conveying these addresses, or even mentioning MAC addresses like ```9d:f9:94:8e:37:87```, can be prone to errors and can become complex rapidly. Furthermore, this method does not offer any historical data (especially when previous issues occurred).

  ## Navigating the Internet and the Process of Lookups
  In order to access a website like https://hodkiewicz-parker.info, you first connect to a DNS server to convert the host part (hodkiewicz-parker) combined with the Top Level Domain (info) of the URL, to an IP address such as ```203.145.100.225```. Your computer and browser actually sends its type with all web requests, for example: <br>```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```

  ## The Crucial Role of Default Gateways
  Your default gateway is typically an automatically configured address via DHCP. You receive a default gateway like ```192.0.0.252``` (although they usually end in .1 or .254 based on the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6```, we have an in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:
  <br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.252    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:db37:f57:b89d:3ac6%en0  UGcg   en0
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
domain_name_server (ip_mult): {153.152.49.36, 242.96.32.170}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9d:f9:94:8e:37:87
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c9:c7:bf:72:46:74
}</pre>




## Solutions for Resolving Issues with Wired and Wireless Connections
When it comes to transferring data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Steps to Take on Apple macOS / OSX
No matter which version of OSX/macOS you are using, whether it's 10.15.5, 11.0.7, or 12.3.1, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are embracing remote work and Work From Anywhere (WFA).

  #### Utilizing Built-in Scripts and Commands
  An extremely useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump to the CLI of current wireless related settings and can also be configured to generate specific logs for troubleshooting. Additionally, the `sysdiagnose` tool can be used to generate a wide range of logs, although many of them are point-in-time only in relation to wireless, similar to wdutil.

`sudo nohup /usr/bin/sysdiagnose -u &` will run it in the background and it will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it *interactively* (though there is not much interaction), you can run `sudo /usr/bin/sysdiagnose` and it will give a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G to point to the path. Just be aware of the file sizes, which are around 300MB more or less.

  <br><br>
## Related Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
