---
title: "How To Troubleshoot Mac Internet"
subtitle: "Two-way Street?"
layout: research
ip_v4_address: "79.163.40.171"
date: 2023-11-18T19:24:30+00:00
draft: false
---

## Explanation of Internet Addressing
When connecting to the internet, you are assigned a Public IPv4 address such as `79.163.40.171` or an IPv6 address like `2000:57fb:c291:5e95:ed2a:c116:43fc:4e32`. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those not well-versed in technology, conveying these addresses or even referencing MAC addresses such as `9b:fb:a4:15:ea:20` can be prone to errors and quickly become convoluted. In addition, the lack of historical data further complicates matters, especially when troubleshooting past issues.
## Navigating the Internet
To access a website such as https://willms.info, the process begins with contacting a DNS server to convert the host portion (willms) and the Top Level Domain (info) of the URL into an IP address like `197.54.109.160`. Every web request made by a computer and browser includes its type, such as <br>`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A`. 
## The Significance of Default Gateways
Typically, default gateways are automatically assigned addresses through DHCP. These gateways, such as `192.168.226.7`, typically end in .1 or .254 based on the scope size. This is where a computer sends all of its traffic to be routed to its intended destination. For `IPv6` connectivity troubleshooting, a comprehensive guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). Additionally, on Mac or Linux systems, the connectivity status can be verified with the commands provided.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.168.226.7    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:3ff1:e15c:6ae7:4ab9%en0  UGcg   en0
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
domain_name_server (ip_mult): {158.221.53.219, 245.221.121.21}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 9b:fb:a4:15:ea:20
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr ac:54:66:70:04:bd
}</pre>




## Addressing Wired and Wireless Connectivity Issues
In the process of transmitting data to your router, you may utilize either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Resolving Technical Issues on Apple macOS / OSX Platforms
Regardless of whether your system is running on OSX/macOS versions such as ```10.11.5```, ```11.3.3```, or ```12.3.9```, there exists a wide array of tools available for troubleshooting. However, these manual measures and scripts do not provide a set of correlated values over a period of time. This is where automated remote troubleshooting becomes crucial, especially for teams operating in remote and Work From Anywhere (WFA) setups.
#### Utilizing Pre-installed Scripts for Assistance
One particularly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which offers a dump of the current wireless settings to the CLI and can be configured to produce specific logs for troubleshooting purposes. Additionally, the more comprehensive ```sysdiagnose``` tool can generate a multitude of logs (although much of it is only relevant to wireless networks, similar to wdutil).

By running ```sudo nohup /usr/bin/sysdiagnose -u &```, the tool will run in the background and write logs to ```/var/tmp/<blah>.tar.gz```. For an *interactive* run (although there is minimal interaction), you can execute the ```sudo /usr/bin/sysdiagnose``` command, which will trigger a privacy warning. When not run in the background, it should open Finder in the correct location, allowing you to locate the logs in ```/var/tmp``` or use Finder with Cmd+Shift+G to navigate to the path. Keep in mind that the file sizes can be around 300MB, give or take.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
