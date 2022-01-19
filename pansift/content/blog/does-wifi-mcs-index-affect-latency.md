---
layout: post
date: "2022-01-19T20:31:00"
subtitle: A data driven approach to unlocking the secrets of Wi-Fi.
author: Donal
tags:
  - mcs
  - latency
  - influxdb
  - influx
  - telegraf
  - pansift
  - macOS
  - wlan
  - 802.11
  - userops
  - Wi-Fi
  - assurance
  - Wi-Fi assurance
  - wlan
  - tsdb
  - data science
image: /images/blog/bluelights.jpg
published: true
title: 'Does MCS Index Affect Latency?'
---

**TL;DR:** From hundreds of thousands of data points, MCS would seem **not to correlate with latency**.

The question of latency and Wi-Fi intrigues me (especially for MCS indices of **4** and below). You may jump to conclusions and holler "it depends", but does it? 

My gut told me latency depends on more than just **MCS*. Although clients use of MCS as a dynamic encoding scheme steps down to bolster resilience, I envisaged it would also constrain throughput and aggrevate congestion. But can "bad Wi-Fi" result from the lowest **MCS** rates and do other symptoms manifest? What is "bad Wi-Fi" really and just how resilient is Wi-Fi at lower MCS rates in **2.4GHz** or **5GHz**? 

I set out to answer some of these questions and would love to hear what *your gut* tells you about Wi-Fi and whether we here at [PanSift](https://pansift.com) can help back it up with data.

Using our new Wi-Fi assurance and remote troubleshooting tool ([live demo](https://app.pansift.com/demo)), I decided to look at over **20 million** sample data points across **20** random agents (using our maximum retention period of **30** days). Not all agents were online all of the time (*or actively transmitting*), yet [PanSift](https://pansift.com) agents perform network checks and measurements every **30** seconds. PanSift grabs so much data I began by focussing in on **MCS** and **latency**, and how they *may* or *may not* be correlated. Additionally, I looked at **2.4GHz** / **5GHz** and **IPv4** versus **IPv6** for some additional context. 

With queries to our <a target="_blank" href="https://www.influxdata.com/">Influx</a> backend (a <a target="_blank" href="https://en.wikipedia.org/wiki/Time_series_database">Time Series Database</a>), I chose data points only from agents that were "locally_connected" (the default gateway was responding), *"wlan_connected"* (WiFi connected!), *"dualstack"* (IPv6 and IPv4) and *"ipv4_only"* or *"ipv6_only"* while ensuring that the *en0* interface was being used as the active default gateway (via the route table). The data spanned macOS versions *10.11.x*, *10.14.x*, *10.15.x*, *11.6.x*, and *12.x* with physical models from *iMAC* to *Mini*s but mostly *Macbook Airs* and *MacBook Pros*.

By using <a target="_blank" href="https://www.influxdata.com/">Influx</a>'s <a target="_blank" href="https://docs.influxdata.com/flux/v0.x/stdlib/universe/covariance/">covariance</a> functon with the <a target="_blank" href="https://en.wikipedia.org/wiki/Pearson_correlation_coefficient">Pearson R</a> value, I could check the correlation between **MCS** and **latency** values (with additional filters in place to cherry pick different scenarios listed in the Tables (1-3) below). Positive scores between **0** and **1** mean a correlation for both values increasing together (a stronger correlation closer to **1**) and negative numbers below **0** to **-1** mean a that as one value increases the the other decreases.

I was hoping for a strong negative correlation (**-0.5** to **-1**) that would prove a higher MCS index helped to reduced latency... or put another way, that a lower MCS index would lead to increased latency but this doesn't seem to be the case below:

<div class="table1-start"></div>
  
  
| MCS Index | IPv4 Gateway | IPv6 Gateway | 2.4GHz Channel <= 14 | 5 GHz Channel > 14 | N ( measurement sample size) | Correlation : Pearson R | Summary  / Note       |
| :----:    |    :----:   |         :---: |      :---:           |   :---:            |   :---:                      |    :---:                                      | :---:          |
| 0-31      | ✓           |               |                      | ✓                  |  361485                      |  -0.014                          | No correlation |
| 0-31      | ✓           |               | ✓                    |                    |   48762                      |   0.000                        | No correlation |
| 0-31      |             |   ✓           | ✓                    |                    |   30836                      |  -0.014                          | Almost no correlation |
| 0-31      |             |   ✓           |                      | ✓                  |  143508                      |  -0.006                         | No correlation |  
<center><small>Table 1.0 - General MCS (0-31) and Latency Correlation</small></center>
 <br> 
  
<div class="table1-end"></div>

<div class="table2-start"></div>
  
  
| MCS Index | IPv4 Gateway | IPv6 Gateway | 2.4GHz Channel <= 14 | 5 GHz Channel > 14 | N ( measurement sample size) | Correlation : Pearson R | Summary        |
| :----:    |    :----:   |         :---: |      :---:           |   :---:            |   :---:                      |    :---:                                      | :---:          |
| **0-4**      | ✓           |               |                      | ✓                  |   40995                      |  -0.057                          | Almost no correlation |
| **0-4**      | ✓           |               | ✓                    |                    |    3932                      |  -0.015                          | Almost no correlation |
| **0-4**      |             |   ✓           | ✓                    |                    |    3772                      |  -0.015                           | Almost no correlation |
| **0-4**      |             |   ✓           |                      |  ✓                 |   24823                      |  -0.014                          | Almost no correlation |  
<center><small>Table 2.0 - Low MCS (0-4) and Latency Correlation</small></center>
 <br> 
  
<div class="table2-end"></div>

<div class="table3-start"></div>
  
  
| MCS Index | IPv4 Gateway | IPv6 Gateway | 2.4GHz Channel <= 14 | 5 GHz Channel > 14 | N ( measurement sample size) | Correlation : Pearson R | Summary        |
| :----:    |    :----:   |         :---: |      :---:           |   :---:            |   :---:                      |    :---:                                      | :---:          |
| 5-31      | ✓           |               |                      |  ✓                 |  320496                      |  0.007                          | No correlation |
| 5-31      | ✓           |               | ✓                    |                    |   44852                      |  0.004                          | No correlation |
| 5-31      |             |   ✓           | ✓                    |                    |   27069                      |  -0.001                         | No correlation |
| 5-31      |             |   ✓           |                      |  ✓                 |  118685                      |  -0.003                        | No correlation |  
<center><small>Table 3.0 - Medium to High MCS (5+) and Latency Correlation</small></center>
<br> 
  
  
<div class="table2-end"></div>

<script type="text/javascript">
(function() {
    $('div.table1-start').nextUntil('div.table1-end', 'table').addClass('table table-dark table-hover table-responsive');
    $('div.table2-start').nextUntil('div.table2-end', 'table').addClass('table table-dark table-hover table-responsive');
    $('div.table3-start').nextUntil('div.table3-end', 'table').addClass('table table-dark table-hover table-responsive');
})();
</script>

**Note:** The data is inconclusive and shows only a minor difference of positive and negative values which may give pause to wonder but more agents and data points are required!  **Low MCS does not seem to equate to higher latency...** so "bad Wi-Fi" must relate to airtime, SNR, noise, CCC / CCI (Co-Channel Contention / Interference) ? What should we delve in to next?
