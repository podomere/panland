---
title: "How Do You Mac Internet Connection"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "224.7.142.125"
date: 2022-04-24T19:00:25+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like <code>224.7.142.125</code> or an IPv6 address like <code>2000:98bc:a5f8:ac7f:bc52:15ef:50d3:ea3a</code>. We can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like <code>a1:82:06:17:d4:2e</code>, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://weber.net you initially access a DNS server to translate the host portion (weber) combined with the Top Level Domain (net) of the URL, to an IP address like <code>100.87.200.247</code>. Your computer and browser actually sends its type with all web requests e.g. <br><code>Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16</code>

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like <code>172.31.233.134</code> (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For <code>IPv6</code> we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
<code>netstat -rn -f inet | grep -i "default|0/1|128.0/1"</code>

<pre><code>
0/1      172.18.12.193  UGScg  utun3
default  172.31.233.134    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</code></pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
<code>netstat -rn -f inet6 | grep -i "default|2000::/3"</code>

If you have IPv6 actvive the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre><code>
default   4500:2cfc:cb89:6c:e9df:59c3:54f2:e088%en0  UGcg   en0
default   fe80::%utun0                   UGcIg  utun0
default   fe80::%utun1                   UGcIg  utun1
default   fe80::%utun2                   UGcIg  utun2
2000::/3  utun3                          USc    utun3</code></pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v6 address space.

# DHCP for IPv4 and IPv6

To get a look at the low level DHCP configuration (Mac/Linux): 

<code>ipconfig getpacket en0</code>

<pre><code>
...
domain_name_server (ip_mult): {3.148.218.35, 6.198.36.80}
end (none):
...</code></pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

<code>ipconfig getv6packet en0</code>

<pre><code>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a1:82:06:17:d4:2e
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 7c:b2:11:3f:e0:fa
}</code></pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, <code>10.12.3</code>, <code>11.4.6</code>, or <code>12.3.3</code>, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

### Scripts
One very helpful tool on OSX/macOS is <code>sudo wdutil info</code> which gives a dump to the CLI of current wireless related settings, and this can be configured to also generate specific logs for troubleshooting. Additionally, and perhaps more comprehensively the <code>sysdiagnose</code> tool can be used to generate a whole host of logs (though much is point in time only in relation to wireless just like wdutil).

<code>sudo nohup /usr/bin/sysdiagnose -u &</code> will run it in the background and it will write logs to <code>/var/tmp/<blah>.tar.gz</code> for you. If you want to run it *interactively* (though there is not much interaction) you can run<br><code>sudo /usr/bin/sysdiagnose</code> and it will give a privacy warning. When not run in the background it should open Finder in the correct location or you can then navigate to <code>/var/tmp</code> or use Finder with Cmd+Shift+G to point Finder to the path. Just beware the file sizes of about 300MB more or less.

<br><br>
# Possible Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=-VP2NVv3LHg" data-lity><img src="https://i.ytimg.com/vi/-VP2NVv3LHg/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=-VP2NVv3LHg" data-lity>Homebrew Bundle: Set Up a Mac Fast - Hands-on Mac 9</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=SLcz5iKLpuQ" data-lity><img src="https://i.ytimg.com/vi/SLcz5iKLpuQ/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=SLcz5iKLpuQ" data-lity>Easily Adjust File Creation Dates for Photos - A Better Finder Attributes</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=sr6SEe5zuwM" data-lity><img src="https://i.ytimg.com/vi/sr6SEe5zuwM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=sr6SEe5zuwM" data-lity>Protect your Mac with Lulu - Hands-On Mac 2</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=x9-B8VFZgc8" data-lity><img src="https://i.ytimg.com/vi/x9-B8VFZgc8/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=x9-B8VFZgc8" data-lity>BetterTouchTool - Making the Touchbar Useful - Hands-On Mac 1</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=Qh2dIMTDx-g" data-lity><img src="https://i.ytimg.com/vi/Qh2dIMTDx-g/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=Qh2dIMTDx-g" data-lity>Make Free iPhone Ringtones - How to Make Ringtones With Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
