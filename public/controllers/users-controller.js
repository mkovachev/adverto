const usersController = function () {

    // function signIn(context) {}

    function signUp(context) {
        // render sign up view
        templates.get('signup')
            .then(function (template) {
                context.$element().html(template());
                // take user input
                $('btn-signup').on('click', function () {
                    const user = {
                        email: $('#email').val(),
                        password: $('#password').val()
                    };
                    // send http request to server
                    data.users.signUp(user)
                        .then(function () {
                            console.log('user registered');
                        });
                });
            });
    }

    return {
        //signIn,
        signUp
    };
}();