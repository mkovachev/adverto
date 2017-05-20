(function () {
    const sammy = Sammy('#content', function () {
        this.get('#/', homeController.all)
        this.get('#/register', usersController.register)
        //this.get('#/categories/add', categoriesController.add)
        //this.get('#/newAd', categoriesController.newAd)
    })

    $(function () {
        sammy.run('#/');
    })
})();