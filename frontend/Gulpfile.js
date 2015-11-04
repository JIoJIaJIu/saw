var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', ['deps']);

gulp.task('deps', function () {
    exec('./node_modules/bower-installer/bower-installer.js');
});
