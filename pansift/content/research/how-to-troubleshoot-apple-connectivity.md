---
title: "How To Troubleshoot Apple Connectivity"
subtitle: "Out Of Pocket?"
layout: research
ip_v4_address: "213.233.27.170"
date: 2023-11-18T18:48:24+00:00
draft: false
---

## Understanding How Internet Addressing Functions

When accessing the internet, you might come across a Public IPv4 address such as ```213.233.27.170``` or an IPv6 address like ```2000:fbe1:dc29:9f07:cdff:a7e1:b278:74a8```. You can verify this information by visiting [https://test-ipv6.com/](https://test-ipv6.com/). However, for individuals who are not well-versed in technology, relaying and using these addresses, or even referencing MAC addresses like ```36:11:df:e8:c6:99```, can lead to errors and complications. Moreover, it does not provide any historical data, particularly when past issues have arisen.
## Navigating the World Wide Web
In order to access a website, such as https://gulgowski.info, the first step is to connect to a DNS server to convert the host portion (gulgowski) in combination with the Top Level Domain (info) of the URL into an IP address, such as ```16.198.199.137```. Each time you make a web request, your computer and browser sends its specifications, for example:
```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
Your default gateway is typically an address that is automatically configured through DHCP. It is a crucial component, such as ```172.27.201.81``` (usually ending in .1 or .254 based on the scope size), to which your computer directs all of its traffic for further routing. For ```IPv6```, a comprehensive guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) is available. On Mac or Linux systems, you can check this by using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  172.27.201.81    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1d2b:86da:e47:8c7c%en0  UGcg   en0
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
domain_name_server (ip_mult): {21.60.75.150, 214.203.106.53}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 36:11:df:e8:c6:99
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 63:f0:c0:90:bb:ce
}</pre>




## Troubleshooting Connectivity Issues 
When it comes to transferring data to your router, you may encounter problems either with a wired or wireless (Wi-Fi) connection at the physical and data layer.
### Resolving Connectivity Problems on Apple Devices 
Regardless of the version of OSX or macOS you are using, whether it's "10.13.5", "11.4.7", or "12.0.1", there are various tools available for troubleshooting. However, these tools do not provide a set of correlated values over time, making it difficult to identify patterns. This is where remote troubleshooting becomes valuable, particularly for teams that embrace remote work and the Work From Anywhere (WFA) concept.
#### Utilizing Pre-installed Scripts for Assistance 
One of the most useful tools on OSX/macOS is the "sudo wdutil info" command, which allows for the extraction of current wireless settings in the Command Line Interface (CLI) and the generation of specific troubleshooting logs. Moreover, the "sysdiagnose" tool can be used to produce a wide array of logs, although many are only relevant to wireless issues, similar to wdutil.

Running "sudo nohup /usr/bin/sysdiagnose -u &" in the background will generate logs in "/var/tmp/<blah>.tar.gz". Alternatively, you can run "sudo /usr/bin/sysdiagnose" interactively, which will trigger a privacy warning. When not run in the background, it should open Finder in the appropriate location, or you can navigate to "/var/tmp" using Finder or Cmd+Shift+G. Keep in mind that the file sizes can be around 300MB, more or less.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
