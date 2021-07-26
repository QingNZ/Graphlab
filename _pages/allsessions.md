---
title: "Study Sessions"
layout: textlay
excerpt: "Graph Research Lab @ ANU"
sitemap: false
permalink: /allsessions.html
---


### Weekly Study Sessions

Below is a list of all weekly study sessions in our lab:

{% for presenter in site.data.group_study_presenters %}

**--{{ presenter.date }}** <br>
{{ presenter.name }}  
<em>{{ presenter.title }}</em>
{{ presenter.link }} <br>
 
{% endfor %}
