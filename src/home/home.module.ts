import * as angular from 'angular';
import { HomeConfig } from './home.config';
import { HomeController } from './home.controller';
import { ModalController } from './modal.controller';

export const HomeModule = angular
    .module('test.home', ['ui.router'])
    .controller('HomeController', HomeController)
    .controller('ModalController', ModalController)
    .config(HomeConfig)
    .name;