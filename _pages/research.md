---
title: "Graph Lab - Research"
layout: textlay
excerpt: "Graph Lab -- Research"
sitemap: false
permalink: /research/
---




Our goal is to develop techniques that enable us to address the questions we find most interesting.

Here are some themes and techniques that we currently work on:

### Current projects

{% assign number_printed = 0 %}
{% for project in site.data.projects %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/propic/{{ project.image }}" class="img-responsive" width="100%" style="float: left" />
     <br>{{ project.title }}
</div>
       <div class='col-md-7 research-content-text'>
        <strong>The role and influence of socialbots on Twitter</strong>
        </br>
        Papers: <a href='https://arxiv.org/pdf/1802.09808.pdf' target='_blank'>ICWSM&rsquo;18</a>
      </div>  
      
 <div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ project.title }}</pubtit>
  <p class="text-danger"><strong> {{ project.title }}</strong></p>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ project.info }}</p>
 </div>
</div>     
      

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

### ... and more.
