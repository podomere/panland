---
title: "How To MacOS Internet"
subtitle: "Put A Bow On It?"
layout: research
ip_v4_address: "115.80.158.22"
date: 2023-10-06T17:10:40+01:00
draft: false
---

## Internet Addressing
On the Internet you may have a Public IPv4 address like ```115.80.158.22``` or an IPv6 address like ```2000:1c95:3805:dfe6:7972:d651:7b61:c2a8```. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```64:a2:b7:57:ff:bc```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

## Accessing the Web
To get to a web page like https://kuhlman.net you initially access a DNS server to translate the host portion (kuhlman) combined with the Top Level Domain (net) of the URL, to an IP address like ```177.204.60.248```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```

## Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```192.168.221.94``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

### IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.221.94    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:9a1f:d98f:4b1:5051%en0  UGcg   en0
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
domain_name_server (ip_mult): {194.83.65.208, 8.202.246.195}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 64:a2:b7:57:ff:bc
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 18:a4:ac:0b:fb:bc
}</pre>

## Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

### Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.15.8```, ```11.6.3```, or ```12.2.2```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=5MN-A7a4rgk" data-lity><img src="https://i.ytimg.com/vi/5MN-A7a4rgk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5MN-A7a4rgk" data-lity>The Ins and Outs of Gatekeeper - Hands-on Mac 3</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=aRtx2X-T3gk" data-lity><img src="https://i.ytimg.com/vi/aRtx2X-T3gk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=aRtx2X-T3gk" data-lity>Inside the Mac Filesystem - Hands-On Mac 12</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=vw19GDo-d1I" data-lity><img src="https://i.ytimg.com/vi/vw19GDo-d1I/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=vw19GDo-d1I" data-lity>Install Mac Fonts on Terminal - Fastest Way to Add Mac Fonts</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=sr6SEe5zuwM" data-lity><img src="https://i.ytimg.com/vi/sr6SEe5zuwM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=sr6SEe5zuwM" data-lity>Protect your Mac with Lulu - Hands-On Mac 2</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=ySr5JSWNnsk" data-lity><img src="https://i.ytimg.com/vi/ySr5JSWNnsk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ySr5JSWNnsk" data-lity>Using Hazel with Folder Actions - An easy way to automate your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
