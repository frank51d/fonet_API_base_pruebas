import { Router } from 'express';
import { reportController } from '../controllers/reportController';

class reportsRoutes {

    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(){

        this.router.post('/full', reportController.list);
        this.router.post('/fecha', reportController.intervalo);

    }

}

const reportRoutes = new reportsRoutes();
export default reportRoutes.router;