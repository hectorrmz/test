import { Inject } from '../decorators/decorators';

@Inject()
export class LayoutController {

    public date: Date;

    constructor() {
        this.date = new Date();
    }

    /** Initializes the controller. */
    $onInit(): void { }

    /** Cleans up the controller. */
    $onDestroy(): void { }
}