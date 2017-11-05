import * as angular from 'angular';
import { AppConfig } from './app.config';
import { AppRun } from './app.run';
import { ServicesModule } from './services/services.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

angular
    .module('app', [
        'app.tpls',
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'dndLists',

        ServicesModule,
        LayoutModule,
        HomeModule,
        LoginModule
    ])
    .config(AppConfig)
    .run(AppRun);