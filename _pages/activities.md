---
title: "Graph Research Lab @ ANU - Activities"
layout: gridlay
excerpt: "Graph Research Lab @ ANU"
sitemap: true
permalink: /activities/
---

(Click here to jump down to [Conference Presentations](#Conference-Presentations); [Group Activities](#Group-Activities))

_____

### <a name="Weekly-Study-Sessions"></a>Weekly Presentation Sessions


<p> </p>

<p>
  **Date/Time:** 2-3pm Thursdays
</p>

<p>**Venue:** Board room 4.15, Hanna Neumann Building, ANU campus.</p>

{% comment %}  
{% for presenter in site.data.group_study_presenters limit:3%}

**--{{ presenter.date }}** <br>
<em>Presenter:</em> {{ presenter.name }}  
<em>Paper:</em> {{ presenter.title }} - {{ presenter.link }} <br>
 
{% endfor %}

<p> </p>

<h4><a href="{{ site.url }}{{ site.baseurl }}/allsessions.html">... see all sessions</a></h4>

<br>

{% endcomment %}  
_____

### <a name="Conference-Presentations"></a>Conference Presentations

<p>**SIGMOD 2024**</p> 

<p>Hierarchical Cut Labelling - Scaling Up Distance Queries on Road Networks <a href="https://graphlabanu.github.io/website/downloads/SIGMOD2024_poster.pdf"> (Poster) <a><a href="https://graphlabanu.github.io/website/downloads/SIGMOD2024_slides.pdf"> (Slides) <a></p>


<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads/SIGMOD2024_slides.pdf" frameborder="0"></iframe>

<br>

<p>**ICML 2023**</p> 
<p>Local Vertex Colouring Graph Neural Networks  <a href="https://graphlabanu.github.io/website/downloads/ICML2023_poster.pdf"> (Poster) <a><a href="https://graphlabanu.github.io/website/downloads/ICML2023_slides.pdf"> (Slides) <a></p>

<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads/ICML2023_slides.pdf" frameborder="0"></iframe>

<br>



<p>**ICLR 2023**</p> 

<p>N-WL: A New Hierarchy of Expressivity for Graph Neural Networks <a href="https://graphlabanu.github.io/website/downloads/ICLR2023-poster.pdf"> (Poster) <a><a href="https://graphlabanu.github.io/website/downloads/ICLR2023-slides.pdf"> (Slides) <a></p>

<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads/ICLR2023-slides.pdf" frameborder="0"></iframe>

<br>


<p>**AAAI 2023 (Oral) **</p> 
<p>Restructuring Graphs for Higher Homophily via Adaptive Spectral Clustering <a href="https://graphlabanu.github.io/website/downloads/AAAI2023-slides.pdf"> (Slides) <a></p>

<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads/AAAI2023-slides.pdf" frameborder="0"></iframe>


<br>

<p>**SIGMOD 2022**</p> 
<p>BatchHL: Answering Distance Queries on Batch-Dynamic Networks at Scale [(Slides)](https://graphlabanu.github.io/website/downloads/SIGMOD2022_slides.pdf):</p>

<iframe width="800" height="340" src="https://users.cecs.anu.edu.au/~u5170295/files/SIGMOD2022_video.mp4" frameborder="0" allowfullscreen></iframe>

<br>

<p>**ICLR 2022 (Oral) **</p> 
<p>A New Perspective on “How Graph Neural Networks Go Beyond Weisfeiler-Lehman? <a href="https://recorder-v3.slideslive.com/?share=62408&s=0e876146-647b-4b2d-b32e-a8d3d5f2c178"> (Oral Video) <a><a href="https://recorder-v3.slideslive.com/?share=62283&s=fc8ee420-9d23-479a-9c8f-6f800b09f07d"> (Poster) <a></p>


<iframe width="800" height="340" src="https://recorder-v3.slideslive.com/?share=62408&s=0e876146-647b-4b2d-b32e-a8d3d5f2c178" frameborder="0"></iframe>

<br>

<p>**SIGMOD 2021**</p> 
<p>Query-by-Sketch: Scaling Shortest Path Graph Queries on Very Large Networks [(Slides)](https://graphlabanu.github.io/website/downloads/SIGMOD2021_slides.pdf):</p>
<iframe width="800" height="340" src="https://www.youtube.com/embed/zc5n2SsCtbQ" frameborder="0" allowfullscreen></iframe>

<br>




<p>**ICDM 2020**</p> 
<p>ErGAN: Generative Adversarial Networks for Entity Resolution [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2020_slides.pdf)</p>


<p>**SIGIR 2019**</p> 
<p>Knowledge Tracing with Sequential Key-Value Memory Networks <a href="https://graphlabanu.github.io/website/downloads/SIGIR2019_slides.pdf"> (Slides) <a></p>

<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads//SIGIR2019_slides.pdf" frameborder="0"></iframe>

<br>

<p>**NeurIPS 2019**</p> 
<p>Geometric Deep Learning Techniques on Graphs [(Slides)](https://graphlabanu.github.io/website/downloads/NeurIPS2019-slides.pdf)</p>

<iframe width="800" height="340" src="https://graphlabanu.github.io/website/downloads/NeurIPS2019_poster.pdf" frameborder="0"></iframe>

<br>

<p>**ICDM 2019**</p> 
<p>Learning To Sample: an Active Learning Framework [(Slides)](https://graphlabanu.github.io/website/downloads/ICDM2019_slides.pdf)</p>


<p>**EDBT 2019**</p> 


<p>A Highly Scalable Labelling Approach for Exact Distance Queries in Complex Networks [(Slides)](https://graphlabanu.github.io/website/downloads/EDBT2019_slides.pdf)</p>

<p> &nbsp; </p>

____

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
