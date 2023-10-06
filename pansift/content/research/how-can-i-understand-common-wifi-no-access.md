---
title: "How Can I Understand Common Wifi No Access"
subtitle: "Market Share?"
layout: research
ip_v4_address: "101.18.66.232"
date: 2023-10-06T17:10:31+01:00
draft: false
---

## Internet Addressing
On the Internet you may have a Public IPv4 address like ```101.18.66.232``` or an IPv6 address like ```2000:43e0:b4c8:9270:1e5:184b:1758:a1d7```. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```52:08:be:40:ed:ba```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

## Accessing the Web
To get to a web page like https://crooks.com you initially access a DNS server to translate the host portion (crooks) combined with the Top Level Domain (com) of the URL, to an IP address like ```184.72.98.147```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```

## Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.27.103.138``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

### IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.103.138    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   d83f:788f:6313:1f:6172:4984:233d:d155%en0  UGcg   en0
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
domain_name_server (ip_mult): {127.140.222.184, 106.156.148.30}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 52:08:be:40:ed:ba
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr a2:a1:90:22:e6:4f
}</pre>

## Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

### Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.11.8```, ```11.2.8```, or ```12.1.9```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=qfS8-Qvvmfk" data-lity><img src="https://i.ytimg.com/vi/qfS8-Qvvmfk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qfS8-Qvvmfk" data-lity>What Router Settings Should You Change?</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|
|<a href="https://www.youtube.com/watch?v=av2yfDokA6k" data-lity><img src="https://i.ytimg.com/vi/av2yfDokA6k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=av2yfDokA6k" data-lity>Daddy Yankee &amp; Wisin y Yandel - Si Supieras (Video Oficial)</a>|<a target="_blank" href="https://www.youtube.com/channel/UC9TO_oo4c_LrOiKNaY6aysA" >Daddy Yankee</a>|
|<a href="https://www.youtube.com/watch?v=lACHhr7RKXc" data-lity><img src="https://i.ytimg.com/vi/lACHhr7RKXc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=lACHhr7RKXc" data-lity>Why hasn&#39;t Apple invented this yet?!</a>|<a target="_blank" href="https://www.youtube.com/channel/UCB4NFn-8oipHct0IfAQBQrQ" >Unnecessary Inventions</a>|
|<a href="https://www.youtube.com/watch?v=dHKD-9uI24I" data-lity><img src="https://i.ytimg.com/vi/dHKD-9uI24I/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=dHKD-9uI24I" data-lity>How to install the Google Nest Learning Thermostat</a>|<a target="_blank" href="https://www.youtube.com/channel/UCWmlRLAOpx9f1t_cVkBx8-g" >Google Nest</a>|
|<a href="https://www.youtube.com/watch?v=OLCtETbi-1o" data-lity><img src="https://i.ytimg.com/vi/OLCtETbi-1o/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=OLCtETbi-1o" data-lity>MediaTek Wi-Fi 7 Demo &amp; MLO Benefits</a>|<a target="_blank" href="https://www.youtube.com/channel/UCpk9wjk3iyu19hS8dUY6Crg" >MediaTek</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
