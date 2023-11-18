---
title: "Check Apple Connectivity"
subtitle: "Out Of The Box?"
layout: research
ip_v4_address: "152.41.60.73"
date: 2023-11-18T18:41:32+00:00
draft: false
---

## Explanation of Internet Protocol Addressing

When it comes to the Internet, you could be assigned a Public IPv4 address such as ```152.41.60.73``` or an IPv6 address like ```2000:87a0:4d83:7ac0:b10e:9bd1:9e9:1883```. Verifying this can be done at [https://test-ipv6.com/](https://test-ipv6.com/). However, attempting to convey these addresses, or even referencing MAC addresses like ```0c:a9:32:80:55:b3```, can be prone to errors and become complex for individuals who are not as technologically inclined. Moreover, these methods do not provide any historical information, especially from past occurrences of issues.
## Initial Approach to Accessing Websites

When wanting to access a web page such as https://rempel.com, the first step is reaching out to a DNS server to convert the host portion (rempel) together with the Top Level Domain (com) of the URL into an IP address like ```85.134.65.163```. Interestingly, your computer and browser send this information along with every web request, such as <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```.
## Significance of Default Gateways

The default gateway usually possesses an address that is automatically configured via DHCP. This default gateway, like ```192.0.0.88``` (although they typically end in .1 or .254 depending on the scope size), serves as the location where your computer directs all its traffic to be rerouted. Information on how to rectify ```IPv6``` connectivity is available in our in-depth analysis at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but can also be verified on Mac or Linux using the following method:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.88    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:1389:d9ae:2bc1:6ad5%en0  UGcg   en0
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
domain_name_server (ip_mult): {149.166.174.19, 21.245.5.5}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0c:a9:32:80:55:b3
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 20:d5:e6:52:d9:f3
}</pre>




## How to Resolve Issues with Wired and Wireless Connections

When transferring data to your router, you might be using either a wired or wireless (Wi-Fi) medium at the physical and data layer.
### Effective Troubleshooting Techniques for Apple macOS / OSX
Regardless of whether you are running OSX/macOS versions such as ```10.13.7```, ```11.1.1```, or ```12.3.2```, there are various tools available for troubleshooting. However, these manual processes and scripts do not provide a set of correlated values over time. This is where remote automated troubleshooting becomes essential, particularly for teams that are adapting to remote work and Work From Anywhere (WFA) practices.
#### Useful Built-in Tools for Troubleshooting
One of the useful tools on OSX/macOS is ```sudo wdutil info```, which provides a dump of current wireless settings to the CLI and can also be configured to generate specific logs for troubleshooting. Moreover, the ```sysdiagnose``` tool offers a comprehensive approach by generating a wide range of logs (although many are point-in-time related to wireless, similar to wdutil).

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will write logs to ```/var/tmp/<blah>.tar.gz```. Alternatively, running ```sudo /usr/bin/sysdiagnose``` interactively (despite minimal interaction) will prompt a privacy warning and open Finder in the correct location. However, be cautious of the file sizes, which are around 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity><img src="https://i.ytimg.com/vi/7KdhJimuhNw/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=7KdhJimuhNw" data-lity>Securing macOS Big Sur</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|

<center><small>Table 1.0 - Video Help</small></center>
 <br>
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table thead-dark table-striped table-responsive rounded').attr('id', 't1');
    $('#t1').find('thead').addClass('thead-dark');
})();
</script>
