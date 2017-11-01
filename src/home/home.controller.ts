import { Inject } from '../decorators/decorators';
import { IAuthService } from '../services/auth.service';

declare interface weekDay {
    name: string;
    number?: number
}

class weekObject {
    weekDays: Array<weekDay> = [];

    constructor() {
        var days = ["Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday"];

        days.forEach((day: string) => {
            this.weekDays.push({ name: day });
        });
    }
}

@Inject('AuthService', 'AuthHelper')
export class HomeController {

    public username: string;
    public password: string;
    public errorMsg: string;
    public rdUser: IRDUser;
    public issues: Array<any>;
    public timeEntries: Array<ITimeEntry>;
    public events: Array<any> = [];

    public weeks: Array<weekObject> = [];


    constructor(private _authService: IAuthService, private _authHelper: IAuthHelper) {
        this.getIssues();


        this.setdaysRange();

    }

    private setdaysRange() {
        var now = new Date();

        if (now.getDate() <= 15) {

            var initial = new Date(`${now.getMonth() + 1}-1-${now.getFullYear()}`);
            var end: number = 15;
            console.log(initial);

            var initialNumber: number = initial.getDay(); // 0-6
            var dayNumber = initial.getDate(); // date 1
            var skip = false;
            while (end > dayNumber) {
                var weekObj = new weekObject();               

                weekObj.weekDays.forEach((day, index) => {

                    if ((index >= initialNumber || skip) && dayNumber<= end) {
                        day.number = dayNumber;
                        dayNumber++;
                    }
                    console.log(day, index);
                });

                skip = true;

                this.weeks.push(weekObj);
            }

            console.log(this.weeks);


        } else {

            var initial = new Date(`${now.getMonth() + 1}-16-${now.getFullYear()}`);
            var end = 31;
            console.log(initial);

            var initialNumber: number = initial.getDay(); // 0-6
            var dayNumber = initial.getDate(); // date 16-31
            var skip = false;
            while (end > dayNumber) {
                var weekObj = new weekObject();
                

                weekObj.weekDays.forEach((day, index) => {

                    if ((index >= initialNumber || skip) && dayNumber<= end) {
                        day.number = dayNumber;
                        dayNumber++;
                    }
                    console.log(day, index);
                });

                skip = true;

                this.weeks.push(weekObj);
            }

            console.log(this.weeks);
        }
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

                this.issues = res.data.issues;

                if (this.issues.length === 1) {
                    issueId = this.issues[0].id;

                    this.getTimes(key, id, issueId);
                }
            });
        }
    };

    private getTimes = (key: string, id: number, issueId: number) => {

        let dateRange = "><2017-10-01|2017-10-31";

        this._authService.getTimeEntries(key, id, issueId, dateRange).then((rsp: any) => {
            this.timeEntries = rsp.data.time_entries;
            console.log(this.timeEntries);
            this.renderRedMineEvents();
        });


    }

    private renderRedMineEvents = () => {

        var currentDate: string = "";
        var initialHour: number;

        this.timeEntries.forEach((time: ITimeEntry) => {

            var event: any = {};

            event.title = time.comments;

            if (time.activity.id === 72) {
                event.allDay = true;
                event.start = time.spent_on;
            }

            else {
                if (currentDate != time.spent_on) {
                    currentDate = time.spent_on;
                    initialHour = 6;
                }

                event.start = new Date(time.spent_on);
                event.start = event.start["addHours"](initialHour);

                initialHour = initialHour + time.hours;

                event.end = new Date(time.spent_on);
                event.end = event.end["addHours"](initialHour);
            }

            event.color = this.setEventColor(time.activity.id);

            console.log(event);

            this.events.push(event);
        });

        (<any>$('#calendar')).fullCalendar('addEventSource', this.events);


    };

    private setEventColor = (activity: number) => {
        switch (activity) {
            case 9: return "#269900";
            case 10: return "#668cff";
            case 14: return "#ce7fd8";
            case 72: return "#FFFFFF";
            case 72: return "#ffa64d";
            default: return "#ffd480";
        }
    };

    /** Initializes the controller. */
    $onInit(): void { }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}