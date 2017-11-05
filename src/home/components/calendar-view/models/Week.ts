import { WeekDay } from "./WeekDay";

export class Week {
    weekDays: Array<WeekDay> = [];

    constructor() {

        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        days.forEach((dayName: string, index: number) => {
            this.weekDays.push({ name: dayName, day: index, times: { date: "", entries: [] } });
        });
    }
}