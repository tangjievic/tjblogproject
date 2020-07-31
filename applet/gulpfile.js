const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const changed = require('gulp-changed');
const autoprefixer = require('autoprefixer');
const clear = require('gulp-clean');
const del = require('del');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');


// 项目路径
const option = {
    base: 'src',
    allowEmpty: true,
};
// 此处为输出目录
const builtPath = 'dist';

const dist = `${__dirname}/${builtPath}`;
const copyPath = ['src/**/!(_)*.*', '!src/**/*.less', '!src/**/*.ts'];
const lessPath = ['src/**/*.less', 'src/app.less'];
const watchLessPath = ['src/**/*.less', 'src/css/**/*.less', 'src/app.less'];
const tsPath = ['src/**/*.ts', 'src/app.ts'];

// 清空目录
gulp.task('clear', () => gulp.src(dist, { allowEmpty: true }).pipe(clear()));

// 复制不包含less和图片的文件
gulp.task('copy', () => gulp.src(copyPath, option).pipe(gulp.dest(dist)));
// 复制不包含less和图片的文件(只改动有变动的文件）
gulp.task('copyChange', () => gulp
    .src(copyPath, option)
    .pipe(changed(dist))
    .pipe(gulp.dest(dist)));

// 编译less
gulp.task('less', () => gulp
    .src(lessPath, option)
    .pipe(less().on('error', function (e) {
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(rename((path) => {
        path.extname = '.wxss';
    }))
    .pipe(gulp.dest(dist)));
// 编译less(只改动有变动的文件）
gulp.task('lessChange', () => gulp
    .src(lessPath, option)
    .pipe(changed(dist))
    .pipe(less().on('error', function (e) {
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(rename((path) => {
        path.extname = '.wxss';
    }))
    .pipe(gulp.dest(dist)));

// 编译
gulp.task('tsCompile', () => tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js.pipe(sourcemaps.write())
    .pipe(gulp.dest(builtPath)));

// 监听
gulp.task('watch', () => {
    gulp.watch(tsPath, gulp.series('tsCompile'));
    const watcher = gulp.watch(copyPath, gulp.series('copyChange'));
    gulp.watch(watchLessPath, gulp.series('less')); // Change
    watcher.on('unlink', (filepath) => {
        const filePathFromSrc = path.relative(path.resolve('src'), filepath);
        // Concatenating the 'build' absolute path used by gulp.dest in the scripts task
        const destFilePath = path.resolve(builtPath, filePathFromSrc);
        // console.log({filepath, filePathFromSrc, destFilePath})
        del.sync(destFilePath);
    });
});

// 开发并监听
gulp.task(
    'default',
    gulp.series(
        // sync
        gulp.parallel(
            'copy',
            // "copyNodeModules",
            // "generatePackageJson",
            'less',
            'tsCompile',
        ),
        'watch',
    ),
);

// 上线
gulp.task(
    'build',
    gulp.series(
        // sync
        'clear',
        gulp.parallel(
            // async
            'copy',
            // "copyNodeModules",
            // "generatePackageJson",
            'less',
            'tsCompile',
        ),
    ),
);
