module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src : [
                    '**/*.html',
                    'css/**/*.css'
                ]
            },
            options: {
                server: {
                    baseDir: "./source"
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync']);
};
