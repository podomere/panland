---
layout: post
date: "2022-03-02T15:35:00"
subtitle: Remote Work Is Hurting My Eyeballs, Make It Stop
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
Our Internet runs primarily on two versions of the Internet Protocol; **IPv4** and **IPv6**. IPv4 is [running out](https://www.ripe.net/analyse/statistics/number-of-remaining-ipv4-addresses-daily) of addresses but IPv6 is still abundant and will be for a very long time. ISP (Internet Service Providers) and mobile ISPs are increasingly giving out IPv6 addresses **only** and then use mechanisms like [CGNAT (Carrier Grade Network Address Translation)](https://en.wikipedia.org/wiki/Carrier-grade_NAT) to ration and share IPv4 pools amongst us. Not all web and Internet assets are available via IPv4 **and** IPv6 though many are available on both.  You ask your computer for assets and web pages in via words and **DNS (Domain Name System)** tells your computer which IP addresses those assets are served by. DNS servers (caches/resolvers) will answer your computer based upon the type of query they are asked and over whichever IP protocol is active and has DNS servers configured. Most of this happens automagically, from your local router handing out IPv4, IPv6, and DNS settings, to performing the lookups leveraging mechanisms like [Happy Eyeballs](https://en.wikipedia.org/wiki/Happy_Eyeballs)

## My IPv6
The next question is, does your ISP support IPv6 and are you supposed to be getting IPv6 connectivity?

# IPv6 Test
There are many ways and tools to test your IPv6 settings and connectivity. You can do so manually by looking at your operating system settings, running command line tools, or visiting remote sites to check how you appear on the IPv4 and IPv6 Internets. From the outside in, you should be represented by a public IPv4 and/or IPv6 address. You can manually check this by visiting [IPv6-Test](https://ipv6-test.com/) however this only shows you a point in time (accessed via HTTPs) and not whether you have any intermittent or historical issues. 

You really need to be testing constantly, which includes making DNS requests and sending IPv6 probes to both your default gateway and out on to the Internet to be 100% sure you are connected end-to-end. Pinging your default gateway via [ICMP (Internet Control Message Protocol)](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol) is one thing, but checking you can reach and query IPv6 DNS servers and other assets on the IPv6 Internet is another.

## IPv6 DNS Not Working
Let's differentiate between IPv6 DNS requests for IPv6 _records_ and requests that _use IPv6_ i.e. requests that are sent over the IPv6 protocol. 

Without going too deep in to the DNS, you can ask a DNS server for IPv4 or IPv6 records. IPv4 address records are called "A" records and IPv6 address records are called "AAAA" records. You can ask for either type of Resource Records (RRs) from either type of server 😎.

It's up to whomever owns the assets you've requested as to whether they are a) accessible across the IPv4 or IPv6 Internet **and** b) whether they have the correct types of DNS RRs to let us know how to get there!

### IPv6 DNS Not Resolving

**If your IPv6 DNS is not working, how would you know?** Well, quite often you don't. If your fundamental IPv6 connectivity goes down you may experience a full outage or just be unable to connect to your configured IPv6 DNS servers and any other IPv6 resources.

## IPv6 Test

First we should check you have IPv6 connectivity and actually have a globally routable IPv6 unicast address (versus a **non-routable** IPv6 link local address).

### IPv6 Link Local and Multicast
FE80::/10 are link-local addresses and FF00::/8 are multicast addresses.

### IPv6 Example

