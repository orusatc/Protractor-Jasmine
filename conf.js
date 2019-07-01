// conf.js
exports.config = {
	capabilities: {
    browserName: 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['todo-spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 70000
  }
}