(function () {
    const sammy = Sammy('#content', function () {
        this.get('#/', homeController.all)
        //this.get('#/categories', categoriesController.all)
        //this.get('#/categories/add', categoriesController.add)
        //this.get('#/newAd', categoriesController.newAd)
    })

    $(function () {
        sammy.run('#/');
    })
})();