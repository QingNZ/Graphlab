---
title: "Graph Research Lab @ ANU - Code&Datasets"
layout: textlay
excerpt: "Graph Research Lab @ ANU"
sitemap: true
permalink: /code_datasets/
---

### Source Code ### 
_(Listed in alphabetical order of the model/algorithm/method names)_



<div class="col-sm-19 clearfix">
 <div class="well">
 
  {% for code in site.data.codelist %}
 
  
  <div class="row">
       <img src="{{ site.url }}{{ site.baseurl }}/images/letters/{{ code.image }}" class="img-responsive" width="40" style="float: left"><strong>{{ code.name }}:</strong><a href="{{ code.codelink }}"> {{ code.codelink }}</a><a href="{{ code.paperlink }}"> (<span style="background-color: #e6f2ff">paper</span>) </a>

   <br>
  </div>
  
  {% endfor %}
 
 </div>
</div>




### Datasets

<ul>
<li>Ted Spence's home page (with datasets for graph isomorphism tests): <a href="http://www.maths.gla.ac.uk/~es/">http://www.maths.gla.ac.uk/~es/</a></li>
</ul>  

<br>
