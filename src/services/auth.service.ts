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

    public getJson() {
        return this.http.get("user");
    }
}

export interface IAuthService {

    getJson: () => ng.IPromise<any>;
    loginRM: (user: IAuth) => ng.IPromise<any>;
    getIssues: (token: string, id: number) => ng.IPromise<any>;
}