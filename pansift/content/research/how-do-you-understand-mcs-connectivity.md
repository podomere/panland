---
title: "How Do You Understand Mcs Connectivity"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "38.9.211.72"
date: 2023-10-06T17:10:31+01:00
draft: false
---

## Internet Addressing
On the Internet you may have a Public IPv4 address like ```38.9.211.72``` or an IPv6 address like ```2000:c37c:7c61:52c8:ee9:d5a7:84aa:725f```. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```46:8c:f2:c4:cd:fd```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

## Accessing the Web
To get to a web page like https://yundt-kulas.com you initially access a DNS server to translate the host portion (yundt-kulas) combined with the Top Level Domain (com) of the URL, to an IP address like ```95.199.183.132```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36```

## Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.29.72.222``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

### IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.29.72.222    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   bcce:fa:5f05:fb9:df94:4bbb:97a2:47c6%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.

## DHCP for IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {203.46.228.95, 17.162.42.143}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 46:8c:f2:c4:cd:fd
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 61:f4:6b:a3:e9:38
}</pre>

## Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

### Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.12.3```, ```11.1.5```, or ```12.2.2```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

#### Scripts
One very helpful tool on OSX/macOS is ```sudo wdutil info``` which gives a dump to the CLI of current wireless related settings, and this can be configured to also generate specific logs for troubleshooting. Additionally, and perhaps more comprehensively the ```sysdiagnose``` tool can be used to generate a whole host of logs (though much is point in time only in relation to wireless just like wdutil).

```sudo nohup /usr/bin/sysdiagnose -u &``` will run it in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you want to run it *interactively* (though there is not much interaction) you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background it should open Finder in the correct location or you can then navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just beware the file sizes of about 300MB more or less.

<br><br>
## Possible Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=kzPiRtGL9Sw" data-lity><img src="https://i.ytimg.com/vi/kzPiRtGL9Sw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=kzPiRtGL9Sw" data-lity>What Hyperrealistic Cake Should I Make Next?!</a>|<a target="_blank" href="https://www.youtube.com/channel/UChKQYI9z5rO_sdNjhwyyjSg" >Sideserf Cake Studio</a>|
|<a href="https://www.youtube.com/watch?v=NocXEwsJGOQ" data-lity><img src="https://i.ytimg.com/vi/NocXEwsJGOQ/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NocXEwsJGOQ" data-lity>Anamanaguchi - Miku ft. Hatsune Miku (Lyric Video)</a>|<a target="_blank" href="https://www.youtube.com/channel/UCJwGWV914kBlV4dKRn7AEFA" >HatsuneMiku</a>|
|<a href="https://www.youtube.com/watch?v=GDyL2tPyXFA" data-lity><img src="https://i.ytimg.com/vi/GDyL2tPyXFA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=GDyL2tPyXFA" data-lity>Put a Desktop GPU in a LAPTOP… The CHEAP WAY!</a>|<a target="_blank" href="https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw" >Linus Tech Tips</a>|
|<a href="https://www.youtube.com/watch?v=lACHhr7RKXc" data-lity><img src="https://i.ytimg.com/vi/lACHhr7RKXc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=lACHhr7RKXc" data-lity>Why hasn&#39;t Apple invented this yet?!</a>|<a target="_blank" href="https://www.youtube.com/channel/UCB4NFn-8oipHct0IfAQBQrQ" >Unnecessary Inventions</a>|
|<a href="https://www.youtube.com/watch?v=QCEhA_CwwfU" data-lity><img src="https://i.ytimg.com/vi/QCEhA_CwwfU/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=QCEhA_CwwfU" data-lity>Why There Is No &#39;E&#39; Grade 🤔 (EXPLAINED)</a>|<a target="_blank" href="https://www.youtube.com/channel/UCvz84_Q0BbvZThy75mbd-Dg" >Zack D. Films</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
