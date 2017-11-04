export interface TimeItem{
    title: string;
    duration: number;
    date: number;
    activity: {
        id: number,
        name: string
    },
    isNew?: boolean
}