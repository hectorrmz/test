import * as angular from 'angular';
import { AuthService } from './auth.service';
import { AuthHelper } from './auth.helper';
import { RedmineService } from './redmine.service';

export const ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', AuthService)
    .service('AuthHelper', AuthHelper)
    .service('RedmineService', RedmineService)
    .constant('apiUrl', 'http://localhost')
    .name;
