!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _config=__webpack_require__(3),_config2=_interopRequireDefault(_config),_zhihu=__webpack_require__(1),_zhihu2=_interopRequireDefault(_zhihu);__webpack_require__(4);var myApp=angular.module("myApp",["ui.router",_zhihu2.default]);myApp.config(_config2.default)},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _newsController=__webpack_require__(2),_newsController2=_interopRequireDefault(_newsController),MODULE="zhihu";angular.module(MODULE,[]).controller("newsController",_newsController2.default).directive("zhihuNews",function(){return{template:__webpack_require__(5),controller:"newsController",controllerAs:"vm",restrict:"E"}}),exports.default=MODULE},function(module,exports){"use strict";function newsController($scope){function square(n){return n*n}function addNumber(item){return item++}var vm=this;$scope.count=0,vm.add=function(){addNumber($scope.count)},square(1)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=newsController},function(module,exports){"use strict";function configs($stateProvider,$urlRouterProvider){$urlRouterProvider.when("","/home"),$stateProvider.state("home",{url:"/home",template:"<zhihu-news>"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=configs},function(module,exports){},function(module,exports){module.exports="<div> <p>{{count}}</p> <button ng-click=vm.add()>ADD</button> </div> <div class=list-style>list</div>"}]);