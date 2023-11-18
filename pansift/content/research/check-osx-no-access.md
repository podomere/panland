---
title: "Check OSX No-access"
subtitle: "Button Up The Loose Ends?"
layout: research
ip_v4_address: "156.121.34.107"
date: 2023-11-18T18:04:34+00:00
draft: false
---

## Understanding the Basics of Internet Addressing

When using the Internet, individuals may be assigned a Public IPv4 address such as ```156.121.34.107``` or an IPv6 address like ```2000:70cf:78de:2077:9089:d13c:f971:52d2```. A helpful tool for checking your address is available at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses to those who are not technically inclined, or even articulating MAC addresses like ```de:d6:75:f6:98:d5```, can lead to errors and complexity. Furthermore, this method does not provide historical data, particularly from past issues.
## Navigating Websites

When attempting to access a web page such as https://wolf.name, the first step involves connecting to a DNS server to convert the host portion (wolf) in combination with the Top Level Domain (name) of the URL into an IP address, for example, ```69.234.167.180```. It is important to note that the web requests sent by your computer and browser typically contain the specification of their type, such as:
 ```Mozilla/5.0 (compatible; MSIE 9.0; AOL 9.7; AOLBuild 4343.19; Windows NT 6.1; WOW64; Trident/5.0; FunWebProducts)```
## Recognizing the Significance of Default Gateways

Typically, your default gateway consists of an address that is automatically configured through DHCP, resulting in a default gateway like ```172.20.82.97``` (typically ending in .1 or .254 based on the scope size). This serves as the point to which your computer directs all of its traffic to be further routed. For ```IPv6``` inquiries, comprehensive information can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) or through a check on Mac or Linux with the command:
```bash
/command-here
```
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.20.82.97    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:cb41:318b:a1f8:af7f%en0  UGcg   en0
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
domain_name_server (ip_mult): {222.2.86.173, 88.201.88.183}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr de:d6:75:f6:98:d5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 01:e3:76:c8:8a:88
}</pre>




## Resolving Issues with Wired or Wireless Connectivity
When it comes to sending data to your router, you might be utilizing either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you are using OSX/macOS versions like `10.14.1`, `11.6.6`, or `12.2.2`, there are various tools available for addressing connectivity issues. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes essential, particularly for teams that are embracing remote work and Work From Anywhere (WFA).
#### Embedded Scripts for Assistance
An extremely useful tool on OSX/macOS is `sudo wdutil info`, which dumps current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Moreover, the `sysdiagnose` tool can be used to produce a wide array of logs, although much of it is only relevant to wireless connectivity just like wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz` for you. Alternatively, if you prefer to run it *interactively* (even though there is not much interaction), you can execute `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G. However, be mindful of the file sizes, which are approximately 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
