Package.describe({
	summary: "Native date picker without dependencies",
	version: "1.0.1",
	git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.1');
	api.use(['standard-app-packages', 'tracker', 'templating', 'underscore', 'pfafman:font-awesome-4', 'mongo-livedata'], 'client');

	api.add_files('maxharris9:datepicker.css', 'client');
	api.add_files('date-picker-popup.css', 'client');
	api.add_files('maxharris9:datepicker.html', 'client');

	api.add_files('tracked-items.js', 'client');
	api.add_files('calendar.js', 'client');
	api.add_files('maxharris9:datepicker.js', 'client');

	api.add_files('calendar-test.js', 'client');

	api.add_files('state-machine.js', 'client');
	api.add_files('date-picker-popup.html', 'client');
	api.add_files('date-picker-popup.js', 'client');

	api.export(['Calendar', 'testGetWeekDay', 'testYear', 'fillCalendar', 'testCalendarGenerator', 'generateTextCalendar', 'printTest'], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('maxharris9:datepicker');
	api.addFiles('maxharris9:datepicker-tests.js');
});