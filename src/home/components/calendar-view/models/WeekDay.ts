import { TimesList } from "./TimesList";

export interface WeekDay {
    name: string; // S-M-T-W-T-F-S
    date?: number; //1-31
    day: number; //0-6,
    times: TimesList;
}