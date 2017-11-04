import { Inject } from '../decorators/decorators';
import { Auth } from '../models/Auth';

@Inject('$http')
export class AuthService {
    constructor(private http: ng.IHttpService) {
    }

    public loginRM(user: Auth) {
        return this.http.post("user", user);
    }
}