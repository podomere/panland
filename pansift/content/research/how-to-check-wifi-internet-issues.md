---
title: "How To Check Wifi Internet Issues"
subtitle: "Thought Leadership?"
layout: research
ip_v4_address: "165.108.62.69"
date: 2023-10-06T17:10:30+01:00
draft: false
---

## Internet Addressing
On the Internet you may get a Public IPv4 address like ```165.108.62.69``` or an IPv6 address like ```2000:842d:1894:3c6c:de1a:1b56:466b:14db```. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```98:c4:d5:f4:f0:a5```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

## Accessing the Web
To get to a web page like https://ankunding.name you initially access a DNS server to translate the host portion (ankunding) combined with the Top Level Domain (name) of the URL, to an IP address like ```141.228.204.157```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```

## Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.21.37.196``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

### IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.37.196    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:95ac:19b8:d713:e135%en0  UGcg   en0
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
domain_name_server (ip_mult): {101.21.138.76, 238.86.60.118}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 98:c4:d5:f4:f0:a5
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr f2:b6:ad:31:66:be
}</pre>

## Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

### Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.12.6```, ```11.1.5```, or ```12.3.8```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=av2yfDokA6k" data-lity><img src="https://i.ytimg.com/vi/av2yfDokA6k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=av2yfDokA6k" data-lity>Daddy Yankee &amp; Wisin y Yandel - Si Supieras (Video Oficial)</a>|<a target="_blank" href="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA" >Daddy Yankee</a>|
|<a href="https://www.youtube.com/watch?v=1I1vxu5qIUM" data-lity><img src="https://i.ytimg.com/vi/1I1vxu5qIUM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=1I1vxu5qIUM" data-lity>How does Bluetooth Work?</a>|<a target="_blank" href="https://www.youtube.com/channel/UCdp4_l1vPmpN-gDbUwhaRUQ" >Branch Education</a>|
|<a href="https://www.youtube.com/watch?v=NocXEwsJGOQ" data-lity><img src="https://i.ytimg.com/vi/NocXEwsJGOQ/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NocXEwsJGOQ" data-lity>Anamanaguchi - Miku ft. Hatsune Miku (Lyric Video)</a>|<a target="_blank" href="https://www.youtube.com/channel/UCJwGWV914kBlV4dKRn7AEFA" >HatsuneMiku</a>|
|<a href="https://www.youtube.com/watch?v=rfYiMeLMqxs" data-lity><img src="https://i.ytimg.com/vi/rfYiMeLMqxs/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=rfYiMeLMqxs" data-lity>PHONK</a>|<a target="_blank" href="https://www.youtube.com/channel/UCWzLmNWhgeh3h1j-M-Isy0g" >TheRussianBadger</a>|
|<a href="https://www.youtube.com/watch?v=x3c1ih2NJEg" data-lity><img src="https://i.ytimg.com/vi/x3c1ih2NJEg/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=x3c1ih2NJEg" data-lity>How does the INTERNET work?   ICT #2</a>|<a target="_blank" href="https://www.youtube.com/channel/UCqZQJ4600a9wIfMPbYc60OQ" >Lesics</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
