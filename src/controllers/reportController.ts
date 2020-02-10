import {Request, Response} from 'express';

import pool from '../database'

class reportsController{

    public async list(req: Request, res: Response): Promise<void>{
        console.log(req.body)
        await pool.then(function (p) {
            p.query('SELECT ordenes_servicio.idorden, estatus_orden.descripcion AS estatus, tipo_orden.descripcion AS tipo, usuario.nombre AS tecnico, ordenes_servicio.nombres_cliente, ordenes_servicio.fecha_reporte, ordenes_servicio.fecha_asig FROM ordenes_servicio INNER JOIN estatus_orden ON ordenes_servicio.idestatus_orden = estatus_orden.idestatus_orden INNER JOIN tipo_orden ON ordenes_servicio.idtipo_orden = tipo_orden.idtipo_orden INNER JOIN usuario ON ordenes_servicio.id = usuario.id WHERE tipo_orden.descripcion LIKE ? AND usuario.nombre LIKE ? AND ordenes_servicio.nombres_cliente LIKE ? AND ordenes_servicio.fecha_reporte LIKE ? AND ordenes_servicio.fecha_asig LIKE ? ORDER BY ordenes_servicio.idorden DESC', [req.body.tipo, req.body.usuario, req.body.cliente, req.body.fecha_reporte, req.body.fecha_asig])
                .then(function (result) {
                    return res.json(result);
                });
        });
    }

}

export const reportController = new reportsController();