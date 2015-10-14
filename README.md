### waleedsamy.github.io
> my resumé availabe at https://waleedsamy.github.io  

## how it work
  * use [grunt-markdown](https://github.com/treasonx/grunt-markdown) to convert markdown in [index.md](https://github.com/waleedsamy/waleedsamy.github.io/blob/master/index.md) to equivalent HTML in [index.html] (https://github.com/waleedsamy/waleedsamy.github.io/blob/master/index.html) using [template.jst](https://github.com/waleedsamy/waleedsamy.github.io/blob/master/template.jst) as grunt-markdown template.
  * use [pre-commit](https://github.com/observing/pre-commit) to run hook for grunt-markdown and js-beautify _find it in package.json_

## if you like to use
```bash
npm install
# edit index.md with your content
# edit Gruntfile.js markdown template context param github with your github
# edit template.jst if you need to customize it
git commit -am "check your index.html now" && git push origin master
```
