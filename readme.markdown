109Site
===

Website for my CMPT 109 course.

url: http://cs.montclair.edu/~maciakl

Prerequisites
-----

Must have:

* Ruby 
* Gems
* Jekyll
* Make

Usage
---

Bower dependencies and static files such as jQyery and Bootstrap are in `components`. This directory will be included in the output folder when you compile.

To compile site:

    jekyll build

To deploy:

    make deploy

Start a local server on port 4000:

    jekyll serve

That is all.
