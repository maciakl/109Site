109Site
===

Website for my CMPT 109 course.

Setup
-----

Must have:

    * Ruby + Gems
    * Node.js

To setup the environment:

    gem install nanoc adsf
    npm install -g grunt-cli

Usage
---

To build a local copy to `dist` use:

    rake build

To deploy:

    rake deploy

Start a local server on port 3000:

    nanoc view

Can also use Grunt to validate HTML:

    npm install
    grunt

Continuously validate as you work:

    grunt watch

That is all.
