---
title: "How Can I Troubleshoot Wifi Router Issues"
subtitle: "Get Value Out Of The Conversation?"
layout: research
ip_v4_address: "139.71.136.174"
date: 2023-11-18T20:59:40+00:00
draft: false
---

## Understanding Internet Protocol Addressing

The way the Internet works involves having a Public IPv4 address, such as ```139.71.136.174``` or an IPv6 address like ```2000:2eff:61d1:cf36:acbd:4266:c7be:d290```. We can verify this by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, explaining these addresses, or even calling out MAC addresses like ```ca:06:d1:96:c0:5d```, can be challenging for non-technical users. Furthermore, it does not provide any historical data.
## The Process of Connecting to Websites

When accessing a website like https://tillman.co, you begin by reaching out to a DNS server to convert the host portion (tillman) in combination with the Top Level Domain (co) of the URL into an IP address, such as ```72.71.121.52```. Your computer and browser both send their type with all web requests, for instance: <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways

Your default gateway is typically an automatically assigned address via DHCP. For example, you might receive a default gateway like ```192.0.0.243```, although they often end in .1 or .254 depending on the scope size. This is the point where your computer directs all its traffic to be routed onwards. For IPv6, there is an in-depth explanation available on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can check on Mac or Linux using:

<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.243    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:ac49:1057:ea4e:ea94%en0  UGcg   en0
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
domain_name_server (ip_mult): {37.146.160.215, 72.179.70.138}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr ca:06:d1:96:c0:5d
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ef:bd:36:91:55:b8
}</pre>




## Resolving Connectivity Issues for Wired and Wireless Networks
When it comes to transmitting data to your router, you may be using either a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Actions to Take for Apple macOS / OSX Users
Whether you are using OSX/macOS versions such as `10.14.2`, `11.6.9`, or `12.2.5`, there are a variety of troubleshooting tools available. However, these manual interventions and scripts do not provide a continuous set of related data points over time. This is where automated remote troubleshooting becomes crucial, especially for teams that have adopted remote work and embrace the concept of Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One valuable tool on OSX/macOS is the `sudo wdutil info` command, which provides a comprehensive dump of current wireless settings to the CLI, and it can also be configured to generate specific logs for troubleshooting purposes. Moreover, the `sysdiagnose` tool can be used to generate a wide range of logs, although much of the information is only relevant to wireless settings at a specific point in time, similar to wdutil.

Running the command `sudo nohup /usr/bin/sysdiagnose -u &` will execute it in the background and save logs in the `/var/tmp/<blah>.tar.gz` directory. If you prefer to run it *interactively* (although there is minimal interaction), you can execute the command `sudo /usr/bin/sysdiagnose` which will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to `/var/tmp` using Finder or use Cmd+Shift+G in Finder to direct it to the specific path. However, keep in mind that the file sizes are approximately 300MB or slightly more.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity><img src="https://i.ytimg.com/vi/qmt2DSkYT_k/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=qmt2DSkYT_k" data-lity>178   Why Wyebot with Roger Sands</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity><img src="https://i.ytimg.com/vi/IDWliQnBNYM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=IDWliQnBNYM" data-lity>TIP OpenWifi Demo Network Setup for WLPC   Drew Lentz   WLPC Prague 2022</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity><img src="https://i.ytimg.com/vi/5nvwM3bDvbY/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=5nvwM3bDvbY" data-lity>WLAN Troubleshooting   David Coleman   WLPC US Phoenix 2016</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity><img src="https://i.ytimg.com/vi/EWURmcra5_4/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=EWURmcra5_4" data-lity>Wireless Association &amp; Authentication Pass-Fail   Brian Long   WLPC US Phoenix 2017</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|
|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity><img src="https://i.ytimg.com/vi/r9oXNxgAKhM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=r9oXNxgAKhM" data-lity>Benefits of WPA3, Enhanced Open, and Easy Connect   P. Ebbecke, P. Correll   WLPC Prague 2018</a>|<a target="_blank" href="https://www.youtube.com/channel/UCIzBSS46vcqhwmBZ7ZpY-yg" >Wireless LAN Professionals</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
