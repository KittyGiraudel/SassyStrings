module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({

    dir : {
      src : 'stylesheets',
      dist : 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          '<%= dir.src %>/SassyStrings/_char-at.scss',
          '<%= dir.src %>/SassyStrings/_str-count.scss',
          '<%= dir.src %>/SassyStrings/_str-ends-with.scss',
          '<%= dir.src %>/SassyStrings/_str-explode.scss',
          '<%= dir.src %>/SassyStrings/_str-implode.scss',
          '<%= dir.src %>/SassyStrings/_str-last-index.scss',
          '<%= dir.src %>/SassyStrings/_str-lcfirst.scss',
          '<%= dir.src %>/SassyStrings/_str-pad.scss',
          '<%= dir.src %>/SassyStrings/_str-printf.scss',
          '<%= dir.src %>/SassyStrings/_str-repeat.scss',
          '<%= dir.src %>/SassyStrings/_str-replace.scss',
          '<%= dir.src %>/SassyStrings/_str-reverse.scss',
          '<%= dir.src %>/SassyStrings/_str-rot.scss',
          '<%= dir.src %>/SassyStrings/_str-shuffle.scss',
          '<%= dir.src %>/SassyStrings/_str-split.scss',
          '<%= dir.src %>/SassyStrings/_str-starts-with.scss',
          '<%= dir.src %>/SassyStrings/_str-trim.scss',
          '<%= dir.src %>/SassyStrings/_str-ucfirst.scss',
          '<%= dir.src %>/SassyStrings/_str-word-count.scss',
          '<%= dir.src %>/SassyStrings/_stringify.scss'
        ],
        dest: './<%= dir.dist %>/_SassyStrings.scss',
      },
    },

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          quiet: 'true',
          loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
        },
        files: {
          './tmp/results.css': './test/test.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['./tmp/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', ['sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('build', ['test', 'concat']);

};
