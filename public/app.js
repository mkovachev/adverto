(function () {
    const sammy = Sammy('#content', function () {
        this.get('#/', homeController.all)
        this.get('#/signup', usersController.signUp)
        this.get('#/signin', usersController.signIn)
        //this.get('#/categories/add', categoriesController.add)
        //this.get('#/newAd', categoriesController.newAd)
    })

    $(function () {
        sammy.run('#/');
    })
})();