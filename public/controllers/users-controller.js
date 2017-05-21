const usersController = function () {

    function signUp(context) {
        // get sign up
        templates.get('signUp')
            .then(function (template) {
                // render sign up
                context.$element().html(template());

                // get user input
                $('btn-signUp').on('click', function () {
                    const user = {
                        email: $('#email').val(),
                        password: $('#password').val()
                    };
                    // send http request to server
                    db.users.signUp(user)
                        .then(function () {
                            toastr.success('You are registered, please sign in!');
                        });
                });
            });
    }

    function signIn(context) {
        // get sign in
        templates.get('signIn')
            .then(function (template) {
                // render sign in
                context.$element().html(template());

                // get user input
                $('btn-signIn').on('click', function () {
                    const user = {
                        email: $('#email').val(),
                        password: $('#password').val()
                    };
                    // send http request to server
                    db.users.signIn(user)
                        .then(function () {
                            toastr.success('You are signed in!');
                        });
                });
            });
    }

    return {
        signUp,
        signIn
    };
}();