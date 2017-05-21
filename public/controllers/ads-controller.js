const adsController = function () {

    function all(context) {
        db.ads.get()
            .then(function (resAds) {
                return templates.get('ads');
            })
            .then(function (template) {
                context.$element().html(template(ads));
            })
    }

    function add(context) {

    }

    return {
        all,
        add
    };
}();