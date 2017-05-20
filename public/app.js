(function () {
    const sammy = Sammy('#container', function () {
        this.get('#/', function () {

        })

        this.get('#/categories', function () {

        })
    })

    $(function () {
        sammy.run('#/');
    })
})();