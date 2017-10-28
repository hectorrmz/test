import * as angular from 'angular';
import { AppConfig } from './app.config';
import { AppRun } from './app.run';
import { ServicesModule } from './services/services.module';

angular
    .module('app', [
        // Uncomment to use your app templates.
        // 'app.tpls',
        'ui.router',
        ServicesModule
    ])
    .config(AppConfig)
    .run(AppRun);