You could quickly jump to looking from the outside -> in by visiting [IPv6-Test](https://ipv6-test.com/) as mentioned earlier or you could simply send some ICMP packets to Google's Public Primary DNS server <code>ping -6 2001:4860:4860::8888</code> , yet if either of those steps fail, you will then need to troubleshoot (partition your failure domain) and go step by step.

You can look for the presence of IPv6 addresses on a specific interface but let's see if you have a default route **first** in your local IPv6 table (macOS/Linux) to kill two birds with one stone:

<code>netstat -rn -f inet6 | grep -a1 -i default | column -t</code>

which should return at least one route (below) via a known interface such as "en0" on a Mac or "eth0" depending upon your flavour of Linux. We're also assuming you don't have any fancy tunnels set up too! 

<pre style="border-radius: 20px; padding: 50px; background-color: #222;color: #fff;"><code>Destination  Gateway                        Flags  Netif  Expire
default      fe80::5a23:8cff:fe1a:5f21%en0  UGcg   en0
default      fe80::%utun0                   UGcIg  utun0
default      fe80::%utun1                   UGcIg  utun1
default      fe80::%utun2                   UGcIg  utun2
::1          ::1                            UHL    lo0</code></pre>

Now you might check if you can send data to that IPv6 default gateway (using IPv6 of course!).

<code>ping6 fe80::5a23:8cff:fe1a:5f21%en0</code> 

**Note:** Notice that the IPv6 default gateway also specifies the interface too (which is different from IPv4). If you get replies, now let's see if we can figure out and talk to your IPv6 configured DNS servers.

Then you would check if you can send ICMP requests to your IPv6 DNS server, and then whether you have IPv6 general connectivity on the wider IPv6 Internet. After that, you would then try to ask your IPv6 configured DNS server for a record.

**Note:** You could just ask for the record immediately from the IPv6 DNS server and then 

#### IPv6 DNS

On macOS and Linux a common tool called <code>dig</code> can be used to make test DNS requests and you can specify which IP protocol and query you would like to make. You can also see which DNS servers are configured via <code>cat /etc/resolv.conf</code> or also <code>scutil --dns</code> on macOS.

Making a test IPv6 query with <code>dig</code> can mean asking an IPv4 server for an IPv6 resource <code>dig @1.1.1.1 AAAA pansift.com</code> but what we really want is to use the IPv6 protocol for transport i.e. ask an IPv6 server, using IPv6, for an IPv6 or IPv4 resource record <code>dig -6 @2606:4700:4700::1111 AAAA pansift.com</code>

You can try some permutations yourself but you should get a positive response in the answer section much like:

<pre style="border-radius: 20px; padding: 50px; background-color: #222;color: #fff;"><code>;; ANSWER SECTION:
pansift.com.		300	IN	AAAA	2606:4700:3033::6815:6023
pansift.com.		300	IN	AAAA	2606:4700:3032::ac43:ac41</code></pre>

Healthy responses are below 20ms, good enough are between 20-150ms and anything consistently higher means it might be time to configure another DNS server. See the section towards the end on differnet public IPv6 DNS servers.

## Monitor IPv6 Traffic
The above is all essentially toil, undifferentiated heavy lifting, requires you to get command line on a remote host (or try and get a user to find the terminal and type commands), and doesn't help you spot intermittent problems or historical issues! It's important to keep an eye on whether or not remote workers are dual stack (IPv4 and IPv6) from the outset, and what ISPs they are connecting through as they work from different locations. PanSift solves for all of these issues [mentioned](/benefits) but let's keep rolling with the manual approach and potential solutions for now...

## How Do I Fix My IPv6
### Quick Wins
As noted previously, ensure you had or should have IPv6 before changing or updating anything and **always** take a backup of the configuration or note it all down before potentially making things worse rather than better.

 - [x] By disabling and re-enabling a Wi-Fi interface or disconnecting an ethernet cable, it forces your compuer to re-ask for settings from the local router via DHCP.
 - [x] Log in to the local router and check that it is getting an IPv6 WAN/Internet address and is configured to hand out IPv6 settings on the LAN which should include IPv6 DNS server settings (unless it is handing out its own address as a DNS cache/relay)
 - [x] Reboot your local router/modem and check it has no warnings or errors in the logs.
 - [x] Contact the nominated ISP support service to perform deeper health checks on your service and account.
<br>
<br>

### Disable IPv6
This is an extreme option and it is not recommended unless there is no other option. You can disable IPv6 via the command line or in the GUI of macOS or Linux. 

#### macOS Disable IPv6
<code>networksetup -setv6off Ethernet && networksetup -setv6off Wi-Fi</code>

#### macOS Enable IPv6
<code>networksetup -setv6automatic Wi-Fi && networksetup -setv6automatic Ethernet</code>

#### Linux Disable IPv6
Check your specific flavour but most are alike ["linux disable ipv6"](https://www.google.com/search?q=linux+disable+ipv6).

## Google DNS IPv6
-   ```2001:4860:4860::8888```
-   ```2001:4860:4860::8844```
<br><br>

[More info...](https://developers.google.com/speed/public-dns/docs/using)

## Cloudflare DNS IPv6

-   ```2606:4700:4700::1111```
-   ```2606:4700:4700::1001```
<br><br>

[More info...](https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-aaaa-record/)

## Quad9 DNS IPv6
-   ```2620:fe::fe```
-   ```2620:fe::9```
<br><br>

[More info as some offer "secured" and "insecure" services](https://www.quad9.net/support/faq/#ipv6_support)

# Automating It All With PanSift
The other option is to just run an instant troubleshooting tool like PanSift which monitors a range of IPv6 metrics, settings, and even Wi-Fi performance. As PanSift is Zero Touch Provisioning you can even get family or team members to run it remotely with no fuss and then keep an eye on their connectivity remotely and retrospectively for whenever they need help. 

[![Foo](/images/blog/dns_failures.png)](/)

PanSift not only tracks your:

 - [x] public IPv6 address
 - [x] default gateway IPv6 status and latency
 - [x] local interface IPv6 (non-link local)
 - [x] IPv6 DNS performance (cached RRs and uncached unique RRs)
 - [x] traceroutes via IPv6 which include ASNs
<br><br>

But surfaces insights and issues immediately so troubleshooting is a breeze including suggesting clear Wi-Fi channels and remediation steps.

[![Foo](/images/blog/example_dns_failures.png)](/)