(function(){
    var time = Date.now();

    seajs.config({
        base: "./",
        alias: {},
        map: [
            [/^.*$/, function(url) {
                return url += (url.indexOf('?') === -1 ? '?' : '&') + 'time=' + time;
            }]
        ],
        preload: [],
        debug: true,
        charset: 'utf-8'
    });
})()