var gulp = require('gulp');
var jest = require('jest-cli');
var path = require('path');

gulp.task('test', (callback) => {
    var options = {
        rootDir: __dirname,
        unmockedModulePathPatterns: [
            '<rootDir>/node_modules/react'
        ],
        testPathDirs: [
            '<rootDir>/bin/js'
        ]
    };
    jest.runCLI({ config: options }, __dirname, _ => callback());
});