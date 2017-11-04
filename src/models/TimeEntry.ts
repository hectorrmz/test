import { Activity } from "./Activity";

export interface TimeEntry {
    activity: Activity;
    comments: string;
    created_on: string;
    hours: number;
    id: number;
    issue: any;
    project: any;
    spent_on: string;
    updated_on: string;
    user: any;
}