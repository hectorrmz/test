import { Inject } from '../decorators/decorators';

@Inject()
export class AuthHelper implements IAuthHelper {

    private session: Storage;
    private apiKey: string;
    private rmUserId: number;

    constructor() {
        this.session = window.sessionStorage;

        this.apiKey = this.session.getItem("api_key");
        this.rmUserId = this.session.getItem("user_id") ? parseInt(this.session.getItem("user_id")) : 0;
    }

    public getAPIKey = (): string => {
        return this.apiKey;
    };

    public setAPIKey = (key: string): void => {
        this.session.setItem("api_key", key);
        this.apiKey = key;
    };

    public getRMUserId = (): number => {
        return this.rmUserId;
    };

    public setRMUserId = (userId: number): void => {
        this.session.setItem("user_id", userId.toString());
        this.rmUserId = userId;
    };

    public isAuthorized = (): boolean => {
        if (!this.apiKey || !this.rmUserId) {
            return false;
        }
        return true;
    };

    public AuthorizeUser = (user: IRDUser): void => {
        this.setAPIKey(user.api_key);
        this.setRMUserId(user.id);
    };

    public logOutUser = (): void => {
        this.apiKey = "";
        this.rmUserId = 0;
        this.session.clear();
    };

}

