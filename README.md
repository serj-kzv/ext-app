# What is this?
It's a [Angular](https://angular.io/) Web Extension **boilerplate** for [Mozilla Firefox](https://www.mozilla.org/ru/firefox/).
You can build all parts of an extension with **Angular** by using the boilerplate.

**Note.** [Content script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) has no a `html` page so it is a simple TypeScript code.

# Build
**Build** all parts of the extension
```sh
npm run build
```

Build all parts of the extension and **watch** (auto update the extension on code is changed)
```sh
npm run watch
```

Build all parts of the extension for a **production** 
```sh
npm run prod
```

# Build separately

Build **separately** with
```sh
npm run build:ba
npm run build:bg
npm run build:co
npm run build:op
npm run build:pa
npm run build:sb
```
To run and **auto update** compiled code use commands
```sh
npm run watch:ba
npm run watch:bg
npm run watch:co
npm run watch:op
npm run watch:pa
npm run watch:sb
```
To build for a **production** use commands
```sh
npm run prod:ba
npm run prod:bg
npm run prod:co
npm run prod:op
npm run prod:pa
npm run prod:sb
```
or update `manifest.json` file only with
```sh
npm run copy-manifest
```

# Abbreviations

* **ba** means [browser action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_actions)
* **bg** means [background script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts)
* **co** means [content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
* **op** means [options page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
* **pa** means [page action](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pageAction)
* **sb** means [sidebar page](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)

