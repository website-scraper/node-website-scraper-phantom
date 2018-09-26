'use strict';

const path = require('path');
const phantomjs = require('phantomjs-prebuilt');
const Promise = require('bluebird');

const scriptPath = path.join(__dirname, 'script.js');

module.exports = (url, proxy) => {
	console.log(proxy.hostname);
	var host = proxy.hostname;
	var port = proxy.port;

	return new Promise((resolve, reject) => {
		const program = phantomjs.exec(scriptPath, url, host, port);
		let stdout = '';
		let stderr = '';

		program.stdout.on('data', (data) => {
			stdout += data;
		});

		program.stderr.on('data', (data) => {
			stderr += data;
		});

		program.on('exit', (code) => {
			if (code === 0) {
				// convert utf-8 -> binary string because website-scraper needs binary
				resolve(new Buffer(stdout).toString('binary'));
			} else {
				reject(new Error(`Phantomjs finished with exit code ${code}. ${stderr}`));
			}
		});
	});
};
