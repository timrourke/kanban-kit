const gulp     = require('gulp');
const inject   = require('gulp-inject');
const path     = require('path');
const svgstore = require('gulp-svgstore');
const svgmin   = require('gulp-svgmin');

gulp.task('svgstore', function () {
  const svgs = gulp
    .src('src/svgs/src/*.svg')
    .pipe(svgmin(function (file) {
      const prefix = path.basename(file.relative, path.extname(file.relative));

      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true,
          },
        }],
      };
    }))
    .pipe(svgstore({ inlineSvg: true }));

  // Inject the svg spritesheet into the application template
  return gulp
    .src('public/index.html')
    .pipe(inject(svgs, {
      transform: (filePath, file) => file.contents.toString(),
    }))
    .pipe(gulp.dest('public/'));
});
