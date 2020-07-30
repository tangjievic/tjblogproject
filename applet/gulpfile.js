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
const option = {
    base:'src',
    allowEmpty:true
};
const buildPath = 'dist';
const dist = `${__dirname}/${buildPath}`;
const copyPath = ['src/**/!(_)*.*', '!src/**/*.less','!src/**/*.ts'];
const lessPath = ['src/**/*.less', 'src/app.less'];
const watchLessPath = ['src/**/*.less', 'src/css/**/*.less', 'src/app.less'];
const tsPath = ['src/**/*.ts', 'src/app.ts'];

//清空目录dist
function cleanDist(cb) {
    gulp.src(dist,{
        allowEmpty:true,
        read: false,
        //since: gulp.lastRun(cleanDist)
    }).pipe(clear());
    cb();
}
//复制文件除开_的文件和less文件
function copyFile(cb){
    gulp.src(copyPath,option,{
        //since: gulp.lastRun(copyFile)
    }).pipe(changed(dist)).pipe(gulp.dest(dist));
    cb();
}
//复制改动的文件不包含less
function copyChange(cb){
    gulp.src(copyPath,option)
    .pipe(changed(dist))
    .pipe(gulp.dest(dist))
    cb()
}

//编译less
function lessComplie(cb){
    gulp.src(lessPath,option,{since: gulp.lastRun(lessComplie)})
    .pipe(less().on('error',function(e){
        console.error(e.message);
        this.emit('end');
    })).pipe(postcss([autoprefixer]))
    .pipe(rename((path)=>{
        path.extname = '.wxss'
    })).pipe(gulp.dest(dist));
    
    cb();
}
//编译ts
function tsCompile(cb){
    gulp.src(['./typings/**/*.ts'].concat(tsPath),option,{since: gulp.lastRun(tsCompile)}).pipe(sourcemaps.init()).pipe(tsProject())
    .js.pipe(sourcemaps.write()).pipe(gulp.dest(buildPath));
    cb()
}
//监听
function watchEvent(cb){
    gulp.watch(tsPath,gulp.series(tsCompile));
    const watcher = gulp.watch(copyPath,gulp.series(copyChange));
    gulp.watch(watchLessPath,gulp.series(lessComplie));
    watcher.on('unlink',(filepath)=>{
        const filePathFromSrc = path.relative(path.resolve('src'),filepath);
        const destFilePath = path.resolve(builtPath, filePathFromSrc);
        del.sync(destFilePath);
    })
    cb()
}
exports.default = gulp.series(gulp.parallel(copyFile,lessComplie,tsCompile),watchEvent);
exports.build = gulp.series(cleanDist,copyFile,lessComplie,tsCompile);