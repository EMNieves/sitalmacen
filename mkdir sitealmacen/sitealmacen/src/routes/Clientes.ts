import { Request, Response, Application, Router } from "express";


import { ClienteController } from '../controllers/cliente.controller';

export class ClienteRoutes {
    public clienteController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
      
        app.route("/clientes").get(this.clienteController.getAllCliente)
    }
}
