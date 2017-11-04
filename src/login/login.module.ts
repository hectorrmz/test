import * as angular from 'angular';
import { LoginConfig } from './login.config';
import { LoginController } from './login.controller';

export const LoginModule = angular
    .module('test.login', ['ui.router'])
    .controller('LoginController', LoginController)
    .config(LoginConfig)
    .name;