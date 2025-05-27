---
layout: page
title: TexFantasy
permalink: /texfantasy/
description: Gallery of LaTeX figures and tables.
nav: true
nav_order: 3
display_categories: [plots,lua,illustrations,tables]
horizontal: false
---
TeXFantasy is a gallery of Latex figures that I used for various documents, 
from teaching materials to scientific journal articles. Follow the project on
[Github](https://github.com/bvieuble/TeXFantasy)!

<!-- pages/projects.md -->
<div class="projects">
{% if page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_texfantasy = site.texfantasy | where: "category", category %}
  {% assign sorted_texfantasy = categorized_texfantasy | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_texfantasy %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_texfantasy %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_texfantasy = site.texfantasy | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_texfantasy %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_texfantasy %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
