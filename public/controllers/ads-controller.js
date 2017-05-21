const adsController = function () {

    function all(context) {
        db.ads.get()
            .then(function (resAds) {
                return templates.get('myAds');
            })
            .then(function (template) {
                context.$element().html(template(ads));
            });
    }

    function add(context) {
        templates.get('newAd')
            .then(function (template) {
                context.$element().html(template());

                const newAd = {
                    title: $('#title').val(),
                    category: $('#category').val(),
                    description: $('#description').val(),
                }

                $('#btn-newAd').on('click', function () {
                    db.ads.add(newAd)
                        .then(function (newAd) {
                            toastr.success(`${newAd.title} added!`);
                            context.redirect('#/myads')
                        });
                });
            })
    }

    return {
        all,
        add
    };
}();