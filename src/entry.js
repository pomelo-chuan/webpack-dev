import configs from './config.js';
import zhihuModule from './components/zhihu';
require('./style.scss');

const myApp = angular.module('myApp', [
    'ui.router',
    zhihuModule
]);

myApp.config(configs);
