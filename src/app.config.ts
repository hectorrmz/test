import { Inject } from './decorators/decorators';

@Inject('$stateProvider', '$urlRouterProvider')
export class AppConfig {
    constructor(stateProvider: ng.ui.IStateProvider, urlRouterProvider: ng.ui.IUrlRouterProvider) {
        stateProvider
            .state('app', {
                url: '/',
                template: '<h2>Hello world!</h2>'
            });

        urlRouterProvider.otherwise('/');
    }
}