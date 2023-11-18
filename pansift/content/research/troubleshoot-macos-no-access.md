---
title: "Troubleshoot MacOS No-access"
subtitle: "Thought Leader?"
layout: research
ip_v4_address: "120.62.255.98"
date: 2023-11-18T17:12:35+00:00
draft: false
---

## Understanding How Internet Addresses Function

When using the Internet, you are assigned a Public IPv4 address, such as ```120.62.255.98```, or an IPv6 address, like ```2000:bb81:fdbe:b865:a25a:f779:9cc1:51de```. These addresses can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, conveying these addresses or even referencing MAC addresses like ```3f:8b:5f:05:39:52``` can be prone to error and become complex quickly. Moreover, this method does not provide any historical data, especially concerning past issues.
## Navigating the World Wide Web
Accessing a website, such as https://gleason-hayes.co, first involves connecting to a DNS server to convert the host portion (gleason-hayes) combined with the Top Level Domain (co) of the URL into an IP address, such as ```34.246.93.23```. In fact, your computer and browser include their type in all web requests, for example:<br> ```Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A```
## The Significance of Default Gateways
Typically, your default gateway is an address that is automatically configured via DHCP. A default gateway like ```192.0.0.242``` is assigned (although they usually end in .1 or .254, depending on the scope size) and serves as the focal point for all outbound traffic from your computer. For ```IPv6```, there is an in-depth guide available at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/), but you can verify this on Mac or Linux using:<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.242    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:d578:3869:c2d2:4b54%en0  UGcg   en0
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
domain_name_server (ip_mult): {141.100.154.33, 119.146.27.79}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 3f:8b:5f:05:39:52
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr b5:40:26:9a:86:7a
}</pre>




## Diagnosing and Resolving Connectivity Issues
When it comes to transmitting data to your router, you may encounter connectivity issues at the physical and data layer while using either a wired or wireless (Wi-Fi) medium.
### Tips for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS ```10.11.5```, ```11.0.7```, or ```12.3.4```, there is a variety of troubleshooting tools available. However, manual actions and scripts do not provide a continuous set of correlated values over time. This is where automated remote troubleshooting becomes beneficial, especially for teams that are adopting remote work and Work From Anywhere (WFA) policies.
#### Utilizing Pre-Existing Scripts
An effective tool for troubleshooting on OSX/macOS is ```sudo wdutil info```, which provides a dump of the current wireless settings through the CLI. It can also be configured to generate specific logs for troubleshooting purposes. Additionally, the ```sysdiagnose``` tool offers a more comprehensive approach, generating a wide range of logs (although many are only relevant to wireless settings, similar to wdutil).

To run it in the background and output logs to ```/var/tmp/<blah>.tar.gz```, use the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For an *interactive* process, run ```sudo /usr/bin/sysdiagnose``` and navigate to the correct location in Finder or via ```/var/tmp``` (using Cmd+Shift+G in Finder). Keep in mind that the file size is approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
