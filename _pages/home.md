---
title: "Graph Lab - Home"
layout: homelay
excerpt: "Graph Lab at ANU."
sitemap: false
permalink: /
---

We are a reseach team at the [School of Computing](https://cs.anu.edu.au/), Australian National University. Our overarching research goal is to explore and understand graph-structured data. In today's real-world applications, graphs are ubiquitously used for representing complex objects and their relationships such as cities in a road network, atoms in a molecule, friendships in social networks, connections in computer networks, and links among web pages. We focus on the following research areas:

<ul>
    <li> Graph management and analysis</li>
    <li> Graph algorithms</li>
    <li> Graph machine learning</li>
    <li> Bridging between graph theory and machine learning</li>
</ul>



<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>      
    </ol>

    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu1.jpg" alt="Slide 1" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu2.jpg" alt="Slide 2" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu3.jpg" alt="Slide 3" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu4.jpg" alt="Slide 4" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu5.jpg" alt="Slide 5" />
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/slider7001400/anu6.jpg" alt="Slide 6" />
        </div>
    </div>
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

Current projects:

{% assign number_printed = 0 %}
{% for project in site.data.projects %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/propic/{{ project.image }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ project.title }}</h4>
  <i>{{ project.info }} <!--<br>email: <{{ member.email }}></i> -->
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}



