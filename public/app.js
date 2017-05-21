(function () {
    const sammy = Sammy('#content', function () {
        this.get('#/', homeController.all)
        this.get('#/signup', usersController.signUp)
        this.get('#/signin', usersController.signIn)
        this.get('#/myads', adsController.all)
        this.get('#/myads/add', adsController.add)
    })

    $(function () {
        sammy.run('#/');
    })
})();