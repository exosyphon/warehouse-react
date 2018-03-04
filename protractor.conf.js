exports.config = {
    specs: ['e2e/*e2e.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine',
    onPrepare: () => {
      browser.ignoreSynchronization = true;
    }
};
