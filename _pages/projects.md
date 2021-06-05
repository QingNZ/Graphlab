---
title: "Graph Lab - Projects"
layout: textlay
excerpt: "Graph Lab -- Projects"
sitemap: false
permalink: /projects/
---

### Current projects

Below are some projects that we currently work on:

{% for project in site.data.projects %}


<div class="row">


<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/propic/{{ project.image }}" class="img-responsive" width="100%" style="float: left" />
     <br>{{ project.title }}
</div>
test test 
      
    
   

{% endfor %}

### ... and more.
