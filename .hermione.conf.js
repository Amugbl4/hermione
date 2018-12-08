module.exports = {
    
    sets: {
        desktop: {
            files: 'test/desktop'
        }
    },

    browsers: {
        chrome: {
            //screenshotDelay: 500000,
            baseUrl: 'http://svx.aero',
            desiredCapabilities: {
                browserName: 'chrome' // this browser should be installed on your OS
            }
        }
    },

    plugins: {
        'html-reporter/hermione': { enabled: true, path: 'gemini-reports', defaultView: 'all' },
        //         'json-reporter/hermione': { enabled: true, path: 'reports/report.json' }
    },

};