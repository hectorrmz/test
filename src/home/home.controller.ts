import { Inject } from '../decorators/decorators';
import { IAuthService } from '../services/auth.service';

@Inject('AuthService', 'AuthHelper')
export class HomeController {

    public username: string;
    public password: string;
    public errorMsg: string;
    public rdUser: IRDUser;
    public issues: Array<any>;
    public timeEntries: Array<ITimeEntry>;

    constructor(private _authService: IAuthService, private _authHelper: IAuthHelper) {
        this.getIssues();
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
                this._authHelper.AuthorizeUser(this.rdUser);

                this.getIssues();

            }, (response) => {
                console.log(response);
                this.errorMsg = response.data.message;
            });
        }
    };

    private getIssues = () => {

        let key: string = this._authHelper.getAPIKey();
        let id: number = this._authHelper.getRMUserId();
        let issueId: number;

        if (this._authHelper.isAuthorized()) {
            this._authService.getIssues(key, id).then((res: any) => {
                console.log(res.data.issues);
                this.issues = res.data.issues;

                if (this.issues.length === 1) {
                    issueId = this.issues[0].id;

                    let dateRange = "><2017-10-01|2017-10-15";

                    this._authService.getTimeEntries(key, id, issueId, dateRange).then((rsp: any) => {

                        this.timeEntries = rsp.data.time_entries;
                        console.log(this.timeEntries)
                    });
                }
            });
        }
    };

    /** Initializes the controller. */
    $onInit(): void { }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}