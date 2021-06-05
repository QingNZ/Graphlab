---
title: "Graph Lab - Projects"
layout: textlay
excerpt: "Graph Lab -- Projects"
sitemap: false
permalink: /projects/
---




Our goal is to develop techniques that enable us to address the questions we find most interesting. Below are some projects that we currently work on:

### Current projects

{% assign number_printed = 0 %}
{% for project in site.data.projects %}

{% assign even_odd = number_printed | modulo: 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/propic/{{ project.image }}" class="img-responsive" width="100%" style="float: left" />
     <br>{{ project.title }}
</div>
test test 
      
    
      

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

### ... and more.
