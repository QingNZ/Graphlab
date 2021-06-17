---
title: "Graph Research Lab @ ANU - Activities"
layout: gridlay
excerpt: "Graph Research Lab @ ANU"
sitemap: true
permalink: /activities/
---

### Weekly Study Sessions

<p> </p>

<p>
  **Date/Time:** 2-3pm Thursdays of every month, except for the 1st Thursday
</p>

<p>**Venue:** Board room 4.15, Hanna Neumann Building, ANU campus.</p>

<p>**Presenters:**</p>

{% for presenter in site.data.group_study_presenters limit:3%}

**--{{ presenter.date }}** <br>
{{ presenter.name }}  
<em>Paper info:</em> {{ presenter.title }} <br>
<em>Paper link:</em> {{ presenter.link }} <br>
 
{% endfor %}

<p> </p>

<h4><a href="{{ site.url }}{{ site.baseurl }}/allsessions.html">... see all sessions</a></h4>

<br>






### Conference Presentations

<p>**SIGMOD 2021**</p> 
<p>Query-by-Sketch: Scaling Shortest Path Graph Queries on Very Large Networks [(Slides)](https://graphlabanu.github.io/website/downloads/SIGMOD2021_slides.pdf):</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zc5n2SsCtbQ" frameborder="0" allowfullscreen></iframe>

<br>



<p>**EDBT 2021**</p> 
<p>Efficient Maintenance of Distance Labelling for Incremental Updates in Large Dynamic Graphs [(Slides)](https://graphlabanu.github.io/website/downloads/EDBT2021_slides.pdf)</p>


<p>**ICDM 2020**</p> 
<p>ErGAN: Generative Adversarial Networks for Entity Resolution [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2020_slides.pdf)</p>

<p>**SIGIR 2019**</p> 
<p>Knowledge Tracing with Sequential Key-Value Memory Networks [(Slides)](https://graphlabanu.github.io/website/downloads/SIGIR2019_slides.pdf)</p>

<p>**ICDM 2019**</p> 
<p>Learning To Sample: an Active Learning Framework [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2019_slides.pdf)</p>


<p>**EDBT 2019**</p> 
<p>A Highly Scalable Labelling Approach for Exact Distance Queries in Complex Networks [(Slides)](https://graphlabanu.github.io/website/downloads/EDBT2019_slides.pdf)</p>


