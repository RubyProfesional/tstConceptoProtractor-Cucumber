// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  directConnect: true,
  baseUrl: 'http://simplexilimitada.eastus.cloudapp.azure.com/auth/sign-in',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true
  },
  specs: ['./src/features/*.feature'],
  restartBrowserBetweenTests: true,

  cucumberOpts: {
    require: 'e2e/src/features/*.js',
    tags: '@regression',
    format: ['pretty'],
    profile: false,
    'no-source': true
  },

  onPrepare: function() {
    const { Given, Then, When, Before } = require('feature')
    global.Given = Given
    global.When = When
    global.Then = Then
    global.Before = Before
  }
}
