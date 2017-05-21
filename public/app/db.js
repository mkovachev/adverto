const db = (function () {

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

    function signIn(user) {
        const promise = new Promise((resolve, reject) => {
            const url = 'api/users/auth';

            const reqUser = {
                email: user.email,
                passHash: CryptoJS.SHA1(user.password).toString()
            }

            $.ajax(url, {
                method: 'PUT',
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
    // function signOut(user) {}

    return {
        users: {
            signUp,
            signIn,
            //signOut,
        }
    };
})();