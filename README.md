# dnd

### How to run this?
`npm run dev` will start a webpack watchman process that will create a new public/bin/bundle.js each time a file in public/scripts changes.  `npm run build` will manually build a new public/bin/bundle.js each time its run.  After building a new bundle, `npm start` will get the server going at localhost:3000.  Personally I run `npm run dev` in a separate terminal process and `npm start` in my primary terminal process.

*The actual commands:*
```
npm run dev
npm start
```
