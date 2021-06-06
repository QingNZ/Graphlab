---
title: "Study Sessions"
layout: textlay
excerpt: "Graph Lab"
sitemap: false
permalink: /allsessions.html
---


### Weekly Study Sessions

{% for presenter in site.data.group_study_presenters %}

**--{{ presenter.date }}** <br>
{{ presenter.name }}  
<em>{{ presenter.title }}</em>
{{ presenter.link }} <br>
 
{% endfor %}
