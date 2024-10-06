---
title: Teaching
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: markdown
    id: this should be markdown
    content:
      title: This should be markdown
      filters:
        folders:
          - teaching2
    design:
      view: article-grid
      columns: 3
  - block: collection
    id: teaching2
    content:
      title: Teaching 2
      filters:
        folders:
          - teaching2
    design:
      view: article-grid
      columns: 1
---
