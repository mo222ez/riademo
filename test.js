require.config({
	paths: {
		jQ: "lib/jquery/jquery-1.9.0",
		sweet: "lib/sweet/sweet",
		"coffee-script": "lib/coffee-script",
		sweeten: "lib/require/sweeten",
		cs: "lib/require/cs",
		parser: "lib/sweet/parser",
		expander: "lib/sweet/expander",
		escodegen: "lib/sweet/escodegen",
		"es6-collections": "lib/sweet/es6-collections",
		underscore: "lib/underscore/underscore-1.4.3.min",
		purebackbone: "lib/backbone/backbone-0.9.10.min",
		"bb-rel":"lib/backbone/backbone-relational",
		"bb-loc":"lib/backbone/backbone.localStorage.async",
		backbone: "lib/backbone/backbone",
		mymodel: "src/mymodel"
	},
	shim: {
		sweet: {deps: ["jQ"]},
		underscore: {
			/*init: function(){
				console.log("......shimming underscore");
				return this._.noConflict();
			}*/
		},
		jQ: {
			init: function(){
				console.log("......shimming jQuery");
				return this.jQuery.noConflict(true);
			}
		},
		purebackbone: {
			deps: ["jQ","underscore"],
			exports: "Backbone"
		},
		"bb-rel": ["purebackbone","underscore"],
		"bb-loc": ["purebackbone","underscore"]
	}
});


define(["tests/test-mymodel"],function(){
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	jasmineEnv.execute();


});
