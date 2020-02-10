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
        this.router.post('/', reportController_1.reportController.list);
    }
}
const reportRoutes = new reportsRoutes();
exports.default = reportRoutes.router;
