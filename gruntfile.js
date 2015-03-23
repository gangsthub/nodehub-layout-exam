module.exports = function(grunt) {

grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),

	banner:   '/*!\n' +
            ' * RWD TEST for Nodehub\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %>\n' +
            ' * Last update: <%= grunt.template.today("dd-mm-yyyy") %> at <%= grunt.template.today("HH:MM:ss") %>\n' +
            ' */\n',

	cssmin: {
	  my_target: {
	  		src: 'assets/style.css',
	    	dest: 'assets/style.min.css',
	  }
	},

	/* watch: {
      files: ['assets/*.min.css'],
      tasks: ['cssmin']
   },*/

  usebanner: {
    options: {
      position: 'top',
      banner: '<%= banner %>'
    },
    files: {
      src: 'assets/*.min.css'
    }
    },


});

	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['cssmin','usebanner'/*,'watch'*/]);

};