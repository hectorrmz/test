import * as angular from 'angular';
import { HomeConfig } from './home.config';
import { HomeController } from './home.controller';

export const HomeModule = angular
    .module('test.home', ['ui.router'])
    .controller('HomeController', HomeController)
    .config(HomeConfig)
    .name;