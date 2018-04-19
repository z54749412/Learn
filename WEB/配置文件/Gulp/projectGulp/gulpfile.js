//script:src
// 引入gulp
var gulp =  require('gulp');

// 引入对js进行压缩操作的包
var uglify = require('gulp-uglify');

// 引入对js进行合并操作的包
var concat = require('gulp-concat');

// 引入对css进行压缩的包
var cssnano = require('gulp-cssnano');

// 引入对html进行压缩的包
var htmlmin = require('gulp-htmlmin');

// 创建任务
// 第一个参数: 任务名
// 第二个参数: 回调函数,当我们执行任务时就会执行这个函数
gulp.task('test', function(){
  console.log(123);
});


// 处理app.js文件
gulp.task('script', function(){
  // 1.要匹配到要处理的文件
  // 指定指定的文件:参数是匹配的规则
  // 参数也可以是数组，数组中的元素就是匹配的规则
  gulp.src(['./app.js','./sign.js'])
  // concat 的参数是合并之后的文件名字
  .pipe(concat('index.js'))
  .pipe(uglify())
  // dest方法参数，指定输出文件的路径
  .pipe(gulp.dest('./dist'));
});

// 新建一个任务，对css进行处理
gulp.task('style', function(){
  // 对项目中的2个css文件进行合并，压缩操作
  // 1.匹配到要处理的文件
  gulp.src(['./*.css'])
  // 2.合并文件
  .pipe(concat('index.css'))
  // 3.压缩操作
  .pipe(cssnano())
  // 4.输出到指定目录
  .pipe(gulp.dest('./dist'));
  });

// 新建一个任务，对html进行压缩
gulp.task('html', function(){
 // 1.匹配到要处理的文件
 gulp.src(['./index.html'])
 // 2.压缩操作
 .pipe(htmlmin({collapseWhitespace:true}))
 // 3.指定输出目录
 .pipe(gulp.dest('./dist'));
});

// gulp.watch 监视文件变化，执行相应任务
gulp.task('mywatch', function(){
  // 执行指定的任务
  gulp.run('script');
  // 1.监视js文件的变化，然后执行script任务
  // 第一个参数：要监视的文件的规则
  // 第二个参数：是要执行的任务
  gulp.watch(['./app.js','sign.js'],['script']);
});