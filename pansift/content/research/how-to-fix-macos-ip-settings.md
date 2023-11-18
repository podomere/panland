---
title: "How To Fix MacOS IP Settings"
subtitle: "Heads Down?"
layout: research
ip_v4_address: "181.7.238.45"
date: 2023-11-18T17:24:05+00:00
draft: false
---

## Understanding How Internet Addressing Functions

When using the Internet, you may receive a Public IPv4 address, such as ```181.7.238.45```, or an IPv6 address, such as ```2000:f2a5:18ba:922e:1cdd:54d1:1b99:d75e```. Verification of this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, conveying these addresses to individuals who are not knowledgeable in technology, or even referencing MAC addresses like ```bc:c5:33:bb:8d:65```, can be prone to errors and quickly become complex. Furthermore, this does not provide any historical data, especially from past issues.
## Navigating the Internet
Accessing a web page such as https://schmidt.co initially involves reaching out to a DNS server to convert the host portion (schmidt) combined with the Top Level Domain (co) of the URL into an IP address, such as ```192.7.28.111```. Every web request from your computer and browser includes the respective type, for example:<br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Significance of Default Gateways
Typically, your default gateway is an address configured automatically via DHCP. An example of a default gateway is ```192.0.0.247``` (although they usually end in .1 or .254 depending on the scope size), and this is where your computer directs all its traffic to be routed further. For ```IPv6```, detailed instructions are provided in our article [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or it can be verified on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.247    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:df1:1f30:8bac:f2fa%en0  UGcg   en0
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
domain_name_server (ip_mult): {195.97.217.218, 90.35.113.116}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr bc:c5:33:bb:8d:65
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr cd:3a:d1:10:59:73
}</pre>




## Resolving Issues with Wired and Wireless Connections
When it comes to transmitting data to your router, you might be using either a wired or a wireless (Wi-Fi) medium at the physical and data layer.
### Tips for Apple macOS / OSX Troubleshooting
No matter which version of OSX/macOS you are running, such as `10.14.1`, `11.0.8`, or `12.0.3`, there are various troubleshooting tools available. However, these manual actions and scripts do not provide a series of correlated values over time. This is where automated remote troubleshooting becomes valuable, especially for teams engaging in remote work and Work From Anywhere (WFA).
#### Utilizing Built-in Scripts for Assistance
One useful tool on OSX/macOS is the `sudo wdutil info` command, which provides a dump of the current wireless settings to the CLI and can also be configured to generate specific troubleshooting logs. Additionally, the `sysdiagnose` tool offers more comprehensive logging capabilities, although much of it is only related to wireless and is point-in-time specific, similar to wdutil.

Running `sudo nohup /usr/bin/sysdiagnose -u &` in the background will generate logs in `/var/tmp/<blah>.tar.gz`. For interactive use (although there is minimal interaction), you can run `sudo /usr/bin/sysdiagnose`, which will prompt a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to `/var/tmp` using Finder with Cmd+Shift+G to locate the files. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
