import { Router } from 'express';
import { reportController } from '../controllers/reportController';

class reportsRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(){

        this.router.post('/', reportController.list);

    }

}

const reportRoutes = new reportsRoutes();
export default reportRoutes.router;