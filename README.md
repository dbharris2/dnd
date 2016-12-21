# dnd

### How to run this?
`yarn install` will install all dependencies.  `yarn run dev` will start a webpack watchman process that will create a new public/bin/bundle.js each time a file in public/scripts changes.  `yarn run build` will manually build a new public/bin/bundle.js each time its run.  Then `yarn start` will get the server going at localhost:3000.

*The actual commands:*
```
yarn run dev
yarn start
```
### What else?
This project uses [Facebook's Flow](https://flowtype.org) package.  To check flow, simply use `yarn run flow`.
