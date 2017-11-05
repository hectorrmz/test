export const CalendarViewComponent: ng.IComponentOptions = {
    controller: 'CalendarViewController',
    controllerAs: 'cv',
    templateUrl: 'home/components/calendar-view/calendar-view.tpl.html',
    bindings: {
        entries : "=times",
        onAddTime: "&openModal"
    }
};