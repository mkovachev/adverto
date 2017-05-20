const data = (function () {

    // function signIn(user) {}
    // function signOut(user) {}

    function signUp(user) {
        const promise = new Promise((resolve, reject) => {
            const url = 'api/users';
            $.ajax(url, {
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(user),
                success: function (res) {
                    resolve(res);
                }
            }).error(function (err) {
                reject(err);
            });
        });
        return promise;
    }

    return {
        users: {
            //signIn,
            //signOut,
            signUp
        }
    };
})();