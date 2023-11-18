---
title: "How To Troubleshoot Apple No-access"
subtitle: "Expansion Play?"
layout: research
ip_v4_address: "6.49.102.203"
date: 2023-11-18T18:49:17+00:00
draft: false
---

## Understanding Internet Addressing

When using the internet, you will be assigned a public IP address, which can be in the form of IPv4 like ```6.49.102.203``` or IPv6 like ```2000:6c4b:bab6:cbba:11f3:6bc5:8347:7efc```. Verification of this information can be done through [https://test-ipv6.com/](https://test-ipv6.com/). However, for those who are not technically inclined, communicating these addresses, or even referencing MAC addresses like ```0d:1b:4d:f4:e6:aa```, can quickly become complicated and error-prone. Moreover, it might not provide historical data, particularly from past incidents.
## Navigating the World Wide Web
Accessing a web page such as https://renner.info involves an initial visit to a DNS server, which translates the host portion (renner) along with the Top Level Domain (info) of the URL into an IP address like ```149.50.224.62```. Interestingly, your computer and browser send their type with all web requests, for example: <br>```Mozilla/5.0 (Windows NT x.y; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0```
## The Significance of Default Gateways
The default gateway is typically an automatically configured address through DHCP. A default gateway like ```192.0.0.249``` (although they often end in .1 or .254 based on the scope size) is where your computer directs all its traffic to be routed onwards. For ```IPv6```, further information can be found in our in-depth guide on [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/). If you are using Mac or Linux, the gateway can be verified using the following command:
<br>
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.249    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:984c:bf46:d4b7:b532%en0  UGcg   en0
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
domain_name_server (ip_mult): {169.93.114.162, 194.26.115.143}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr 0d:1b:4d:f4:e6:aa
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr 51:b1:18:d8:ca:f9
}</pre>




## How to Troubleshoot Connectivity Issues
When it comes to transferring data at the physical and data layer, you may encounter problems with either wired or wireless (Wi-Fi) connections to your router.
### Troubleshooting Tips for Apple macOS / OSX
Regardless of whether you're using OSX or macOS, whether it's version ```10.11.6```, ```11.3.8```, or ```12.1.1```, there are various tools available for troubleshooting. However, these tools do not provide a series of correlated values over time, which is where automated remote troubleshooting becomes beneficial, especially for remote work and Work From Anywhere (WFA) teams.
#### Useful Built-in Scripts
One incredibly useful tool on OSX/macOS is the ```sudo wdutil info``` command, which provides a dump of current wireless settings via the command line interface (CLI) and can also be configured to generate specific troubleshooting logs. Additionally, the ```sysdiagnose``` tool offers a more comprehensive range of logs, although many are only relevant to a specific point in time, similar to wdutil.

Running ```sudo nohup /usr/bin/sysdiagnose -u &``` in the background will produce logs in the ```/var/tmp/<blah>.tar.gz``` file. If you prefer to run it *interactively* (even though there's not much interaction), you can use ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. When not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes are approximately 300MB.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity><img src="https://i.ytimg.com/vi/TWzWd_DiaJ0/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=TWzWd_DiaJ0" data-lity>Mac Activity Monitor - How to Troubleshoot Your Mac</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
