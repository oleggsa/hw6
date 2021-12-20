const { src, dest, parallel, series, watch } = require('gulp');

const copyIndex = () => {
  console.log('first task');
  return src('./dist/pages/index.html')
    .pipe(dest('build/pages'));
};

const copySecond = () => {
  console.log('second task');
  return src('./dist/pages/second-page.html')
    .pipe(dest('build/pages'));
};

const copyScss = () => {
  console.log('third task');
  return src('./dist/scss/common/*.scss')
    .pipe(dest('./build/styles'));
};

exports.copy = copyIndex;
exports.default = copyScss;
exports.parallel = parallel(copyIndex, copySecond, copyScss);
exports.series = series(copyIndex, copySecond, copyScss);