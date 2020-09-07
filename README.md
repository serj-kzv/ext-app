# What is this?
It's a Web Extension **Angular** Boilerplate for **Mozilla Firefox**.
You can build all part an extension with **Angular** using the boilerplate except `content script`
wich is built with typescript mostly by using Angular anyway.

# Instantiation
```sh
# run inside  ./ext-app
npm i
```

# Build
```sh
# run inside  ./ext-app
npm run build-all
```

# Build separately

```sh
npm run buildBa # background action
npm run buildBg # background script
npm run buildCo # content script
npm run buildOp # option page
npm run buildPa # page action
npm run buildSb # sidebar action

npm run copy-shared-assets # to update manifest.json file
```
