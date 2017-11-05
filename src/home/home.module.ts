import * as angular from 'angular';
import { HomeConfig } from './home.config';
import { HomeController } from './home.controller';
import { ModalController } from './modal.controller';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { CalendarViewController } from './components/calendar-view/calendar-view.controller';
import { TimeFormComponent } from './components/time-form/time-form.component';

export const HomeModule = angular
    .module('test.home', ['ui.router'])
    .controller('HomeController', HomeController)
    .controller('ModalController', ModalController)
    .controller('CalendarViewController', CalendarViewController)
    .component('calendarView', CalendarViewComponent)
    .component('timeForm',TimeFormComponent)
    .config(HomeConfig)
    .name;