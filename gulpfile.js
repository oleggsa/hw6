const { src, dest, parallel, series, watch } = require('gulp');

const copyIndex = () => {
  return src('./dist/pages/index.html')
    .pipe(dest('build/pages'));
};

const copyScss = () => {
  return src('./dist/scss/common/*.scss')
    .pipe(dest('./build/styles'));
};

exports.copy = copyIndex;
exports.default = copyScss;