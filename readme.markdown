109Site
===

Website for my CMPT 109 course.

Setup
-----

Must have:

* Ruby + Gems
* Node.js
* Bower

To setup the environment:

    gem install nanoc adsf
    npm install
    bower install

Usage
---

The actual work files are in `contents`. Bower dependencies and static files are in `static`. To build a local copy to `dist` use:

    rake build

To deploy:

    rake deploy

Start a local server on port 3000:

    nanoc view

Can also use Grunt to validate HTML:

    grunt validation

Continuously validate and recompile as you work:

    grunt watch

That is all.
