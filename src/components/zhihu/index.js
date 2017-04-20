import newsController from './news/newsController';

const MODULE = 'zhihu';

angular.module(MODULE, [])
    .controller('newsController', newsController)
    .directive('zhihuNews', () => ({
        template: require('./news/news.html'),
        controller: 'newsController',
        controllerAs: 'vm',
        restrict: 'E'
    }))

export default MODULE;
