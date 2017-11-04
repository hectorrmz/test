import { Inject } from '../decorators/decorators';
import { AuthHelper } from '../services/auth.helper';

@Inject('AuthHelper')
export class LayoutController {

    public date: Date;

    constructor(_authHelper: AuthHelper) {
        this.date = new Date();
    }

    /** Initializes the controller. */
    $onInit(): void { 

        

    }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}