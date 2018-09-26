var page = require('webpage').create();
var system = require('system');


phantom.setProxy(system.args[2], system.args[3]) //setProxy('ip','port')
// phantom.setProxy('27.111.43.178','8080')

if (system.args.length < 2) {
	system.stderr.write('Url is missed');
	phantom.exit(1);
}

var url = system.args[1];

function done() {
	system.stdout.write(page.content);
	phantom.exit(0);
}

page.open(url, function (status) {
	if (status !== 'success') {
		system.stderr.write('Can\'t open page');
		phantom.exit(1);
	}
	setTimeout(done, 1000);
});
