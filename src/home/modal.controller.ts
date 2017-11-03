import { Inject } from '../decorators/decorators';

@Inject('$scope', '$uibModalInstance', 'date')
export class ModalController {

    time: any = {};

    constructor(private _scope: any, private _uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private date: number){
        this.time.activity = 9;
    }

    save(){
        console.log(this._scope);
        console.log(this.time);
        this._uibModalInstance.close();

        this._scope.$hc.entries.push({
            title: this.time.title,
            duration: this.time.hours,
            activity: {
                id: this.time.activity,
                name: "whatsover"
            },
            date: this.date
        });
    }

    close(){
        this._uibModalInstance.close();
    }

}