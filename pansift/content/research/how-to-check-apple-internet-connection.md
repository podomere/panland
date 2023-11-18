---
title: "How To Check Apple Internet Connection"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "210.178.96.62"
date: 2023-11-18T18:51:33+00:00
draft: false
---

## The Functioning of Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```210.178.96.62``` or an IPv6 address such as ```2000:79c2:a1cc:f810:b628:9a9e:7131:1382```. This information can be verified by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining or communicating these addresses, or even specifying MAC addresses like ```db:5e:38:cd:57:50```, can be error-prone and complex, especially for those who are not tech-savvy. Moreover, this method does not provide any historical data, particularly from past issues.
## Navigating the Internet
In order to visit a website such as https://steuber-orn.io, the first step is to access a DNS server that translates the host portion (steuber-orn) combined with the Top Level Domain (io) of the URL into an IP address, like ```189.71.18.215```. Additionally, your computer and browser include its type in all web requests, for example: <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
A default gateway is typically an automatically configured address via DHCP. It is similar to getting a default gateway like ```10.204.216.148``` (usually ending in .1 or .254 based on the scope size), and serves as the point where your computer sends all its traffic to be routed onward. For ```IPv6```, detailed instructions can be found in the post [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), and can be checked on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  10.204.216.148    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:59e4:2671:6e98:246%en0  UGcg   en0
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
domain_name_server (ip_mult): {179.183.179.3, 246.244.96.80}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr db:5e:38:cd:57:50
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b8:90:01:93:02:48
}</pre>




## Resolve Issues with Wired and Wireless Connections
When it comes to transferring data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Troubleshooting
Regardless of whether you are on OSX/macOS versions like `10.13.8`, `11.6.8`, or `12.0.5`, there are various tools available for troubleshooting. However, these manual actions and scripts do not provide a set of correlated values over time. This is where automated remote troubleshooting becomes invaluable, especially for teams that are transitioning to remote work and Work From Anywhere (WFA).
#### Useful Built-in Scripts
On OSX/macOS, the `sudo wdutil info` tool provides a dump to the CLI of current wireless-related settings and can be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool offers a more comprehensive option for generating a variety of logs, although much of it is only relevant to wireless at a specific point in time, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will write logs to `/var/tmp/<blah>.tar.gz` for you. If you prefer to run it interactively, you can use `sudo /usr/bin/sysdiagnose` with a privacy warning. When run in the background, it should open Finder in the correct location, or you can navigate to `/var/tmp` or use Finder with Cmd+Shift+G to locate the files. Be cautious of the file sizes, which are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
