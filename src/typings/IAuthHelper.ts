declare interface IAuthHelper {
    getAPIKey: () => string;
    setAPIKey(key: string): void;
    getRMUserId: () => number;
    setRMUserId: (userId: number) => void;
    isAuthorized: () => boolean;
    AuthorizeUser: (user: IRDUser) => void;
    logOutUser: () => void;
}