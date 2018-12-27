module.exports = {
    
    baseUrl: 'http://svx.aero',
    //waitTimeout: 1000,
    screenshotDelay: 1000,
    //windowSize: '1920x1080',
    sets: {
        all: {
            files: 'test/desktop'
        },
        desktop: {
            files: 'test/desktop/test.js'
        }
    },
    
    browsers: {
        chromefhd: {
            compositeImage: true,
            windowSize: '1920x1080',
            screenshotsDir: 'screen/chrome/1920',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--headless']
                }
            } 
        },

        /*  chrome1440: {
             compositeImage: true,
             windowSize: '1440x900',
             screenshotsDir: 'screen/chrome/1440',
             desiredCapabilities: {
                 browserName: 'chrome',
                 chromeOptions: {
                     args: ['--headless']
                 }
             }
         },
 
         mobile: {
             screenshotsDir: 'screen/chrome/mobile',
             compositeImage: true, 
             desiredCapabilities: {
                 browserName: 'chrome',
                 version: '71.0',
                 chromeOptions: {
                     mobileEmulation: {
                         deviceMetrics: {
                             width: 320,
                             height: 568,
                             pixelRatio: 1.0
                         }
                     },
                     args: ['--headless']
                 }
             }
         },
     
   */
        ie11fhd: {
            compositeImage: true,
            windowSize: '1920x1080',
            screenshotsDir: 'screen/ie/1920',
            desiredCapabilities: {
                browserName: 'internet explorer',
                version: '11',
                'ie.enableFullPageScreenshot': false
            },
                
        },


        ie11fhd: {
            compositeImage: true,
            windowSize: '1440x900',
            screenshotsDir: 'screen/ie/1440',
            desiredCapabilities: {
                browserName: 'internet explorer',
                version: '11',
                'ie.enableFullPageScreenshot': false
            },
        },

        /* edge: {
            compositeImage: true,
            desiredCapabilities: {
                browserName: 'MicrosoftEdge',
            }
        }  */
    },

    plugins: {
        'html-reporter/hermione': { enabled: true, path: 'gemini-reports', defaultView: 'all' },
        'json-reporter/hermione': { enabled: true, path: 'reports/report.json' }
    },


    prepareBrowser: function (browser) {
        var _click = function click(selector) {
            var _this = this;
        
            return this.element(selector).then(function (elem) {
                /**
                 * check if element was found and throw error if not
                 */
                if (!elem.value) {
                    // throw new _ErrorHandler.RuntimeError(7);
                    return false;
                }
        
                return _this.elementIdClick(elem.value.ELEMENT);
            });
        };

        browser.addCommand('clickIfAvailable', _click);
     },
};