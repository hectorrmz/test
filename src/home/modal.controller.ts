import * as moment from 'moment';
import { Inject } from '../decorators/decorators';

@Inject('$uibModalInstance', 'opts')
export class ModalController {

    time: any = {};
    now: any;
    left: string;

    constructor(private _uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private opts: any){

        this.now = moment(this.opts.times.date).format('dddd, MMMM Do');

        this.time = this.opts.time;


        //this.left = (8 - _scope.$hc.getTotal(this.date)).toFixed(2);
        
        //moment(`${this.now.getMonth()+1}-${this.date}-${this.now.getFullYear()}`).format("LLLL");
    }

    save(form : ng.IFormController){

        if(form.$valid){
            if(this.time.hours > this.left){
                alert("Excess!")
            }
    
            this._uibModalInstance.close();
    
            this.opts.times.entries.push({
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