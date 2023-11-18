---
title: "How Can I Fix OSX Connectivity"
subtitle: "Best Practice?"
layout: research
ip_v4_address: "24.37.71.182"
date: 2023-11-18T18:17:02+00:00
draft: false
---

## Understanding Internet Protocol Addressing

When using the Internet, individuals are assigned either a Public IPv4 address, such as ```24.37.71.182```, or an IPv6 address, for example, ```2000:2642:95bf:4d5c:4819:b14e:da23:cde```. These unique identifiers can be verified at [https://test-ipv6.com/](https://test-ipv6.com/). However, comprehending and communicating these addresses, including MAC addresses like ```c7:0d:cf:8d:0a:a7```, can be challenging for those without technical knowledge. Moreover, these addresses do not provide historical information, particularly when addressing past issues.
## Navigating the World Wide Web
When accessing a website like https://price.org, you initially connect to a DNS server to translate the host portion (price) combined with the Top Level Domain (org) of the URL into an IP address, such as ```169.222.1.218```. Any web request from your computer and browser includes information about its type, for example: <br>```Mozilla/5.0 (Windows; U; Win 9x 4.90; SG; rv:1.9.2.4) Gecko/20101104 Netscape/9.1.0285```
## Understanding the Significance of Default Gateways
Default gateways are typically automatically configured addresses through DHCP. Your computer is assigned a default gateway, such as ```192.0.0.133``` (although they usually end in .1 or .254 depending on the scope size), to which it sends all its traffic for routing. To troubleshoot IPv6 connectivity on Mac or Linux, a detailed guide can be found at [how-to-fix-ipv6-connectivity/](/blog/how-to-fix-ipv6-connectivity/) but you can also verify using the following commands.
### IPv4 Routes and the Host IPv4 Route Table (inc. VPN)
```netstat -rn -f inet | egrep -i "default|0/1|128.0/1"```

<pre>
0/1      172.18.12.193  UGScg  utun3
default  192.0.0.133    UGScg  en0
128.0/1  172.18.12.193  UGSc   utun3</pre>

**Note:** We are not just looking for the default but also for any VPN that overrides the public v4 address space.

### IPv6 Routes and the Host IPv6 Route Table (inc. VPN)
```netstat -rn -f inet6 | egrep -i "default|2000::/3"```

If you have IPv6 active the above should return at least one route (as per below) via a known interface such as "_en0_ " on a Mac. 

<pre>
default   fe80:c286:9f57:f264:cfcf%en0  UGcg   en0
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
domain_name_server (ip_mult): {18.56.181.164, 171.10.4.29}
end (none):
...</pre>

So, in the above we are not getting IPv6 DNS servers from the DHCPv4 reply but...

```ipconfig getv6packet en0```

<pre>
DHCPv6 REPLY (7) Transaction ID 0x80940b Length 76
Options[4] = {
  CLIENTID (1) Length 14: DUID LLT HW 1 Time 668691856 Addr c7:0d:cf:8d:0a:a7
  DNS_SERVERS (23) Length 32: 2606:4700:4700::1111, 2001:4860:4860::8844
  DOMAIN_LIST (24) Length 0:  Invalid
  SERVERID (2) Length 10: DUID LL HW 1 Addr fc:7e:8c:b5:22:a1
}</pre>




## Rectifying Connectivity Issues: Wired vs Wireless Solutions

When it comes to transmitting data to your router, the choice between wired and wireless (Wi-Fi) mediums at the physical and data layer can play a crucial role in troubleshooting and fixing connectivity issues.
### Effective Solutions for Apple macOS / OSX Users
Regardless of whether you are using OSX/macOS versions such as ```10.12.9```, ```11.5.3```, or ```12.3.8```, there exists a diverse range of troubleshooting tools at your disposal. However, these manual methods and scripts fail to provide a systematic set of interconnected values over a period of time. This is where automated remote troubleshooting takes the lead, especially for teams that have embraced remote work and the Work From Anywhere (WFA) concept.
#### Leveraging Native Scripts for Assistance
One incredibly beneficial tool on OSX/macOS is ```sudo wdutil info``` which provides a comprehensive rundown of the current wireless-related settings through the CLI, along with the option to generate specific logs for troubleshooting purposes. Furthermore, the ```sysdiagnose``` tool can be used to generate a wide range of logs, with the drawback being that much of it is only relevant to a specific point in time in relation to wireless, much like wdutil.

To run it in the background and have it write logs to ```/var/tmp/<blah>.tar.gz```, execute the command ```sudo nohup /usr/bin/sysdiagnose -u &```. For interactive operation, you can run ```sudo /usr/bin/sysdiagnose``` and it will display a privacy warning. If not run in the background, it should open Finder in the correct location, or you can navigate to ```/var/tmp``` using Finder with Cmd+Shift+G. Keep in mind that the file sizes hover around 300MB, give or take.
## Possibly Helpful Videos

<link href="/plugins/lity/css/lity.min.css" rel="stylesheet">
<script src="/plugins/lity/js/lity.min.js"></script>
<div class="table1-start"></div>

|Video | Title | Channel |
| :---: | :---: | :---: |
|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity><img src="https://i.ytimg.com/vi/JMKi6o9kaZI/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=JMKi6o9kaZI" data-lity>macOS Big Sur - What&#39;s New in Apple macOS 11</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity><img src="https://i.ytimg.com/vi/VwNYWAxHCgM/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=VwNYWAxHCgM" data-lity>Secret Mac Boot Commands - Mac Boot Key Combinations</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity><img src="https://i.ytimg.com/vi/RslZ4W1EPqk/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=RslZ4W1EPqk" data-lity>Spotlight on Spotlight - Hands-On Mac 7</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity><img src="https://i.ytimg.com/vi/HEbK-Tignuc/default.jpg" class="img-fluid"></a>|<a href="https://www.youtube.com/watch?v=HEbK-Tignuc" data-lity>On the Road to Big Sur 2 - Compatibility</a>|<a target="_blank" href="https://www.youtube.com/channel/UCg43DP8MdHVcl4rFK_delBg" >Hands-On Mac</a>|
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
