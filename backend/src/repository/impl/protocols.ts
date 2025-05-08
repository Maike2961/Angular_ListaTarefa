import { Tarefa } from "../../models/tarefasModels";
import { ICreateTaskParams } from "../createTask/implTaskParams";
import { IDeleteTaskParams } from "../deleteTask/implTaskParamDel";
import { IUpgradeTaskParams } from "../upgradeTask/implTaskParamsUp";

export interface ICreateTaskRepository{
    createTask(taskparams: ICreateTaskParams): Promise<Tarefa>
}

export interface IGetAllTaskRepository{
    listAllTasks(): Promise<Tarefa[]>
}

export interface IDeleteTaskRepository{
    deleteTask(taskparams: IDeleteTaskParams): Promise<Tarefa>
}

export interface IUpgradeTaskRepository{
    upgradeTask(id: string, taskparams: IUpgradeTaskParams): Promise<Tarefa>
}
