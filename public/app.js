(function () {
    const sammy = Sammy('#content', function () {
        this.get('#/', homeController.all)
        this.get('#/signup', usersController.signUp)
        this.get('#/signin', usersController.signIn)
        this.get('#/myAds', adsController.all)
        this.get('#/myAds/add', adsController.add)
    })

    $(function () {
        sammy.run('#/');
    })
})();