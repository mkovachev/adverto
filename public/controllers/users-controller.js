const usersController = function () {

    // function signIn(context) {}

    function signUp(context) {
        // get sign up
        templates.get('signup')
            .then(function (template) {
                // render sign up
                context.$element().html(template());

                // get user input
                $('btn-signup').on('click', function () {
                    const user = {
                        email: $('#email').val(),
                        password: $('#password').val()
                    };
                    // send http request to server
                    data.users.signUp(user)
                        .then(function () {
                            toastr.success('You are registered, please sign in!');
                        });
                });
            });
    }

    return {
        //signIn,
        signUp
    };
}();