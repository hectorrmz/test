import { Inject } from '../decorators/decorators';

@Inject('$http')
export class AuthService implements IAuthService {
    constructor(private http: ng.IHttpService) {
    }

    public loginRM(user: IAuth) {
        return this.http.post("user", user);
    }

    public getIssues(key: string, id: number) {
        return this.http.get("issues?key=" + key + "&id=" + id);
    }

    public getTimeEntries(key: string, id: number, issueId: number, date: string) {
        return this.http.get(`times?key=${key}&id=${id}&issue_id=${issueId}&spend_on=${date}`);
    }

    public getJson() {
        return this.http.get("user");
    }
}

export interface IAuthService {
    getJson: () => ng.IPromise<any>;
    loginRM: (user: IAuth) => ng.IPromise<any>;
    getIssues: (token: string, id: number) => ng.IPromise<any>;
    getTimeEntries: (key: string, id: number, issueId: number, date: string) => ng.IPromise<any>;
}