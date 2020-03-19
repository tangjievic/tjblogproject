let gulp = require('gulp');
let rename = require("gulp-rename");
let less = require('gulp-less');
let autoprefixer = require('gulp-autoprefixer');
let eslint = require('gulp-eslint');
let jsonTransform = require('gulp-json-transform');

//项目路径
let option = {base: 'src'};
let dist = __dirname + '/dist';
let copyPath = ['!src/**/*.less','!src/img/**', 'src/**/*.*','!src/app.less','!src/wescoreui/**/**/*.less','!src/**/**/*.less',];
let imgPath = ['src/img/*.{png,jpg,gif}'];
let lessPath = ['src/pages/**/*.less','src/app.less','src/components/**/*.less','src/wescoreui/**/**/*.less'];
let watchLessPath = ['src/pages/**/*.less','src/css/**/*.less','src/app.less','src/components/**/*.less','src/wescoreui/**/**/*.less'];

//复制不包含less和图片的文件
gulp.task('copy', () => {
  return gulp.src(copyPath, option)
      .pipe(gulp.dest(dist));
});

//图片压缩
gulp.task('img', () =>{
  return gulp.src(imgPath, option)
  //.pipe(imagemin({
  //  progressive: true,
  // use: [pngquant()]
  //}))
      .pipe(gulp.dest(dist))
});

//编译less
gulp.task('less', () =>{
  return gulp.src(lessPath, option)
      .pipe(less().on('error', function (e) {
        console.error(e.message);
        this.emit('end');
      }))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(rename(function(path){
        path.extname = ".wxss"
      }))
      .pipe(gulp.dest(dist))
});

//监听
gulp.task('watch', () => {
  gulp.watch(copyPath, gulp.parallel('copy', 'lint'));
  gulp.watch(watchLessPath, gulp.series('less'));
  gulp.watch(imgPath, gulp.series('img'));
});

//代码规范检测
gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format());
});

//更改project.config.json的miniprogramRoot，并将其打包到dist目录
gulp.task("addProjectConfig", () => {
  return gulp.src('project.config.json')
      .pipe(
          jsonTransform(function(data) {
            data.miniprogramRoot = '/'
            return data;
          })
      )
      .pipe(gulp.dest('dist'));
});

//开发并监听
exports.default = gulp.series(
    gulp.parallel(
        'copy',
        'img',
        'less'
    ),
    //'lint',
    'watch'
);

//上线
exports.dist = gulp.series(
    gulp.parallel(
        'copy',
        'img',
        'less',
        'addProjectConfig'
    )//,
    //'lint'
);
/*

安装依赖：tnpm install
构建:gulp
监听目录：gulp watch

注意！！！！！
将node_moudules和dist两个文件夹忽略，具体操作：

选中文件夹->右键->Tortoise SVN->Unversion and add to ignore list

*/
