# What is this?
It's a Web Extension **Angular** Boilerplate for **Mozilla Firefox**.
You can build all part an extension with **Angular** using the boilerplate except `content script`
that is built with typescript mostly by using Angular anyway.

# Instantiation
```sh
npm i
```

# Build
After the command below you can find an compiled extension in `./ext-app/dist` directory.
```sh
npm run build-all
```

# Build separately

```sh
npm run buildBa && npm run copy-shared-assets
npm run buildBg && npm run copy-shared-assets
npm run buildCo && npm run copy-shared-assets
npm run buildOp && npm run copy-shared-assets
npm run buildPa && npm run copy-shared-assets
npm run buildSb && npm run copy-shared-assets

npm run copy-shared-assets
```
