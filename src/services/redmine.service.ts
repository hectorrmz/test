import { Inject } from '../decorators/decorators';
import { Auth } from '../models/Auth';

@Inject('$http')
export class RedmineService {
    constructor(private http: ng.IHttpService) {
    }

    public loginRM(user: Auth) {
        return this.http.post("user", user);
    }

    public getIssues(key: string, id: number) {
        return this.http.get("issues?key=" + key + "&id=" + id);
    }

    public getActivities(key: string) {
        return this.http.get("activities?key=" + key);
    }

    public getTimeEntries(key: string, id: number, date: string, issueId: number, ) {
        if (issueId) {
            return this.http.get(`times?key=${key}&id=${id}&issue_id=${issueId}&spend_on=${date}`);
        } else {
            return this.http.get(`times?key=${key}&id=${id}&spend_on=${date}`);
        }

    }
}