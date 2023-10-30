const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(cb) {
  src('src/scss/**/*.scss') //Identify Sass file
    .pipe( sass()) //Compile
    .pipe( dest('build/css')) // Storage

    cb(); //callback
}
function dev(cb) {
    watch('src/scss/**/*.scss', css)
    cb();
}

exports.css = css;
exports.dev = dev;