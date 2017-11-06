import { Inject } from '../../../decorators/decorators';
import { Week } from './models/Week';
import { TimeItem } from '../../../models/TimeItem';
import { WeekDay } from './models/WeekDay';
import { TimesList } from './models/TimesList';

@Inject('$scope')
export class CalendarViewController {

    weeks: Array<Week> = [];
    entries: Array<TimeItem> = [];
    onAddTime: Function;
    selected: TimeItem;

    constructor(private _scope: any) {

        this._scope.$on('loadTimesOnCalendar', () => {
            this.setLoggedTimeEntries();
        });

    }

    setdaysRange() {
        var now = new Date();

        var firstDay: number = now.getDate() <= 15 ? 1 : 16;
        var end: number = now.getDate() <= 15 ? 15 : this.daysInMonth(now.getMonth(), now.getFullYear());

        var initial = new Date(`${now.getMonth() + 1}/${firstDay}/${now.getFullYear()}`);

        var initialNumber: number = initial.getDay(); // 0-6
        var dayNumber = initial.getDate(); // date 1
        var skip = false;

        while (end > dayNumber) {

            var weekObj = new Week();

            weekObj.weekDays.forEach((day: WeekDay, index) => {

                if ((index >= initialNumber || skip) && dayNumber <= end) {
                    day.date = dayNumber;
                    day.times.date = `${now.getFullYear()}-${now.getMonth() + 1}-${dayNumber}`;
                    dayNumber++;
                }
            });

            skip = true;

            this.weeks.push(weekObj);
        }
    }

    setLoggedTimeEntries() {

        this.weeks.forEach((week: Week) => {

            week.weekDays.forEach((day: WeekDay) => {

                day.times.entries = this.entries.filter((entry) => {
                    return entry.date === day.date
                });

            })

        });
    }

    eventAdded(_event: any, times:TimesList, time: TimeItem){
        this.openModal(times, time);
    }

    removeTime(index: number, list: Array<TimeItem>) {
        if (confirm("Are you sure that you want to delete this time entry?")) {
            list.splice(index, 1);
        }
    }

    private daysInMonth(month: number, year: number) {
        return 32 - new Date(year, month, 32).getDate();
    }

    public getTotal(entries: Array<TimeItem>): number {
        var total: number = 0;

        var total = 0
        for (var i = 0, _len = entries.length; i < _len; i++) {
            total += entries[i].duration;
        }

        return total;
    }

    openModal(times: TimesList, time: TimeItem) {
        this._scope.$parent.$hc.addTime(times, time);
    }

    /** Initializes the controller. */
    $onInit(): void {
        this.setdaysRange();
    }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}