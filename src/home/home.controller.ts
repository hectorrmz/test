import { Inject } from '../decorators/decorators';
import { IAuthService } from '../services/auth.service';

@Inject('AuthService')
export class HomeController {

    public username: string;
    public password: string;

    public errorMsg: string;
    public rdUser: IRDUser;

    public issues: Array<any>;

    constructor(private _authService: IAuthService) {

    }

    public login = (form: ng.IFormController) => {

        if (form.$valid) {

            this.errorMsg = "";

            let user: IAuth = {
                username: this.username,
                password: this.password
            };

            this._authService.loginRM(user).then((response: any) => {
                console.log(response.data.user);

                this.rdUser = response.data.user;

                if (this.rdUser && this.rdUser.id) {
                    this._authService.getIssues(this.rdUser.api_key, this.rdUser.id).then((res: any) => {
                        console.log(res);
                        this.issues = res.data.issues;
                    });
                }


            }, (response) => {
                console.log(response);
                this.errorMsg = response.data.message;
            });

        }

    };

    /** Initializes the controller. */
    $onInit(): void { }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}