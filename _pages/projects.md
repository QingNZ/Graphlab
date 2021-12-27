---
title: "Graph Research Lab @ ANU - Projects"
layout: textlay
excerpt: "Graph Research Lab @ ANU"
sitemap: true
permalink: /projects/
---

### Current Projects

Below are some projects that we currently work on:

<div class="row">
 <div class="col-sm-19 clearfix">
  <div class="well">
   <pubtit> Deep Learning for Graph Isomorphism </pubtit>
   
   <img src="{{ site.url }}{{ site.baseurl }}/images/propic/project-GI.jpg" class="img-responsive" width="40%" style="float:left; Padding-top: -20px;Padding-right: 15px;" /> Graph isomorphism is a fundamental concept for exploiting the structure of graphs. This project aims to develop new heuristic techniques and theories for graph isomorphism, advancing state-of-the-art methodologies for its applications in solving real-world problems. Inspired by recent advances in machine learning, this project will investigate graph isomorphism problems from a deep learning perspective by marrying the best approaches from classic graph isomorphism studies with new techniques from modern AI. This is an important step towards bridging the gap between combinatorical generalization and deep learning.
  

  </div>
 </div>
</div>

<div class="row">
 <div class="col-sm-19 clearfix">
  <div class="well">
   <pubtit> Geometric Graph Learning </pubtit>
   
   <img src="{{ site.url }}{{ site.baseurl }}/images/propic/project-GNN.jpg" class="img-responsive" width="40%" style="float:left; Padding-top: -10px;Padding-right: 15px;" /> Geometric graph learning is an emerging field of machine learning, which aims to apply deep learning techniques to learn from complex data like graphs. In recent years, Graph Neural Networks (GNNs) as a powerful deep learning approach have been widely applied in various fields. However, graphs are in irregular non-Euclidean domains. This brings up the challenge of how to design deep learning techniques in order to effectively extract useful features from arbitrary graphs. In this project, we aim to explore the mathematical foundations of graph learning techniques and develop neural networks for graphs in a principled way.
  

  </div>
 </div>
</div>

<div class="row">
 <div class="col-sm-19 clearfix">
  <div class="well">
   <pubtit> Shortest-Path Algorithms </pubtit>
   
   <img src="{{ site.url }}{{ site.baseurl }}/images/propic/project-shortest-path.jpg" class="img-responsive" width="40%" style="float:left; Padding-top: -20px;Padding-right: 15px;" /> Finding the shortest-path information (e.g., distance, paths, counting of paths) between a pair of vertices is a fundamental task in graph theory. Despite efforts for many years, there is still a high demand for scalable solutions over large and ever-growing networks. Questions of interest include: (1). How to develop robust, efficient and scalable solutions for shortest-path related problems on large networks with possibly billions of vertices? (2). How to handle dynamics of networks, i.e., topological structure changes caused by node and edge insertions and deletions? (3). What kinds of the theoretical properties can we gurantee in our soltions?

 
   <details>
   <summary>Publications:
   </summary>
    
   <a href="https://arxiv.org/abs/1812.02363">A Highly Scalable Labelling Approach for Exact Distance Queries in Complex Networks</a>, M. Farhan, Q. Wang, Y. Lin, and B. Mckay, The 22nd International Conference on Extending Database Technology (EDBT), 2019.
       
   </details>
   
  
  
  </div>  
 </div>
</div>

<div class="row">
 <div class="col-sm-19 clearfix">
  <div class="well">
   <pubtit> Deep Learning for Knowledge Tracing </pubtit>
   
   <img src="{{ site.url }}{{ site.baseurl }}/images/propic/project-knowledge-tracing2.jpg" class="img-responsive" width="40%" style="float:left; Padding-top: -20px;Padding-right: 15px;" /> Knowledge tracing is an important task in a wide range of applications in education, such as massive open online courses (MOOCs), intelligent tutoring systems, educational games, and learning management systems. It models dynamics in a student's knowledge states in relation to different learning concepts through their interactions with learning activities. The goal of the project is to develop machine learning technqiues for capturing knowledge states dynamically and discovering their dependencies on latent learning concepts through the analysis of students' learning behaviors.
  
  </div>
 </div>
</div>

{% comment %}  
**Deep Learning for Graph Isomorphism.** Graph isomorphism is a fundamental concept for exploiting the structure of graphs. This project aims to develop new heuristic techniques and theories for graph isomorphism, advancing state-of-the-art methodologies for its applications in solving real-world problems. Inspired by recent advances in machine learning, this project will investigate graph isomorphism problems from a deep learning perspective by marrying the best approaches from classic graph isomorphism studies with new techniques from modern AI. This is an important step towards bridging the gap between combinatorical generalization and deep learning.

Below is an example of an isomorphism between two graphs, which is the mapping: 1 &#x2192; A, 2 &#x2192; B, 3 &#x2192; F, 4 &#x2192; E, 5 &#x2192; G, 6 &#x2192; C, 7 &#x2192; I, 8 &#x2192; D, 9 &#x2192; H (practical problems can have millions of vertices):

![]({{ site.url }}{{ site.baseurl }}/images/propic/project-pic-gi2.png){: style="width: 600px;max-width: 100%; float: center; margin: 10px  10px"}

 <p> &nbsp; </p>  
**Geometric Graph Learning.** Geometric deep learning is an emerging field of machine learning, which aims to apply deep learning techniques to learn from complex data like graphs and multi-dimensional points. In recent years, due to the rising trends in network analysis and prediction, Graph Neural Networks (GNNs) as a powerful deep learning approach have been widely applied in various fields, e.g., object recognition, image classification, and semantic segmentation. However, graphs are in irregular non-Euclidean domains. This brings up the challenge of how to design deep learning techniques in order to effectively extract useful features from arbitrary graphs. In this project, we aim to explore the mathematical foundations of GNNs and develop a general framework for deriving neural network architectures on graphs in a principled way.  

Below is the t-SNE visualization of the 2-D node embedding space for the Pubmed dataset by applying our <a href="https://github.com/wokas36/DFNets">Distributed Feedback-Looped Networks (DFNets)</a>:

![]({{ site.url }}{{ site.baseurl }}/images/propic/project-pic-ggl1.png){: style="width: 700px;max-width: 100%; float: center; margin: 10px  10px"}


**Shortest-Path Algorithms**. Finding the shortest-path information (e.g., distance, paths, counting of paths) between a pair of vertices is a fundamental task in graph theory, and has a broad range of applications. For example, in web graphs, ranking of web pages based on their distances to recently visited web pages helps in finding the more relevant pages and is referred to as context-aware search. However, despite extensive efforts for many years, there is still a high demand for scalable solutions over large and ever-growing networks. Questions of interest include: (i), How to develop robust, efficient and scalable solutions for shortest-path related problems on large networks with possibly billions of vertices? (ii) How to handle dynamics of networks, i.e., topological structure changes caused by node and edge insertions and deletions? (iii), What kinds of the theoretical properties can we gurantee in our soltions?


The figure below shows that our <a href="https://github.com/mufarhan/highway_labelling"> Highway Labelling (HL)</a> technique can construct distance labelling linearly in terms of the number of landmarks while answering distance queries on large networks efficiently (on the scale of billions).

![]({{ site.url }}{{ site.baseurl }}/images/propic/project-pic-spa1.png){: style="width: 800px;max-width: 100%; float: center; margin: 10px  10px"}

  {::options parse_block_html="false" /}
 {% endcomment %} 

#### ... and more.
