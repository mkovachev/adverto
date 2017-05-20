const templates = (function () {
    function get(name) {
        const promise = new Promise((resolve, reject) => {
            $.get(url, function (html) {
                const template = Handlebars.compile(html);
                resolve(template);
            }).error(function (err) {
                reject(err);
            })
        })
        return promise;
    }

    return {
        get
    }
})()