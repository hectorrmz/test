module.exports = function () {
    var outputPath = './wwwroot/';
    var src = './src/';

    var config = {
        templates: src + '**/*.tpl.html',
        scss: {
            entry: src + 'styles/app.scss',
            src: [src + '**/*.scss'],
            destPath: outputPath + 'css'
        },
        html: {
            src: [src + '**/**.html'],
            dest: outputPath + 'js'
        }
    };

    return config;
};