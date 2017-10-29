import { Inject } from '../decorators/decorators';

@Inject('$http')
export class AuthService implements IAuthService {
    constructor(private http: ng.IHttpService) {
    }

    public loginRM(user: IAuth){
        return this.http.post("user", user);
    }

    public getJson() {
        return this.http.get("user");
    }
}

export interface IAuthService {

    getJson: () => ng.IPromise<any>;
    loginRM: (user: IAuth) => ng.IPromise<any>;
}