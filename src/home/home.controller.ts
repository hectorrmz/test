import { Inject } from '../decorators/decorators';
import { IAuthService } from '../services/auth.service';
import * as moment from 'moment';

import {TimeItem} from '../typings/TimeItem';

declare interface weekDay {
    name: string; // S-M-T-W-T-F-S
    date?: number; //1-31
    day: number; //0-6
}

class weekObject {
    weekDays: Array<weekDay> = [];

    constructor() {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        days.forEach((dayName: string, index: number) => {
            this.weekDays.push({ name: dayName, day: index });
        });
    }
}

@Inject('$scope', 'AuthService', 'AuthHelper', '$uibModal')
export class HomeController {
    public username: string;
    public password: string;
    public errorMsg: string;
    public rdUser: IRDUser;
    public issues: Array<any>;
    public timeEntries: Array<ITimeEntry>;
    public events: Array<any> = [];

    public weeks: Array<weekObject> = [];
    public entries: Array<TimeItem> = [];


    constructor(private _scope:ng.IScope, private _authService: IAuthService, private _authHelper: IAuthHelper, private _uibModal: ng.ui.bootstrap.IModalService) {
        this.getIssues();
        this.setdaysRange();
    }

    private setdaysRange() {
        var now = new Date();

        var firstDay: number = now.getDate() <= 15 ? 1 : 16;
        var end: number = now.getDate() <= 15 ? 15 : this.daysInMonth(now.getMonth(), now.getFullYear());

        var initial = new Date(`${now.getMonth() + 1}-${firstDay}-${now.getFullYear()}`);
        //console.log(initial);

        var initialNumber: number = initial.getDay(); // 0-6
        var dayNumber = initial.getDate(); // date 1
        var skip = false;
        while (end > dayNumber) {
            var weekObj = new weekObject();

            weekObj.weekDays.forEach((day, index) => {

                if ((index >= initialNumber || skip) && dayNumber <= end) {
                    day.date = dayNumber;
                    dayNumber++;
                }
                //console.log(day, index);
            });

            skip = true;

            this.weeks.push(weekObj);
        }

        console.log(this.weeks);
    }

    public login = (form: ng.IFormController) => {

        if (form.$valid) {

            this.errorMsg = "";

            let user: IAuth = {
                username: this.username,
                password: this.password
            };

            this._authService.loginRM(user).then((response: any) => {
                //console.log(response.data.user);

                this.rdUser = response.data.user;
                this._authHelper.AuthorizeUser(this.rdUser);

                this.getIssues();

            }, (response) => {
                //console.log(response);
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
                else {
                    this.getTimes(key, id);
                }
            });
        }
    };

    private getTimes = (key: string, id: number, issueId?: number) => {


        var today = new Date();

        var currentMont = today.getMonth();
        var currentYear = today.getFullYear();

        var lastDayInMonth = this.daysInMonth(currentMont, currentYear);

        let dateRange = `><${currentYear}-${currentMont+1}-01|${currentYear}-${currentMont+1}-${lastDayInMonth}`;

        this._authService.getTimeEntries(key, id, dateRange, issueId).then((rsp: any) => {
            this.timeEntries = rsp.data.time_entries;
            //console.log(this.timeEntries);
            this.createTimeEntries();
        });


    }

    private createTimeEntries() {

        this.timeEntries.forEach((time: ITimeEntry) => {

            var date = moment(time.spent_on).date();

            var entry: TimeItem = {
                title: time.comments,
                duration: time.hours,
                date: date,
                activity: time.activity
            }

            this.entries.push(entry);
        });

    }

    public addTime(date: number){
        console.log(date);

        var modalInstance = this._uibModal.open({
            animation: true,
            templateUrl: 'home/time-form.html',
            controller: "ModalController as md",
            scope: this._scope,
            resolve: {
                date: date
            }
          });

          modalInstance.result.then(function (_selectedItem) {

          }, function () {

          });
    }

    public getTotal(date: number): number {
        var total: number = 0;

        var entries: Array<any> = this.entries.filter((entry: any) => {
            return entry.date == date;
        });

        entries.forEach((entry: any) => {
            total += entry.duration;
        });

        return total;
    }

    private daysInMonth(month: number, year: number) {
        return 32 - new Date(year, month, 32).getDate();
    }

    /** Initializes the controller. */
    $onInit(): void { }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}