---
layout: page
permalink: /topics/
title: Topics
---


<div id="archives">
{% for topic in site.topics %}
  <div class="archive-group">
    {% capture topic_name %}{{ topic | first }}{% endcapture %}
    <div id="#{{ topic_name | slugize }}"></div>
    <p></p>
    
    <h3 class="topic-head">{{ topic_name }}</h3>
    <a name="{{ topic_name | slugize }}"></a>
    {% for post in site.topics[topic_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>