import * as angular from 'angular';
import { AppConfig } from './app.config';
import { AppRun } from './app.run';
import { ServicesModule } from './services/services.module';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';

angular
    .module('app', [
        'app.tpls',
        'ui.router',
        ServicesModule,
        LayoutModule,
        HomeModule
    ])
    .config(AppConfig)
    .run(AppRun);