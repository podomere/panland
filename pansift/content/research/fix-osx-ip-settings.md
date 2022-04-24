---
title: "Fix OSX IP Settings"
subtitle: "Put A Pin In It?"
layout: research
ip_v4_address: "22.145.181.240"
date: 2022-04-24T18:31:58+01:00
draft: false
---

# Internet Addressing
On the Internet you might get a Public IPv4 address like <code>22.145.181.240</code> or an IPv6 address like <code>2000:9ee2:df76:f398:bbe0:766e:fb18:270e</code>. You can check this from [https://test-ipv6.com/](https://test-ipv6.com/). Yet, for 'non-techies' to try and communicate these addresses, or even call out MAC addresses like <code>a8:dc:eb:fa:b9:2d</code>, it can be error prone and gets complicated quickly. Additionally, this doesn't give you any historical data (especially back when previous problems occured).

# Accessing the Web
To get to a web page like https://anderson-mueller.info you initially access a DNS server to translate the host portion (anderson-mueller) combined with the Top Level Domain (info) of the URL, to an IP address like <code>14.22.175.152</code>. Your computer and browser actually sends its type with all web requests e.g. <br><code>Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko</code>

# Default Gateways
Your default gateway is normally an automatically configured address via DHCP. You get a default gateway like <code>192.168.102.189</code> (though they normally end in .1 or .254 depending upon the scope size) and this is where your computer sends all its traffic to be routed onwards. For <code>IPv6</code> we have a deep dive on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can check on Mac or Linux with:

## IPv4 (inc. VPN)
<code>netstat -rn -f inet | grep -i "default|0/1|128.0/1"</code>

<pre><code>
0/1      172.18.12.193  UGScg  utun3
default  192.168.102.189    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</code></pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

## IPv6 (inc. VPN)
<code>netstat -rn -f inet6 | grep -i "default|2000::/3"</code>

If you have IPv6 actvive the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre><code>
default   fe80:d9e9:c476:3cc6:5ff9%en0  UGcg   en0
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
domain_name_server (ip_mult): {2.138.141.15, 213.200.21.112}
end (none):
...</code></pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

<code>ipconfig getv6packet en0</code>

<pre><code>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr a8:dc:eb:fa:b9:2d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 21:46:8a:7e:f3:21
}</code></pre>

# Wired or Wireless
At the physical and data layer you may be using a wired or wireless (Wi-Fi) medium to send this data towards your router. 

## Apple macOS / OSX
No matter what version of OSX/macOS you are on, <code>10.11.4</code>, <code>11.3.7</code>, or <code>12.1.5</code>, there are a range of tools for troubleshooting. Unfortunately, between these manual actions and scripts, they don't give you a series of correlated values over time. This is where automated remote troubleshooting comes in to its own, especially for teams that embrace remote work and Work From Anywhere (WFA).

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
|<a href="https://www.youtube.com/watch?v=UTdOiXV_kEA" data-lity><img src="https://i.ytimg.com/vi/UTdOiXV_kEA/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=UTdOiXV_kEA" data-lity>How to run Windows on any Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCT7WejN8j_nGiSfwK8TnBcw" >Macworld UK</a>|
|<a href="https://www.youtube.com/watch?v=BfuCWcf34kY" data-lity><img src="https://i.ytimg.com/vi/BfuCWcf34kY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=BfuCWcf34kY" data-lity>OS X Mavericks Finder Tips</a>|<a target="_blank" href="https://www.youtube.com/channel/UCT7WejN8j_nGiSfwK8TnBcw" >Macworld UK</a>|
|<a href="https://www.youtube.com/watch?v=UKscxSGdk3g" data-lity><img src="https://i.ytimg.com/vi/UKscxSGdk3g/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=UKscxSGdk3g" data-lity>macOS High Sierra news: Release date, features and more</a>|<a target="_blank" href="https://www.youtube.com/channel/UCT7WejN8j_nGiSfwK8TnBcw" >Macworld UK</a>|
|<a href="https://www.youtube.com/watch?v=TaIzIZUzQv0" data-lity><img src="https://i.ytimg.com/vi/TaIzIZUzQv0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TaIzIZUzQv0" data-lity>How to install El Capitan on your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCT7WejN8j_nGiSfwK8TnBcw" >Macworld UK</a>|
|<a href="https://www.youtube.com/watch?v=nFUc6EC4hmY" data-lity><img src="https://i.ytimg.com/vi/nFUc6EC4hmY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=nFUc6EC4hmY" data-lity>WWDC 2016: Best new features of macOS Sierra</a>|<a target="_blank" href="https://www.youtube.com/channel/UCT7WejN8j_nGiSfwK8TnBcw" >Macworld UK</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
