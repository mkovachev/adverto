const usersController = function () {

    function login(context) {
        templates.get('login')
            .then(function (template) {
                context.$element().html(template());
            });
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