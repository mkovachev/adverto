const db = (function () {

    /* User */
    /* Sing up */
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

    /* Sign in*/
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


    /* Ads */
    function get() {
        const promise = new Promise((resolve, reject) => {
            const url = 'api/myads';
            $.getJSON(url, function (res) {
                resolve(res);
            }).error(function (err) {
                reject(err);
            });
        });
        return promise;
    }

    function add(newAd) {
        const promise = new Promise((resolve, reject) => {
            const url = 'api/myads/add';
            $.ajax(url, {
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(newAd),
                // add header
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
            signUp,
            signIn,
            //signOut,
        },
        ads: {
            get,
            add
        }
    };
})();