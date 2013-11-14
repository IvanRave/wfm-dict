module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bump');

    grunt.config.init({
        bump: {
          options: {
            files: ['package.json', 'bower.json'],
            updateConfigs: [],
            commit: true,
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['-a'],
            createTag: true,
            tagName: 'v%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: true,
            pushTo: 'origin'
          }
        }
    });
};