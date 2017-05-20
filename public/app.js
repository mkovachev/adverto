(function () {
    const sammy = Sammy('#container', function () {
        this.get('#/', homeController.all)
        this.get('#/categories', categoriesController.all)
        this.get('#/categories/add', categoriesController.add)
        this.get('#/newAd', categoriesController.newAd)
    })

    $(function () {
        sammy.run('#/');
    })
})();