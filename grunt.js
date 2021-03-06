module.exports = function(grunt) {

    grunt.initConfig({
        meta: {
            name: 'Billy Data'
        },
        concat: {
            dist: {
                src: [
                    'src/bd.js',
                    'src/store.js',
                    'src/anonymous-record.js',
                    'src/model.js',
                    'src/attributes.js',
                    'src/model-operation-promise.js',
                    'src/record-array.js',
                    'src/transforms.js'
                ],
                dest: 'dist/billy-data.js'
            }
        },
        min: {
            dist: {
                src: ['dist/billy-data.js'],
                dest: 'dist/billy-data.min.js'
            }
        }
    });

    grunt.registerTask('default', 'concat min');

};