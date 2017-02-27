var Promise = require('bluebird');
var getPhantomHtml = require('./get-phantom-html.js');

/**
 * Makes phantom request if response contains html, returns original response body otherwise
 * @param {Object} response - response object from `request` module
 * @return {Promise} - resolved with body if success, rejected if error
 */
module.exports = (response) => {
	var contentType = response.headers['content-type'];
	var isHtml = contentType && contentType.split(';')[0] === 'text/html';
	if (isHtml) {
		return getPhantomHtml(response.request.href);
	} else {
		return Promise.resolve(response.body);
	}
};
