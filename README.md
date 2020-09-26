# What is this?
It's a [Angular](https://angular.io/) Web Extension **boilerplate** for [Mozilla Firefox](https://www.mozilla.org/ru/firefox/).
You can build all parts of an extension with **Angular** by using the boilerplate.

**Note.** [Content script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) has no a `html` page so it is a simple TypeScript code.

# Build
After the command below you can find an compiled extension in `./ext-app/dist` directory.
```sh
npm run build-all
```

# Build separately

Build **separately** with
```sh
npm run buildBa && npm run copy-manifest
npm run buildBg && npm run copy-manifest
npm run buildCo && npm run copy-manifest
npm run buildOp && npm run copy-manifest
npm run buildPa && npm run copy-manifest
npm run buildSb && npm run copy-manifest
```
or update `manifest.json` file only with
```sh
npm run copy-manifest
```
To run and **auto update** compiled code use `W` ending letter in commands.
```sh
npm run buildBaW
npm run buildBgW
npm run buildCoW
npm run buildOpW
npm run buildPaW
npm run buildSbW
```
To build for a **production** use `P` ending letter in commands.
```sh
npm run buildBaP
npm run buildBgP
npm run buildCoP
npm run buildOpP
npm run buildPaP
npm run buildSbP
```

# Abbreviations

* **buildBa** and `ba-app` means [browser action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_actions)
* **buildBg** and `bg-app` means [background script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)
* **buildCo** and `co-app` means [content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
* **buildOp** and `op-app` means [options page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
* **buildPa** and `pa-app` means [page action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
* **buildSb** and `sb-app` means [sidebar page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)

