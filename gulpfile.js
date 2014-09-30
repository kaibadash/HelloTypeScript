var gulp = require("gulp");
var tsc = require("gulp-tsc");
var tsd = require('gulp-tsd');

var tscpath = {
    "tsc": ["ts/*.ts"]
};

gulp.task("build", function() {
    gulp.src(tscpath.tsc)
        .pipe(tsc({sourcemap: true}))
        .pipe(gulp.dest("build/"));
});

gulp.task("watch", function() {
    gulp.watch(tscpath.tsc, ["build"]);
});

// emitでエラーがでて怒られる…
gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall -so',
        config: './ts/tsd.json'
    }, callback);
});

gulp.task("default", ["build", "watch"]);

