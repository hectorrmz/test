import * as angular from 'angular';

export const ServicesModule = angular
    .module('app.services', [])
    .constant('apiUrl', 'http://localhost')
    .name;
