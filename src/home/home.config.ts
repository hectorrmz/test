import { Inject } from '../decorators/decorators';

@Inject('$stateProvider')
export class HomeConfig {
    constructor(stateProvider: ng.ui.IStateProvider) {
        stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    content: {
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeController',
                        controllerAs: '$hc'
                    }
                }
            });
    }
}