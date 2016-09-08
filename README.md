# dnd

### How to run this?
`npm run dev` will start a webpack watchman process that will create a new public/bin/bundle.js each time a file in public/scripts changes.  `npm run build` will manually build a new public/bin/bundle.js each time its run.  Then `npm start` will get the server going at localhost:3000.

*The actual commands:*
```
npm run dev
npm start
```
### What else?
This project uses [Facebook's Flow](https://flowtype.org) package.  To check flow, simply use `npm run flow`.
