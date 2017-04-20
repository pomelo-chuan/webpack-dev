function configs($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<zhihu-news>'
        })
}

export default configs;