var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));


function watch() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}


function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

function bundle_uglify(){

	/***
		{

		    "compilerOptions": {
		        "noImplicitAny": true,
		        "target": "es5"
		    }
		}
	****/


    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));

}

function bundle_babel(){
	/*******
	{

	    "compilerOptions": {
	        "noImplicitAny": true,
	        "target": "es2015"
	    
	    }
	}
	********/
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .transform('babelify', {
        presets: ['es2015'],
        extensions: ['.ts']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));

}

function startwatch(){
	/*Start watch function on update*/
	return watchedBrowserify.on("update", watch).on("log", gutil.log)
}


/************
* Task Copy
*************/

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

/************
* Task Watch
*************/
gulp.task("watch",['copy-html'],watch,startwatch() )

/************
* Task Build default
*************/

gulp.task("default", ["copy-html"],bundle);


/************
* Task Build UnglyFy with source map and minified
*************/

gulp.task("build_unglify", ["copy-html"],bundle_uglify);


/************
* Task Build BABel with source map a beaty code
*************/

gulp.task("build_babel", ["copy-html"],bundle_babel);
