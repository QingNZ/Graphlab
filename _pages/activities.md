---
title: "Graph Lab -- Activities."
layout: gridlay
excerpt: "Graph Lab -- Activities."
sitemap: false
permalink: /activities/
---

### Weekly Group Study Sessions

<p> </p>

<p>
  **Date/Time:** 2-3pm Thursdays of every month, except for the 1st Thursday
</p>

<p>**Venue:** Board room 4.15, Hanna Neumann Building, ANU campus.</p>

<p>**Presenters:**</p>

{% for presenter in site.data.group_study_presenters limit:5%}

**--{{ presenter.date }}** <br>
{{ presenter.name }}  
<em>{{ presenter.title }}</em>
{{ presenter.link }} <br>
 
{% endfor %}

<h4><a href="{{ site.url }}{{ site.baseurl }}/allpresenters.html">... see all sessions</a></h4>

<br>






### Conference Presentations

<p> </p>

<p>To be added later</p>

