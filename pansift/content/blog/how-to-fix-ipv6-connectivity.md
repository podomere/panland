---
layout: post
date: "2022-03-02T15:35:00"
subtitle: Remote Work Is Hurting My Eyeballs, Make It Stop!
author: Donal
tags:
  - IPv6
  - DNS
  - IPv6 DNS
  - IPv4 DNS
  - AAAA
  - latency
  - macOS
  - userops
  - assurance
image: /images/blog/ipv6_duck.jpg
published: true
title: 'How To Fix IPv6 Connectivity'
---

**TL;DR:** IPv6 and IPv6 DNS often stops working on residential home routers. This can manifest in strange outages especially when your browser or computer continues to try using IPv6. Spot when this happens and fix it quickly by monitoring your IPv6 connectivity.

# The Diff Between IPv4 and IPv6
Our Internet runs primarily on two versions of the Internet Protocol; **IPv4** and **IPv6**. IPv4 is [running out](https://www.ripe.net/analyse/statistics/number-of-remaining-ipv4-addresses-daily) of addresses, but IPv6 is still abundant and will be for a very long time. ISP (Internet Service Providers) and mobile ISPs are increasingly giving out IPv6 addresses **only** and then use mechanisms like [CGNAT (Carrier Grade Network Address Translation)](https://en.wikipedia.org/wiki/Carrier-grade_NAT) to ration and share IPv4 pools amongst us. Not all web and Internet assets are available via IPv4 **and** IPv6, though many are available on both. 

You ask your computer for assets and web pages using words however it's the [**DNS (Domain Name System)**](https://en.wikipedia.org/wiki/Domain_Name_System) that tells your computer which IP addresses those assets are served by. DNS servers (caches/resolvers) answer your computer over whichever protocol is active and based upon the type of query they are asked. You may have IPv4 DNS servers or IPv6 DNS servers configured, or you may have both. 

Most of these processes happen _automagically_ including aspects of your IPv4, IPv6 and DNS settings being supplied by your local router. Your web browser and operating system then request DNS lookups which additionally leverage mechanisms like [Happy Eyeballs](https://en.wikipedia.org/wiki/Happy_Eyeballs) to decide which of the IPv4 or IPv6 supplied records to use.

## My IPv6
The next question is, does your ISP support IPv6 and should you be getting IPv6 connectivity?

# IPv6 Test
There are many ways to test your IPv6 settings and connectivity. You can do so manually by looking at your operating system settings, running command line tools, or visiting remote sites to check how you appear publicly on the IPv4 and IPv6 Internets. 

From the outside in, you should be represented by a public IPv4 and/or IPv6 address. You can manually check this by visiting [IPv6-Test](https://ipv6-test.com/) however this will only show you a specific point in time (tested over HTTPs) and will not show whether you have had any intermittent or historical issues. 

You really need to be testing continuously. This includes making DNS requests and sending IPv6 probes to both your default gateway and also out on to the Internet to be **100%** sure you are connected end-to-end and that assets are reachable outside of your ISP. Pinging your default gateway via [ICMP (Internet Control Message Protocol)](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) is one local test, but checking you can reach and query IPv6 DNS servers and other assets on the IPv6 Internet is another undertaking, so let's initially look at how you might perform these tests manually.

## IPv6 DNS Not Working
First, let's differentiate between IPv6 DNS requests for IPv6 _records_ and requests that actually _use IPv6 for transport_ i.e. requests that are sent using the IPv6 protocol. 

Without going too deep in to the DNS, you can ask a DNS server for IPv4 or IPv6 records. IPv4 address records are called "A" records and IPv6 address records are called "AAAA" records. You can ask for either type of Resource Record (RR) from either type of server 😎.

It's up to whomever owns the assets or pages you've requested as to whether they are a) accessible across the IPv4 or IPv6 Internet **and** b) whether they have the correct types of DNS RRs set to let us know "who" to ask!

### IPv6 DNS Not Resolving
**If your IPv6 DNS is not working, how would you know?** Well, quite often you don't. If your fundamental IPv6 connectivity goes down you may experience connectivity problems, be unable to reach IPv6 resources, and/or be unable to connect to your configured IPv6 DNS servers.

## IPv6 Test
We need to check you have full IPv6 connectivity and are represented by a globally routable IPv6 unicast address (rather than just a **non-routable** IPv6 link local address).

### IPv6 Link Local and Multicast
fe80::/10 are link-local addresses and ff00::/8 are multicast addresses. Your IPv6 default gateway will likely be an ```fe80::/10``` address but may be a global address.

### IPv6 Example
You can rapidly check IPv6 from the outside -> in by visiting [IPv6-Test](https://ipv6-test.com/) as mentioned earlier, or you could simply send some [ICMPv6](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol_for_IPv6) packets to Google's Public Primary DNS server <code>ping -6 2001:4860:4860::8888</code> . If either of those steps fail you then need to troubleshoot (partition your failure domain) and go step by step to find out what's wrong.

You can look for the presence of IPv6 addresses on a specific interface but let's kill two birds with one stone and see if you have a default route in your local IPv6 route table (macOS/Linux):

<code>netstat -rn -f inet6 | grep -a1 -i default | column -t</code>

The above should return at least one route (as per below) via a known interface such as "_en0_" on a Mac or "_wlan0_" depending upon your flavour of Linux. We're also assuming you don't have any fancy tunnels or VPNs set up for now! 

<pre style="border-radius: 20px; padding: 50px; background-color: #222;color: #fff;"><code>Destination  Gateway                        Flags  Netif  Expire
default      fe80::5a23:8cff:fe1a:5f21%en0  UGcg   en0
default      fe80::%utun0                   UGcIg  utun0
default      fe80::%utun1                   UGcIg  utun1
default      fe80::%utun2                   UGcIg  utun2
::1          ::1                            UHL    lo0</code></pre>

Next you might check if you can send data to the relevant IPv6 default gateway (using IPv6 of course!).

<code>ping6 fe80::5a23:8cff:fe1a:5f21%en0</code> 

**Note:** Notice that the IPv6 default gateway also specifies the interface "_en0_" too (which is different from IPv4 default gateways). If you manage to get responses, let's see if we can then talk to your configured IPv6 DNS servers.

**Note:** You could just ask for the record immediately from the IPv6 DNS server and then 

#### IPv6 DNS
You can also see which DNS servers are configured via <code>cat /etc/resolv.conf</code> or also <code>scutil --dns</code> on macOS.

Next we will check if you can send ICMPv6 requests to your IPv6 DNS server addresses, and then then try to ask your IPv6 configured DNS server for a record.

<code>ping6 2606:4700:4700::1111</code> 

On macOS and Linux a common tool called <code>dig</code> can be used to make test DNS requests and you can specify which IP protocol and query you would like to make. 

Making a test IPv6 query with <code>dig</code> could mean asking an IPv4 server for an IPv6 resource <code>dig @1.1.1.1 AAAA pansift.com</code> but what we really want here is to use the IPv6 protocol for transport i.e. ask an IPv6 server, using IPv6, for an IPv6 or IPv4 resource record <code>dig -6 @2606:4700:4700::1111 AAAA pansift.com</code>

You can try some different permutations for yourself but you should get a positive response in the answer section much like the following:

<pre style="border-radius: 20px; padding: 50px; background-color: #222;color: #fff;"><code>;; ANSWER SECTION:
pansift.com.		300	IN	AAAA	2606:4700:3033::6815:6023
pansift.com.		300	IN	AAAA	2606:4700:3032::ac43:ac41</code></pre>

Healthy responses are generally returned in less than 20ms. Good enough responses are often between 20-150ms but anything consistently higher means it might be time to configure and use another DNS server. See the section towards the end on differnet public IPv6 DNS servers.

At this point you should be connected on the IPv6 Internet and can check via [IPv6-Test](https://ipv6-test.com/) or with something like `cURL` to ensure you are getting HTTP status codes of `200`.

```curl -s -N -6 -I -L https://www.google.com | head -n1```

<pre style="border-radius: 20px; padding: 50px; background-color: #222;color: #fff;"><code>HTTP/2 200
</code></pre>

## Monitor IPv6 Traffic
The above is all essentially **toil** i.e. undifferentiated heavy lifting that requires you to manually get a command line on the problematic host (or try to get the user to find the terminal and type commands!). It doesn't help you spot intermittent problems or historical issues! 

It's important to keep an eye on whether or not remote workers are dual stack (IPv4 and IPv6) from the outset, and what ISPs they are connecting to as they work from different locations. PanSift solves for all of these issues [mentioned](/benefits) but let's keep rolling with the manual approach and potential solutions for now...

## How Do I Fix My IPv6
<br>

### Quick Wins
As noted previously, ensure you know whether or not you are supposed to have IPv6 as part of your service before changing or updating anything. **Always** take a backup of the configuration or note it all down before making any changes. Then, you can try some of the below:

<div class="table1-start"></div>
  
  
| Recommendations | 
| :----    |   
| By disabling and re-enabling a Wi-Fi interface or disconnecting an ethernet cable it forces your compuer to re-ask for settings from the local router via DHCP (IPv4) and to reassign addresses via [SLAAC](https://support.apple.com/en-gb/guide/security/seccb625dcd9/web) (this would also mean a fresh DHCPv6 request if applicable).      | 
| Log in to the local router and check that it is getting an IPv6 WAN/Internet address and is configured to hand out DNS settings via DHCP on the LAN (which should include IPv6 DNS server settings) though the router may offer its own address as a DNS cache/relay. You could also configure the public ones listed below.     | 
| Reboot your local router/modem and check it has no warnings or errors in its logs.     | 
|  Contact the nominated ISP support service to perform deeper health checks on your service, WAN connection, and account.     | 
<center><small>Table 1.0 - Quick Wins</small></center>
 <br> 
 <br> 
<div class="table1-end"></div>
<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table table-dark table-hover table-responsive');
})();
</script>

#### Disable IPv6
This is an **extreme** option and it is not recommended unless there is no other choice or solution found. You can disable IPv6 via the command line or via the GUI in macOS or Linux. 

##### macOS Disable IPv6
```networksetup -setv6off Ethernet```<br>
```networksetup -setv6off Wi-Fi```

##### macOS Enable IPv6
```networksetup -setv6automatic Wi-Fi```<br>
```networksetup -setv6automatic Ethernet```

##### Linux Disable IPv6
Check your specific flavour but most are alike for ["linux flavours"](https://www.google.com/search?q=linux+disable+ipv6).

## Alternate Public IPv6 DNS

### Google DNS IPv6
-   ```2001:4860:4860::8888```
-   ```2001:4860:4860::8844```
<br><br>

[More info...](https://developers.google.com/speed/public-dns/docs/using)

### Cloudflare DNS IPv6

-   ```2606:4700:4700::1111```
-   ```2606:4700:4700::1001```
<br><br>

[More info...](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-aaaa-record/)

### Quad9 DNS IPv6
-   ```2620:fe::fe```
-   ```2620:fe::9```
<br><br>

[More Quad9 info as some addresses offer "secured" and "insecure" services...](https://www.quad9.net/support/faq/#ipv6_support)
<br><br>

# Automating It All With PanSift
The other option is to just run an instant troubleshooting tool like [PanSift](/) which continuously monitors a range of IPv6 metrics, settings, and even Wi-Fi performance! 

As PanSift uses [Zero Touch Provisioning](https://en.wikipedia.org/wiki/ZTP) you can even get a family or team member to run it remotely with no set up fuss. You then keep an eye on their connectivity **remotely** for whenever they need help or inevitably report any issues.

<a href="/"><img src="/images/blog/dns_failures.png" class="rounded img-fluid" alt="PanSift screenshot"></a>

PanSift not only tracks your:

- [x] public facing IPv6 address
 - [x] default gateway IPv6 address, status, and latency
 - [x] local interface IPv6 addresses
 - [x] IPv6 DNS performance (cached RRs + uncached unique RRs)
 - [x] traceroutes via IPv6 (which include ASN paths)
 - [x] but also lots of other useful IPv4, performance and Wi-Fi metrics continuously!
<br><br>

PanSift surfaces insights and issues so troubleshooting is instantaneous and easy, including suggesting clear Wi-Fi channels and remediation steps.

<a href="/"><img src="/images/blog/example_dns_failures.png" class="rounded img-fluid" alt="PanSift screenshot"></a>