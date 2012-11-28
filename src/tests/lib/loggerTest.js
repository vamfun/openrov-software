var logger = require("../../lib/logger");

QUnit.module("logger");

test("create_ShouldCreateANewLogger", function(assert) {
	
	var testee = logger.create();

	ok(testee != undefined, "logger should not be undefined");
});

test("create_ShouldCreateEnabledLogger_WhenNothingIsPassed", function(assert) {
	var testee = logger.create();

	equal(true, testee.enabled, "logger should be enabled");
});

test("create_ShouldCreateDisabledLogger_WhenFalseIsPassed", function(assert) {

	var testee = logger.create(false);

	equal(false, testee.enabled, "logger should be disabled");
});