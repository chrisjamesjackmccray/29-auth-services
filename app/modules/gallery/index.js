import angular from 'angular';
import config from './config';
import controller from './controller';
import service from './services';

let auth = angular.module('tiy.auth', []);



auth.config(config);
auth.controller('authController', controller);
auth.service('authService', service);




export default auth;
