import { Inject } from '../decorators/decorators';
import { LayoutController } from './layout.controller';

@Inject('$stateProvider', '$urlRouterProvider' )
export class LayoutConfig {
    constructor(stateProvider: ng.ui.IStateProvider, urlRouterProvider: ng.ui.IUrlRouterProvider) {
        stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'layout/layout.tpl.html',
                controller: LayoutController,
                controllerAs: "$layout"
            });

        urlRouterProvider.otherwise('/login');
    }
}