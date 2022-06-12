---
title: "Support Apple IP Settings"
subtitle: "Branding?"
layout: research
ip_v4_address: "237.51.236.197"
date: 2022-06-12T14:09:16+01:00
draft: false
---

# Internet Addressing
On the Internet you may get a Public IPv4 address like ```237.51.236.197``` or an IPv6 address like ```2000:e579:632:375f:ee29:5a64:ec4b:2d5e```. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like ```77:14:f5:15:cc:3e```, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://mccullough.org you initially access a DNS server to translate the host portion (mccullough) combined with the Top Level Domain (org) of the URL, to an IP address like ```228.142.23.66```. Your computer and browser actually sends its type with all web requests e.g. <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like ```172.21.219.42``` (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For ```IPv6``` we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.21.219.42    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 actvive the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:f04e:99bd:fa0d:6391%en0  UGcg   en0
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
domain_name_server (ip_mult): {58.81.175.26, 154.85.220.109}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 77:14:f5:15:cc:3e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 62:0c:47:9e:9e:cb
}</pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, ```10.11.4```, ```11.4.2```, or ```12.1.1```, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=5MN-A7a4rgk" data-lity><img src="https://i.ytimg.com/vi/5MN-A7a4rgk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5MN-A7a4rgk" data-lity>The Ins and Outs of Gatekeeper - Hands-on Mac 3</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=NqvWvMV0F4w" data-lity><img src="https://i.ytimg.com/vi/NqvWvMV0F4w/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=NqvWvMV0F4w" data-lity>Mac Keyboard Magic - Keyboard Shortcuts, Modifier Keys, Text Abbreviations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=dmRGvZGCsZI" data-lity><img src="https://i.ytimg.com/vi/dmRGvZGCsZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=dmRGvZGCsZI" data-lity>Finder Tips - Resizing, Slideshows, Customization, and more!</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=SLcz5iKLpuQ" data-lity><img src="https://i.ytimg.com/vi/SLcz5iKLpuQ/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=SLcz5iKLpuQ" data-lity>Easily Adjust File Creation Dates for Photos - A Better Finder Attributes</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=QAY5F0B-_kM" data-lity><img src="https://i.ytimg.com/vi/QAY5F0B-_kM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=QAY5F0B-_kM" data-lity>iStat Menus - Best System Monitoring App for macOS</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
