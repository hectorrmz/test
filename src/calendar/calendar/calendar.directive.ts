import { CalendarController } from './calendar.controller';

export const CalendarDirective = (): ng.IDirective => {
    return {
        bindToController: true,
        controllerAs: '$ctl',
        controller: CalendarController,
        link: function(_scope: any){
            (<any>$('#calendar')).fullCalendar({
                defaultView : 'agendaWeek',
                minTime: "08:00:00",
                maxTime: "19:00:00",
                weekends: false,
                visibleRange: {
                    start: '2017-10-1',
                    end: '2017-11-1'
                }
            });
        }
    };
};