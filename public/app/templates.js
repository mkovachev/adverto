const templates = function () {
    const handlebars = window.handlebars || window.Handlebars,
        Handlebars = window.handlebars || window.Handlebars,
        cache = {};

    function get(name) {
        const promise = new Promise(function (resolve, reject) {
            const url = `templates/${name}.handlebars`;
            $.get(url, function (html) {
                const template = handlebars.compile(html);
                resolve(template);
            });
        });
        return promise;
    }

    return {
        get
    };
}();