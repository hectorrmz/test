import { Inject } from '../decorators/decorators';
import * as moment from 'moment';

import { TimeItem } from '../models/TimeItem';
import { TimeEntry } from '../models/TimeEntry';
import { Activity } from '../models/Activity';
import { AuthHelper } from '../services/auth.helper';
import { RedmineService } from '../services/redmine.service';

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

@Inject('$scope', '$state', 'RedmineService', 'AuthHelper', '$uibModal')
export class HomeController {

    isLoaded = false;

    public issues: Array<any>;
    public timeEntries: Array<TimeEntry>;
    public events: Array<any> = [];

    public weeks: Array<weekObject> = [];
    public entries: Array<TimeItem> = [];

    public activities: Array<Activity> = [];




    constructor(
        private _scope: ng.IScope,
        private _state: ng.ui.IStateService,
        private _redmineService: RedmineService,
        private _authHelper: AuthHelper,
        private _uibModal: ng.ui.bootstrap.IModalService) { }

    private setdaysRange() {
        var now = new Date();

        var firstDay: number = now.getDate() <= 15 ? 1 : 16;
        var end: number = now.getDate() <= 15 ? 15 : this.daysInMonth(now.getMonth(), now.getFullYear());

        var initial = new Date(`${now.getMonth() + 1}/${firstDay}/${now.getFullYear()}`);
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

    private getIssues = () => {

        let key: string = this._authHelper.getAPIKey();
        let id: number = this._authHelper.getRMUserId();
        let issueId: number;

        if (this._authHelper.isAuthorized()) {
            this._redmineService.getIssues(key, id).then((res: any) => {

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

    private getActivities = () => {

        let key: string = this._authHelper.getAPIKey();

        if (this._authHelper.isAuthorized()) {
            this._redmineService.getActivities(key).then((res: any) => {

                this.activities = res.data.time_entry_activities;
            });
        }
    };

    private getTimes = (key: string, id: number, issueId?: number) => {


        var today = new Date();

        var currentMont = today.getMonth();
        var currentYear = today.getFullYear();

        var lastDayInMonth = this.daysInMonth(currentMont, currentYear);

        let dateRange = `><${currentYear}-${currentMont + 1}-01|${currentYear}-${currentMont + 1}-${lastDayInMonth}`;

        this._redmineService.getTimeEntries(key, id, dateRange, issueId).then((rsp: any) => {
            this.timeEntries = rsp.data.time_entries;
            this.isLoaded = true;
            //console.log(this.timeEntries);
            this.createTimeEntries();
        });


    }

    private createTimeEntries() {

        this.timeEntries.forEach((time: TimeEntry) => {

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

    public addTime(date: number) {
        console.log(date);

        var modalInstance = this._uibModal.open({
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
    $onInit(): void {
        if (this._authHelper.isAuthorized()) {
            this.getIssues();
            this.setdaysRange();
            this.getActivities();
        } else {
            this._state.go("app.login");
        }

    }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}