module.exports = function(grunt) {

grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),

	banner:   '/*!\n' +
            ' * Mobile-first RWD TEST for Nodehub\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> | Graficos.net\n' +
            ' * Last update: <%= grunt.template.today("dd-mm-yyyy") %> at <%= grunt.template.today("HH:MM:ss") %>\n' +
            ' */\n',

  autoprefixer: {
    options: {
      browsers: ['> 1%']
    },
    dist: {
        files: {
            'build/style-prefixed.css': 'css/main.css'
        }
    }
  },

	cssmin: {
	  my_css_target: {
	  		src: 'build/style-prefixed.css',
	    	dest: 'css/main.min.css',
	  }
	},

	usebanner: {
    options: {
      position: 'top',
      banner: '<%= banner %>'
    },
    files: {
      src: 'css/*.min.css'
    }
    },

  uglify: {
    my_js_target: {
      files: {
        'js/output.min.js': ['js/main.js']
      }
    }
  },

  watch: {
      html: {
        files: [
        'index.html',
        ],
        options: {
          livereload: true,
          debounceDelay: 250
        },
      },
      css: {
        files: 'css/main.css',
        tasks: ['autoprefixer', 'cssmin'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: 'gruntfile.js',
        options: {
          livereload: true
        }
      },
      js: {
        files: 'js/*.js',
        tasks: ['uglify'],
        options: {
          livereload: true,
        }
      }
    },

    connect: {
      options: {
        port: 3331,
        hostname: 'localhost'
      },
      middleware: function(connect, options) {
            return [
              connect.static(options.base)
            ];
          }
    }
});

	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['autoprefixer','cssmin','usebanner', 'uglify','connect','watch']);

};