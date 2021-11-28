function defaultTask(cb) {
    console.log("Bienvenue sémillant visiteur")
    cb();
}

exports.default = defaultTask

var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', function() {
    gulp.src(['html/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
    gulp.src(['html/common/alphabet.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./common/'));
    gulp.src([
        'html/level1/lesson01.html',
        'html/level1/lesson02.html',
        'html/level1/lesson03.html',
        'html/level1/lesson04.html',
        'html/level1/lesson05.html',
        'html/level1/lesson06.html',
        'html/level1/lesson07.html',
        'html/level1/lesson08.html',
        'html/level1/lesson09.html',
        'html/level1/lesson10.html',
        'html/level1/lesson11.html',
        'html/level1/lesson12.html',
        'html/level1/lesson13.html',
        'html/level1/lesson14.html',
        'html/level1/lesson15.html',
        'html/level1/lesson16.html',
        'html/level1/lesson17.html',
        'html/level1/lesson18.html',
        'html/level1/lesson19.html',
        'html/level1/lesson20.html',
        'html/level1/lesson21.html',
        'html/level1/lesson22.html',
        'html/level1/lesson23.html',
        'html/level1/lesson24.html',
        'html/level1/lesson25.html',
        'html/level1/lesson26.html',
        'html/level1/lesson27.html',
        'html/level1/lesson28.html',
        'html/level1/religion.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./level1/'));
    gulp.src([
        'html/level2/lesson01.html',
        'html/level2/lesson02.html',
        'html/level2/lesson03.html',
        'html/level2/lesson04.html',
        'html/level2/lesson05.html',
        'html/level2/lesson05.html',
        'html/level2/lesson06.html',
        'html/level2/lesson07.html',
        'html/level2/lesson08.html',
        'html/level2/lesson09.html',
        'html/level2/lesson10.html',
        'html/level2/lesson11.html',
        'html/level2/lesson12.html',
        'html/level2/lesson13.html',
        'html/level2/lesson14.html',
        'html/level2/lesson15.html',
        'html/level2/lesson16.html',
        'html/level2/lesson17.html',
        'html/level2/lesson18.html',
        'html/level2/lesson19.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./level2/'));
});