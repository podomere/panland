---
title: "Troubleshoot OSX Internet Connection"
subtitle: "Ideate?"
layout: research
ip_v4_address: "153.155.2.34"
date: 2023-02-04T16:26:10+00:00
draft: false
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like ```153.155.2.34``` or an IPv6 address like ```2000:81ee:8bc2:faa2:65d5:9aa8:9c07:6578```. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```96:00:4b:4d:e7:42```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://ohara-kulas.org you initially access a DNS server to translate the host portion (ohara-kulas) combined with the Top Level Domain (org) of the URL, to an IP address like ```166.117.227.197```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.21.44.223``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.44.223    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b0cf:b05f:b7a:756a%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.

# DHCP for IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

```ipconfig getpacket en0```

<pre>
...
domain_name_server (ip_mult): {88.5.214.51, 245.138.32.2}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 96:00:4b:4d:e7:42
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 8c:c7:00:79:96:9a
}</pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.13.3```, ```11.5.6```, or ```12.2.4```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

### Scripts
One very helpful tool on OSX/macOS is ```sudo wdutil info``` which gives a dump to the CLI of current wireless related settings, and this can be configured to also generate specific logs for troubleshooting. Additionally, and perhaps more comprehensively the ```sysdiagnose``` tool can be used to generate a whole host of logs (though much is point in time only in relation to wireless just like wdutil).

```sudo nohup /usr/bin/sysdiagnose -u &``` will run it in the background and it will write logs to ```/var/tmp/<blah>.tar.gz``` for you. If you want to run it *interactively* (though there is not much interaction) you can run<br>```sudo /usr/bin/sysdiagnose``` and it will give a privacy warning. When not run in the background it should open Finder in the correct location or you can then navigate to ```/var/tmp``` or use Finder with Cmd+Shift+G to point Finder to the path. Just beware the file sizes of about 300MB more or less.

<br><br>
# Possible Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=tzIWMkkPQ9o" data-lity><img src="https://i.ytimg.com/vi/tzIWMkkPQ9o/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=tzIWMkkPQ9o" data-lity>Writing Your Own Folder Actions with Automator - An Easier Way to Create a Script</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=NqvWvMV0F4w" data-lity><img src="https://i.ytimg.com/vi/NqvWvMV0F4w/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NqvWvMV0F4w" data-lity>Mac Keyboard Magic - Keyboard Shortcuts, Modifier Keys, Text Abbreviations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=ctF-S3RLcME" data-lity><img src="https://i.ytimg.com/vi/ctF-S3RLcME/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=ctF-S3RLcME" data-lity>Fun With Mac Terminal Commands - Hands-On Mac 5</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=QAY5F0B-_kM" data-lity><img src="https://i.ytimg.com/vi/QAY5F0B-_kM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=QAY5F0B-_kM" data-lity>iStat Menus - Best System Monitoring App for macOS</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=BG2tqr1t640" data-lity><img src="https://i.ytimg.com/vi/BG2tqr1t640/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=BG2tqr1t640" data-lity>Folder Actions: Part 1 - Associate AppleScripts with folders on your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
