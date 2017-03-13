## Introduction
Plugin for [website-scraper](https://github.com/s0ph1e/node-website-scraper) which returns html for dynamic websites using PhantomJS.

## Installation
```sh
npm install website-scraper website-scraper-phantom
```

## Usage
```javascript
const scrape = require('website-scraper');
const phantomHtml = require('website-scraper-phantom');

scrape({
    urls: ['https://www.instagram.com/gopro/'],
    directory: '/path/to/save',
    httpResponseHandler: phantomHtml
}).then(console.log).catch(console.log);
```

## How it works
It starts PhantomJS which just opens page and waits when page is loaded.
It is far from ideal because probably you need to wait until some resource is loaded or click some button or log in. Currently this module doesn't support such functionality.
