import * as angular from 'angular';
import { LayoutConfig } from './layout.config';
import { LayoutController } from './layout.controller';

export const LayoutModule = angular
    .module('test.layout', ['ui.router'])
    .controller('LayoutController', LayoutController)
    .config(LayoutConfig)
    .name;