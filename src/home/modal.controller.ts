import { Inject } from '../decorators/decorators';
import * as moment from 'moment';

@Inject('$scope', '$uibModalInstance', 'date')
export class ModalController {

    time: any = {};
    now: any;
    left: string;

    constructor(private _scope: any, private _uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private date: number){
        this.time.activity = 9;

        this.now = new Date();


        this.now = moment();

        this.now = this.now.set({
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: this.date
        }).format('dddd, MMMM Do');

        this.left = (8 - _scope.$hc.getTotal(this.date)).toFixed(2);
        
        //moment(`${this.now.getMonth()+1}-${this.date}-${this.now.getFullYear()}`).format("LLLL");
    }

    save(){

        if(this.time.hours > this.left){
            alert("Excess!")
        }

        this._uibModalInstance.close();

        this._scope.$hc.entries.push({
            title: this.time.title,
            duration: this.time.hours,
            activity: this.time.activity,
            date: this.date,
            isNew: true
        });
    }

    close(){
        this._uibModalInstance.close();
    }

}