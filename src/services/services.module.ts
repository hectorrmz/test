import * as angular from 'angular';
import { AuthService } from './auth.service';

export const ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', AuthService)
    .constant('apiUrl', 'http://localhost')
    .name;
