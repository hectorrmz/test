import { Inject } from '../decorators/decorators';
import { Auth } from '../models/Auth';
import { RMUser } from '../models/RDUser';
import { AuthService } from '../services/auth.service';
import { AuthHelper } from '../services/auth.helper';

@Inject('$state', 'AuthService', 'AuthHelper')
export class LoginController {

    public username: string;
    public password: string;
    public errorMsg: string;
    public rdUser: RMUser;

    constructor(private _state: ng.ui.IStateService, private _authService: AuthService, private _authHelper: AuthHelper) { }


    public login = (form: ng.IFormController) => {

        if (form.$valid) {

            this.errorMsg = "";

            let user: Auth = {
                username: this.username,
                password: this.password
            };

            this._authService.loginRM(user).then((response: any) => {
                //console.log(response.data.user);

                this.rdUser = response.data.user;
                this._authHelper.AuthorizeUser(this.rdUser);

                this._state.go("app.home")

            }, (response) => {
                //console.log(response);
                this.errorMsg = response.data.message;
            });
        }
    };

    /** Initializes the controller. */
    $onInit(): void { 

        if(this._authHelper.isAuthorized()){
            this._state.go("app.home");
        }

    }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}