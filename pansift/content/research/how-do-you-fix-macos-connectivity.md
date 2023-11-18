---
title: "How Do You Fix MacOS Connectivity"
subtitle: "Plug And Chug?"
layout: research
ip_v4_address: "59.173.215.18"
date: 2023-11-18T17:48:24+00:00
draft: false
---

## Understanding Internet Addressing

When using the Internet, you are assigned a Public IPv4 address such as ```59.173.215.18``` or an IPv6 address like ```2000:c12:2580:adba:20df:8917:a8c7:1b3f```. To verify this, you can visit [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technology-savvy, conveying and referencing these addresses can be prone to errors and can become complex very quickly. Additionally, this method does not provide any historical data, especially when previous issues have occurred.
## Navigating the World Wide Web
When accessing a website such as https://erdman.info, your first step is to connect to a DNS server to convert the host portion (erdman) combined with the Top Level Domain (info) of the URL into an IP address, such as ```196.179.72.175```. In fact, your computer and browser include their types in all web requests e.g. <br>```Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; AS; rv:11.0) like Gecko```
## Understanding the Significance of Default Gateways
Your default gateway is typically an automatically configured address through DHCP. This results in a default gateway such as ```192.0.0.192``` (although they usually end in .1 or .254 depending on the scope size), which is where your computer sends all its traffic to be routed onwards. For ```IPv6```, a more detailed explanation can be found in our [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), or you can verify this on Mac or Linux using:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.192    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:b84f:e945:d570:6ce6%en0  UGcg   en0
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
domain_name_server (ip_mult): {1.164.255.72, 173.153.150.191}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 94:9e:c3:4b:06:51
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr d8:3f:e2:0c:9f:78
}</pre>




## Solutions for Addressing Connectivity Issues

When it comes to transmitting data to your router, you may encounter connectivity issues using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Methods for Troubleshooting on Apple macOS / OSX
Regardless of whether you are using OSX or macOS in version ```10.11.6```, ```11.1.3```, or ```12.1.9```, there are various troubleshooting tools available. However, these tools may not provide a series of correlated values over time, which is essential for remote troubleshooting, especially for teams engaged in remote work and Work From Anywhere (WFA).
#### Utilize Built-in Scripts for Assistance
On OSX/macOS, the ```sudo wdutil info``` tool is quite useful as it provides current wireless settings for troubleshooting purposes. Similarly, the ```sysdiagnose``` tool can generate a wide range of logs, although many of these are only relevant to the wireless settings at a specific point in time, similar to wdutil.

To run ```sysdiagnose``` in the background and generate logs in ```/var/tmp/<blah>.tar.gz``` directory, use the command  ```sudo nohup /usr/bin/sysdiagnose -u &```. Alternatively, you can run it *interactively* by using  ```sudo /usr/bin/sysdiagnose``` with a privacy warning. When not running in the background, it will open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
