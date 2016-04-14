import Mocha from 'mocha';

const reporter = process.env.SERVER_TEST_REPORTER || 'spec';

// Initialize a new `Mocha` test runner instance
const mochaInstance = new Mocha();

// Use practicalmeteor:mocha-core to bind the Meteor environment and support
// synchronous server code.
Package['practicalmeteor:mocha-core'].setupGlobals(mochaInstance);

export { mochaInstance };
