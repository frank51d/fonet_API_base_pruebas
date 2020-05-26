"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class reportsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.then(function (p) {
                p.query('SELECT ordenes_servicio.idorden, estatus_orden.descripcion AS estatus, tipo_orden.descripcion AS tipo, usuario.nombre AS tecnico, ordenes_servicio.nombres_cliente, ordenes_servicio.fecha_reporte, ordenes_servicio.fecha_asig FROM ordenes_servicio INNER JOIN estatus_orden ON ordenes_servicio.idestatus_orden = estatus_orden.idestatus_orden INNER JOIN tipo_orden ON ordenes_servicio.idtipo_orden = tipo_orden.idtipo_orden INNER JOIN usuario ON ordenes_servicio.id = usuario.id WHERE tipo_orden.descripcion LIKE ? AND usuario.nombre LIKE ? AND ordenes_servicio.nombres_cliente LIKE ? AND ordenes_servicio.fecha_reporte LIKE ? AND ordenes_servicio.fecha_asig LIKE ? ORDER BY ordenes_servicio.idorden DESC', ["%" + req.body.tipo + "%", "%" + req.body.usuario + "%", "%" + req.body.cliente + "%", "%" + req.body.fecha_reporte + "%", "%" + req.body.fecha_asig + "%"])
                    .then(function (result) {
                    return res.json(result);
                });
            });
        });
    }
    intervalo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.then(function (p) {
                p.query('SELECT ordenes_servicio.idorden, estatus_orden.descripcion AS estatus, tipo_orden.descripcion AS tipo, usuario.nombre AS tecnico, ordenes_servicio.nombres_cliente, ordenes_servicio.fecha_reporte, ordenes_servicio.fecha_asig FROM ordenes_servicio INNER JOIN estatus_orden ON ordenes_servicio.idestatus_orden = estatus_orden.idestatus_orden INNER JOIN tipo_orden ON ordenes_servicio.idtipo_orden = tipo_orden.idtipo_orden INNER JOIN usuario ON ordenes_servicio.id = usuario.id WHERE ordenes_servicio.fecha_asig BETWEEN ? AND ? ORDER BY ordenes_servicio.fecha_asig ASC', [req.body.fecha_inicio, req.body.fecha_fin])
                    .then(function (result) {
                    return res.json(result);
                });
            });
        });
    }
}
exports.reportController = new reportsController();
