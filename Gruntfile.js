module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['src/app/*.js', 'src/app/services/*.js'],
        tasks: ['terser:main'],
      },
      css: {
        files: 'src/app/styles/*.scss',
        tasks: ['sass:build'],
      },
      livereload: {
        options: { livereload: true },
        files: ['dist/**/*']
      },
    },    
    terser: {
      options: {
        ecma: 2015
      },
      main: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['src/app/*.js', 'src/app/services/*.js'],
        },
      },
    },    
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    sass: {                              
      build: {                            
        options: {                       
          style: 'expanded'
        },
        files: {                         
          'dist/styles/main.css': 'src/app/styles/main.scss'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostmane: 'localhost',
          port: 9001,
          open : true,
          livereload : true
        }
      }
    },  
    concat: {
      dist: {
        src: ['src/*.js'],
        dest: 'dist/output.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //same function uglify but run with JS ES6+
  grunt.loadNpmTasks('grunt-terser');

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Load the plugin that provides the "concat" task.
  //grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');



  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify','sass']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.registerTask('server', 'Compile then start connect web server' , function(){
    grunt.task.run([
      'connect',
      'watch'
    ]);
  });

  // A very basic default task.
  grunt.registerTask('default-teste', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

  

};