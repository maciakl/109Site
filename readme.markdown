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

    gem install nanoc
    npm install
    bower install

Usage
---

The actual work files are in `contents`. Bower dependencies and static files are in `components`. You will need to use grunt to copy these into the `contents` directory for `nanoc` compiling. To build a local copy to `dist` use:

    grunt build

This will actually call the `nanoc` command and compile on its own. Note, do not run `nanoc` on its own. Grunt pre-processes the bootstrap dependencies and injects them into the `content` directory before you compile.

To deploy:

    rake deploy

Start a local server on port 3000:

    grunt server

This will watch the local directories for changes, re-compile and re-validate as you work.

Can also use Grunt to validate HTML without re-compiling the project:

    grunt validation

Continuously validate and recompile as you work without running the server:

    grunt watch

That is all.
