import * as moment from 'moment';
import { Inject } from '../../../decorators/decorators';
import { TimesList } from '../calendar-view/models/TimesList';

@Inject('$scope', '$uibModalInstance', 'times')
export class TimeFormController {
    time: any = {};
    now: any;
    left: string;

    constructor(private _scope: any, private _uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private times: TimesList){

        this.now = new Date();

        this.now = moment(this.times.date).format('dddd, MMMM Do');

        //this.left = (8 - _scope.$hc.getTotal(this.date)).toFixed(2);
        
        //moment(`${this.now.getMonth()+1}-${this.date}-${this.now.getFullYear()}`).format("LLLL");
    }

    save(form : ng.IFormController){

        if(form.$valid){
            if(this.time.hours > this.left){
                alert("Excess!")
            }
    
            this._uibModalInstance.close();
    
            this._scope.$hc.entries.push({
                title: this.time.title,
                duration: this.time.hours,
                activity: this.time.activity,
                isNew: true
            });
        }
        
    }

    close(){
        this._uibModalInstance.close();
    }

}