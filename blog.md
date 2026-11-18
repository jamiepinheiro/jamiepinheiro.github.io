---
layout: page
title: Blog
permalink: /blog/
description: "Writing by Jamie Pinheiro about technology, truth machines, and cyclic TV references."
---

<ul>
  {% for post in site.posts %}
  <li><time class="post-meta" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time> · <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {% endfor %}
</ul>

[RSS feed](/feed.xml)
