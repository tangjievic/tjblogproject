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
const { lastRun } = require('gulp');

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
const tsPath = ['src/**/*.ts', 'src/app.ts'];
//清空目录
function clearFile(cb) {
    gulp.src('dist/**/*.*', { 
        allowEmpty: true,
        since:lastRun(clearFile)
    }).pipe(clear({force: true}))
    .pipe(gulp.dest(dist));
    cb();
}
//复制不包含less和图片的文件
function copyFileUnlessLessTs(cb){
    gulp.src(copyPath,option).pipe(gulp.dest(dist));
    cb();
}

//编译less
function lessCompile(cb){
    gulp.src(lessPath,option)
    .pipe(less().on('error',function(e){
        console.error(e.message);
        this.emit('end');
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(rename((path)=>{
        path.extname = '.wxss';
    }))
    .pipe(gulp.dest(dist));
    cb()
}
//less变动在更新
function lessChangeCompile(cb){
    gulp.src(lessPath, option)
    .pipe(changed(dist))
    .pipe(less().on('error', function (e) {
      console.error(e.message);
      this.emit('end');
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest(dist));
    cb()
}
//编译ts
function tsCompile(cb){
    tsProject.src().pipe(sourcemaps.init())
    .pipe(tsProject())
    .js.pipe(sourcemaps.write())
    .pipe(gulp.dest(builtPath));
    cb();
}

//监听 
function wacthFile(cb){
    gulp.watch(tsPath,gulp.series(tsCompile));
    const watcher = gulp.watch(copyPath, gulp.series(lessChangeCompile));
    gulp.watch(lessPath, gulp.series(lessCompile)); // Change
    watcher.on('unlink',(filepath)=>{
        const filePathFromSrc = path.relative(path.resolve('src'), filepath);
        const destFilePath = path.resolve(builtPath, filePathFromSrc);
        del.sync(destFilePath);
    })
    cb()
}

exports.build = gulp.series(clearFile,lessCompile,tsCompile,copyFileUnlessLessTs);
exports.default = gulp.series(gulp.parallel(copyFileUnlessLessTs,lessCompile,tsCompile),wacthFile);