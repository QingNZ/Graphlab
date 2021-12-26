---
title: "Graph Research Lab @ ANU - Activities"
layout: gridlay
excerpt: "Graph Research Lab @ ANU"
sitemap: true
permalink: /activities/
---




### <a name="Weekly-Study-Sessions"></a>Weekly Study Sessions
(Jump to [Conference Presentations](#Conference-Presentations) or [Group Activities](#Group-Activities))



<p> </p>

<p>
  **Date/Time:** 2-3pm Thursdays of every month, except for the 1st Thursday
</p>

<p>**Venue:** Board room 4.15, Hanna Neumann Building, ANU campus.</p>


{% for presenter in site.data.group_study_presenters limit:3%}

**--{{ presenter.date }}** <br>
<em>Presenter:</em> {{ presenter.name }}  
<em>Paper:</em> {{ presenter.title }} - {{ presenter.link }} <br>
 
{% endfor %}

<p> </p>

<h4><a href="{{ site.url }}{{ site.baseurl }}/allsessions.html">... see all sessions</a></h4>

<br>

___

### <a name="Conference-Presentations"></a>Conference Presentations

<p>**SIGMOD 2021**</p> 
<p>Query-by-Sketch: Scaling Shortest Path Graph Queries on Very Large Networks [(Slides)](https://graphlabanu.github.io/website/downloads/SIGMOD2021_slides.pdf):</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zc5n2SsCtbQ" frameborder="0" allowfullscreen></iframe>

<br>

<p>**EDBT 2021**</p> 
<p>Efficient Maintenance of Distance Labelling for Incremental Updates in Large Dynamic Graphs [(Slides)](https://graphlabanu.github.io/website/downloads/EDBT2021_slides.pdf)</p>

<iframe width="800" height="450" src="https://graphlabanu.github.io/website/downloads/EDBT2021_Poster.pdf" frameborder="0"></iframe>

<br>

<p>**PAKDD 2021**</p> 
<p>dK-Projection: Publishing Graph Joint degree distribution with Node Differential Privacy [(Slides)](https://graphlabanu.github.io/website/downloads/PAKDD2021_slides.pdf)</p>

<p>**ICDM 2020**</p> 
<p>ErGAN: Generative Adversarial Networks for Entity Resolution [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2020_slides.pdf)</p>

<p>**PAKDD 2020**</p> 
<p>dK-Microaggregation: Anonymizing Graphs with Differential Privacy Guarantees [(Slides)](https://graphlabanu.github.io/website/downloads/PAKDD2020_slides.pdf)</p>

<p>**SIGIR 2019**</p> 
<p>Knowledge Tracing with Sequential Key-Value Memory Networks [(Slides)](https://graphlabanu.github.io/website/downloads/SIGIR2019_slides.pdf)</p>

<p>**NeurIPS 2019**</p> 
<p>Geometric Deep Learning Techniques on Graphs [(Slides)](https://graphlabanu.github.io/website/downloads/NeurIPS2019_slides.pdf)</p>

<iframe width="800" height="450" src="https://graphlabanu.github.io/website/downloads/NeurIPS2019_poster.pdf" frameborder="0"></iframe>

<br>

<p>**ICDM 2019**</p> 
<p>Learning To Sample: an Active Learning Framework [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2019_slides.pdf)</p>


<p>**EDBT 2019**</p> 
<p>A Highly Scalable Labelling Approach for Exact Distance Queries in Complex Networks [(Slides)](https://graphlabanu.github.io/website/downloads/EDBT2019_slides.pdf)</p>

<p> &nbsp; </p>

___

###  <a name="Group-Activities"></a>Group Activities

{% assign number_printed = 0 %}
{% for pic in site.data.pictures %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-5 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/{{ pic.image }}" class="img-responsive" width="100%" style="float: left" />
<p>{{ pic.title }}</p> 
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>
