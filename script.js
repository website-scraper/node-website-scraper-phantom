var page = require('webpage').create();
var system = require('system');

if (system.args.length < 2) {
	system.stderr.write('Url is missed');
	phantom.exit(1);
}

var url = system.args[1];

function done() {
	system.stdout.write(page.content);
	phantom.exit(0);
}

page.onLoadFinished = function() {
	setTimeout(done, 1000);
};

page.open(url, function (status) {
	if (status !== 'success') {
		system.stderr.write('Can\'t open page');
		phantom.exit(1);
	}
});
