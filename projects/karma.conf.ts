// Karma configuration file
// https://karma-runner.github.io/1.0/config/configuration-file.html


module.exports = function (config: any) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],

        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],

        client: {
            clearContext: false // keep Jasmine Spec Runner output visible
        },

        coverageReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reporters: [
                { type: 'html' },
                { type: 'lcovonly' },
                { type: 'text-summary' }
            ]
        },

        reporters: ['progress', 'kjhtml'],

        port: 8080,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,

        // Recommended for Angular CLI
        browsers: ['ChromeHeadless'],

        singleRun: true,
        restartOnFileChange: true
    });
};
