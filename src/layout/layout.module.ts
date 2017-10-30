import * as angular from 'angular';
import { LayoutConfig } from './layout.config';
import { LayoutController } from './layout.controller';
import { CalendarDirective } from '../calendar/calendar/calendar.directive';

export const LayoutModule = angular
    .module('test.layout', ['ui.router'])
    .controller('LayoutController', LayoutController)
    .directive("calendarTracker", CalendarDirective)
    .config(LayoutConfig)
    .name;