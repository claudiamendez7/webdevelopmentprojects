const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(cb) {
  src('src/scss/**/*.scss') //Identify Sass file
    .pipe(plumber())
    .pipe( sass()) //Compile
    .pipe( dest('build/css')) // Storage
  cb(); //callback
}

function dev(cb) {
    watch('src/scss/**/*.scss', css);
    cb();
}

exports.css = css;
exports.dev = dev;