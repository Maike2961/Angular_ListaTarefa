import express, { Router } from 'express'
import { CreateTaskController } from '../controller/createTaskController'
import { MongoCreateTaskRepository } from '../repository/createTask/createTask'
import {MongoListAllTasksRepository } from '../repository/getTasks/listAllTasks'
import { listTaskController } from '../controller/listTaskController'
import { mongoDeleteTaskRepository } from '../repository/deleteTask/deleteTask'
import { deleteTaskController } from '../controller/deleteTaskController'
import { mongoUpgradeTaskRepository } from '../repository/upgradeTask/upgradeTask'
import { upgradeTaskController } from '../controller/upgradeTaskController'


export const taskRouters = () =>{

    const router: Router = express.Router()

    const createTaskReposity = new MongoCreateTaskRepository();
    const createTaskController = new CreateTaskController(createTaskReposity)

    router.post("/", async (req, res) => {
        const {statusCode, body} = await createTaskController.handle({body: req.body})
        res.status(statusCode).send(body)
    });

    const listTaskRepository = new MongoListAllTasksRepository();
    const ListTaskController = new listTaskController(listTaskRepository)

    router.get("/", async (req, res) => {
        const {statusCode, body} = await ListTaskController.handle()
        res.status(statusCode).send(body)
    });


    const deleteTaskRepository = new mongoDeleteTaskRepository();
    const DeleteTaskControler = new deleteTaskController(deleteTaskRepository);

    router.delete("/:id", async (req, res) => {
        const {statusCode, body} = await DeleteTaskControler.handle({
            params: req.params,
        });
        res.status(statusCode).send(body)
    });

    const upgradeTaskRepository = new mongoUpgradeTaskRepository();
    const UpgradeTaskController = new upgradeTaskController(upgradeTaskRepository);

    router.patch("/:id", async (req, res)=>{
        const {statusCode, body} = await UpgradeTaskController.handle({
            params: req.params,
            body: req.body
        });
        res.status(statusCode).json(body);
    });
    return router
}




