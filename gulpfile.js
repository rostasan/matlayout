var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('nodemon');
var sass = require('gulp-sass');

gulp.task('sass', function() {
   return gulp.src('app/scss/styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
});

gulp.task("nodemon", function(){
    var options = {
        script: './app/app.js',
        watch: './app/'
    };

    return nodemon(options)
        .on("start", function(){
            console.log("nodemon started");
            startBrowserSync();
        })
        .on("restart", function(){
            console.log("nodemon restarted");
        })
})

gulp.task("default", ["nodemon"]);

function startBrowserSync(){
    if(browserSync.active){
        return;
    }
    console.log("browserSync starting");

    var options = {
        proxy: 'localhost:3000',
        port: 4000,
        ghostMode: {
            scroll: true
        },
        browser: ["firefox"],
        files: ["./app/css/*.css", "./app/*.js", "./app/*.html"]
    }
    browserSync(options);
}