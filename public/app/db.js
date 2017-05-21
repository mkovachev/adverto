const db = (function () {

    // function signIn(user) {}
    // function signOut(user) {}

    function signUp(user) {
        const promise = new Promise((resolve, reject) => {
            const url = 'api/users';

            const reqUser = {
                email: user.email,
                passHash: CryptoJS.SHA1(user.password).toString()
            }

            $.ajax(url, {
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
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