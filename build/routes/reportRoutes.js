"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportController_1 = require("../controllers/reportController");
class reportsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/full', reportController_1.reportController.list);
        this.router.post('/fecha', reportController_1.reportController.intervalo);
    }
}
const reportRoutes = new reportsRoutes();
exports.default = reportRoutes.router;
