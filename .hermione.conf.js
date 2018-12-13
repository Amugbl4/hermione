module.exports = {
    
    baseUrl: 'http://svx.aero',
    waitTimeout: 10000,
    screenshotDelay: 5000,
    sets: {
        desktop: {
            files: 'test/desktop'
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome', // this browser should be installed on your OS
                }
            }
        },

    plugins: {
        'html-reporter/hermione': { enabled: true, path: 'gemini-reports', defaultView: 'all' },
        //         'json-reporter/hermione': { enabled: true, path: 'reports/report.json' }
    },

};