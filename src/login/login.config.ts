import { Inject } from '../decorators/decorators';

@Inject('$stateProvider')
export class LoginConfig {
    constructor(stateProvider: ng.ui.IStateProvider) {
        stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    content: {
                        templateUrl: 'login/login.tpl.html',
                        controller: 'LoginController',
                        controllerAs: '$lc'
                    }
                }
            });
    }
}