let mix = require("laravel-mix");

// 1. Set public path to be current directory.
// 2. Compile scss file to be stored under 'dist/css' directory.
// 3. Prevent webpack from automatically process/optimize relative stylesheet url()'s.
// learn more: https://laravel-mix.com/docs/5.0/options
mix.setPublicPath("./").sass("assets/sass/popup.scss", "dist/css/").options({
    processCssUrls: false,
});
