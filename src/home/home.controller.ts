import { Inject } from '../decorators/decorators';
import * as moment from 'moment';

import { TimeItem } from '../models/TimeItem';
import { TimeEntry } from '../models/TimeEntry';
import { Activity } from '../models/Activity';
import { AuthHelper } from '../services/auth.helper';
import { RedmineService } from '../services/redmine.service';
import { TimesList } from './components/calendar-view/models/TimesList';

@Inject('$scope', '$state', 'RedmineService', 'AuthHelper', '$uibModal')
export class HomeController {

    isLoaded = false;

    issues: Array<any>;
    timeEntries: Array<TimeEntry>;
    events: Array<any> = [];

    entries: Array<TimeItem> = [];

    activities: Array<Activity> = [];
    options: Array<TimeItem> = [];


    constructor(
        private _scope: ng.IScope,
        private _state: ng.ui.IStateService,
        private _redmineService: RedmineService,
        private _authHelper: AuthHelper,
        private _uibModal: ng.ui.bootstrap.IModalService) { }


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

                this.activities.forEach((activity: Activity) => {

                    var option: TimeItem = {
                        title: '',
                        activity: activity,
                        duration: 0,
                        isNew: true
                    }

                    this.options.push(option);
                });
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

        this._scope.$broadcast("loadTimesOnCalendar");

    }

    public addTime(times: TimesList, time: TimeItem) {

        var modalInstance = this._uibModal.open({
            templateUrl: 'home/time-form.html',
            controller: "ModalController as md",
            scope: this._scope,
            resolve: {
                opts: {
                    times: times,
                    time: time
                }
            }
        });

        modalInstance.result.then(function (_selectedItem) {

        }, function () {

        });
    }

    private daysInMonth(month: number, year: number) {
        return 32 - new Date(year, month, 32).getDate();
    }

    /** Initializes the controller. */
    $onInit(): void {
        if (this._authHelper.isAuthorized()) {
            this.getIssues();
            this.getActivities();
        } else {
            this._state.go("app.login");
        }

    }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}