[![Version](https://img.shields.io/npm/v/website-scraper-phantom.svg?style=flat)](https://www.npmjs.org/package/website-scraper-phantom)
[![Downloads](https://img.shields.io/npm/dm/website-scraper-phantom.svg?style=flat)](https://www.npmjs.org/package/website-scraper-phantom)
[![Build Status](https://travis-ci.org/website-scraper/node-website-scraper-phantom.svg?branch=master)](https://travis-ci.org/website-scraper/node-website-scraper-phantom)

# website-scraper-phantom
Plugin for [website-scraper](https://github.com/s0ph1e/node-website-scraper) which returns html for dynamic websites using PhantomJS.

This module is an Open Source Software maintained by one developer in free time. If you want to thank the author of this module you can use [Patreon](https://www.patreon.com/s0ph1e).

## Requirements
* nodejs version >= 8
* website-scraper version >= 4

if you need plugin for website-scraper version < 4, you can find it [here](https://github.com/website-scraper/node-website-scraper-phantom/blob/0.1/README.md) (version 0.1.0)

## Installation
```sh
npm install website-scraper website-scraper-phantom
```

## Usage
```javascript
const scrape = require('website-scraper');
const PhantomPlugin = require('website-scraper-phantom');

scrape({
    urls: ['https://www.instagram.com/gopro/'],
    directory: '/path/to/save',
    plugins: [ new PhantomPlugin() ]
});
```

## How it works
It starts PhantomJS which just opens page and waits when page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.
