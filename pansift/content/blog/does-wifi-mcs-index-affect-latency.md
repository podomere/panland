---
layout: post
date: "2022-01-19T20:31:00"
subtitle: An evidence based approach to the secrets of good and bad Wi-Fi.
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

My gut said latency depends on a more than just **MCS*. Although the dynamic encoding scheme steps down to bolster resilience I envisaged it constraining throughput and aggrevating congestion. But can "bad Wi-Fi" result from the lowest **MCS** rates and do other symptoms manifest? What is "bad Wi-Fi" really? Just how resilient is Wi-Fi at lower MCS rates in **2.4GHz** and **5GHz**? I set out to answer some of these questions and would love to hear what *your gut* is asking you about Wi-Fi and whether we here at [PanSift](https://pansift.com) can back it up with data.

Using our new Wi-Fi assurance and remote troubleshooting tool, I decided to look at over **20 million** sample data points across **20** random agents using our maximum retention period of **30** days. Not all agents were online all of the time (or actively transmitting), yet the [PanSift](https://pansift.com) agent performs network checks and measurements every **30** seconds while a host is awake. I only looked at data if the agent could reach the default gateway and was using the WiFi interface (en0) to get there. PanSift grabs so much data I began by focussing on how MCS and latency *may* or *may not* be correlated. I also sliced the data for **2.4GHz** / **5GHz** and **IPv4** / **IPv6** just for some boundaries. 

With queries to our <a target="_blank" href="https://www.influxdata.com/">Influx</a> backend (a <a target="_blank" href="https://en.wikipedia.org/wiki/Time_series_database">TSDB (Time Series Database)</a>), I chose data points from agents that were "locally_connected" (the default gateway was responding), *"wlan_connected"* (WiFi connected!), *"dualstack"* (IPv6 and IPv4) and *"ipv4_only"* or *"ipv6_only"* while ensuring that the *en0* interface was being used as the active default gateway (via the route table). The data spanned macOS versions *10.11.x*, *10.14.x*, *10.15.x*, *11.6.x*, and *12.x* with physical models from *iMAC* to *Mini*s but mostly *Macbook Airs* and *MacBook Pros*.

I used <a target="_blank" href="https://www.influxdata.com/">Influx</a> <a target="_blank" href="https://docs.influxdata.com/flux/v0.x/stdlib/universe/covariance/">covariance</a> functon with the <a target="_blank" href="https://en.wikipedia.org/wiki/Pearson_correlation_coefficient">Pearson R</a> value to check the correlation between MCS and latency variables (with filters in place to cherry pick different scenarios listed in the table). Positive scores between **0** and **1** mean a correlation for both values increasing together (a stronger correlation closer to **1**) and negative numbers below **0** to **-1** mean a that as one value increases the the other decreases.

I was hoping for a strong negative correlation (**-0.5** to **-1**) that would prove a higher MCS index helped to reduced latency... or put another way, that a lower MCS index would lead to increased latency but this doesn't seem to be the case below:

<center><small>Table 1.0</small></center>
<div class="tables-start"></div>

| MCS Index | IPv4 Gateway | IPv6 Gateway | 2.4GHz Channel <= 14 | 5 GHz Channel > 14 | N ( measurement sample size) | Gateway Latency / MCS Correlation : Pearson R | Summary        |
| :----:    |    :----:   |         :---: |      :---:           |   :---:            |   :---:                      |    :---:                                      | :---:          |
| 0-31      | ✓           |               |                      | ✓                  |  361485                      |  -0.014                          | No correlation |
| 0-31      | ✓           |               | ✓                    |                    |   48762                      |   0.000                        | No correlation |
| 0-31      |             |   ✓           | ✓                    |                    |   30836                      |  -0.014                          | Almost no correlation |
| 0-31      |             |   ✓           |                      | ✓                  |  143508                      |  -0.006                         | No correlation |
| **0-4**      | ✓           |               |                      | ✓                  |   40995                      |  -0.057                          | Almost no correlation |
| **0-4**      | ✓           |               | ✓                    |                    |    3932                      |  -0.015                          | Almost no correlation |
| **0-4**      |             |   ✓           | ✓                    |                    |    3772                      |  -0.015                           | Almost no correlation |
| **0-4**      |             |   ✓           |                      |  ✓                 |   24823                      |  -0.014                          | Almost no correlation |
| 5-31      | ✓           |               |                      |  ✓                 |  320496                      |  0.007                          | No correlation |
| 5-31      | ✓           |               | ✓                    |                    |   44852                      |  0.004                          | No correlation |
| 5-31      |             |   ✓           | ✓                    |                    |   27069                      |  -0.001                         | No correlation |
| 5-31      |             |   ✓           |                      |  ✓                 |  118685                      |  -0.003                        | No correlation |

<div class="tables-end"></div>
<script type="text/javascript">
(function() {
    $('div.tables-start').nextUntil('div.tables-end', 'table').addClass('table table-striped');
})();
</script>

**Note:** The data is inconclusive and shows only a minor difference of positive and negative values which gives pause to give wonder. 

**Low MCS does not seem to equate to higher latency...** so "bad Wi-Fi" must relate to airtime, SNR, noise, CCC / CCI (Co-Channel Contention / Interference) ?
