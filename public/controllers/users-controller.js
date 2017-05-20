const usersController = function () {

    function login(context) {

    }

    function register(context) {
        templates.get('register')
            .then(function (template) {
                context.$element().html(template());
            });
    }

    return {
        login,
        register
    };
}();