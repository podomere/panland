---
title: "How Do You DiagnOSe Latency Protocol"
subtitle: "Gamification?"
layout: research
ip_v4_address: "144.205.184.113"
date: 2022-04-24T18:59:58+01:00
draft: false
---

# Internet Addressing
On the Internet you may have a Public IPv4 address like <code>144.205.184.113</code> or an IPv6 address like <code>2000:b10c:4b96:f6a4:9230:9620:5fbe:1634</code>. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like <code>d1:08:aa:23:db:fb</code>, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://kerluke.org you initially access a DNS server to translate the host portion (kerluke) combined with the Top Level Domain (org) of the URL, to an IP address like <code>252.248.176.16</code>. Your computer and browser actually sends its type with all web requests e.g. <br><code>Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko</code>

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like <code>172.26.123.82</code> (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For <code>IPv6</code> we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
<code>netstat -rn -f inet | grep -i "default|0/1|128.0/1"</code>

<pre><code>
0/1      172.18.12.193  UGScg  utun3
default  172.26.123.82    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</code></pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
<code>netstat -rn -f inet6 | grep -i "default|2000::/3"</code>

If you have IPv6 actvive the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre><code>
default   fe80:1e3:fde1:982d:7035%en0  UGcg   en0
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
domain_name_server (ip_mult): {233.244.15.155, 168.231.236.19}
end (none):
...</code></pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

<code>ipconfig getv6packet en0</code>

<pre><code>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr d1:08:aa:23:db:fb
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr c6:47:c5:de:72:17
}</code></pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, <code>10.12.5</code>, <code>11.3.1</code>, or <code>12.2.6</code>, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=snHpPBwOMPE" data-lity><img src="https://i.ytimg.com/vi/snHpPBwOMPE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=snHpPBwOMPE" data-lity>How DNS Leaks Reveal Your Browsing History</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|
|<a href="https://www.youtube.com/watch?v=jQCY-jmoY5o" data-lity><img src="https://i.ytimg.com/vi/jQCY-jmoY5o/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=jQCY-jmoY5o" data-lity>Why Wi-Fi 6 Will CHANGE Gaming</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|
|<a href="https://www.youtube.com/watch?v=qfS8-Qvvmfk" data-lity><img src="https://i.ytimg.com/vi/qfS8-Qvvmfk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qfS8-Qvvmfk" data-lity>What Router Settings Should You Change?</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|
|<a href="https://www.youtube.com/watch?v=hDxQSedfoKM" data-lity><img src="https://i.ytimg.com/vi/hDxQSedfoKM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=hDxQSedfoKM" data-lity>Phone Tethering as Fast As Possible</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|
|<a href="https://www.youtube.com/watch?v=aor29pGhlFE" data-lity><img src="https://i.ytimg.com/vi/aor29pGhlFE/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=aor29pGhlFE" data-lity>Internet Protocol - IPv4 vs IPv6 as Fast As Possible</a>|<a target="_blank" href="https://www.youtube.com/channel/UC0vBXGSyV14uvJ4hECDOl0Q" >Techquickie</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
