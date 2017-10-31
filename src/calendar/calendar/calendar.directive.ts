import { CalendarController } from './calendar.controller';
//import * as moment from 'moment';


export const CalendarDirective = (): ng.IDirective => {
    return {
        bindToController: true,
        controllerAs: '$ctl',
        controller: CalendarController,
        link: function (_scope: any) {
            (<any>$('#calendar')).fullCalendar({
                defaultView: 'agendaWeek',
                minTime: "01:00:00",
                maxTime: "12:00:00",
                weekends: false,
                editable: true,
                droppable: true, // this allows things to be dropped onto the calendar
                visibleRange: {
                    start: '2017-10-1',
                    end: '2017-11-1'
                },
                eventClick: function (calEvent: any, _jsEvent: any, _view: any) {
                    var title = prompt('Event Title:', calEvent.title);

                    if (title) {
                        calEvent.title = title;
                        (<any>$('#calendar')).fullCalendar('updateEvent', calEvent);
                    }
                },
                drop: function (_date: any, event: any) {

                    var title = prompt('Event Title:', event.title);

                    if (title) {
                        event.title = title;
                        (<any>$('#calendar')).fullCalendar('updateEvent', event);
                    }
                }
            });

            $('div.external-event').each(function () {
                console.log("external event");
                // store data so the calendar knows to render an event upon drop
                $(this).data('event', {
                    title: $.trim($(this).text()), // use the element's text as the event title
                    stick: true // maintain when user navigates (see docs on the renderEvent method)
                });

                // make the event draggable using jQuery UI
                (<any>$(this)).draggable({
                    zIndex: 1000,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0  //  original position after the drag
                });

            });
        }
    };
};