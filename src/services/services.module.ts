import * as angular from 'angular';
import { AuthService } from './auth.service';
import { AuthHelper } from './auth.helper';
export const ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', AuthService)
    .service('AuthHelper', AuthHelper)
    .constant('apiUrl', 'http://localhost')
    .name;
