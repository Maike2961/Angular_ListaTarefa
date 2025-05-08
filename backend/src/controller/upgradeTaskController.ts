import { Tarefa } from "../models/tarefasModels";
import { HttpRequest, HttpResponse, IController } from "../repository/impl/interfaceBasic";
import { IUpgradeTaskRepository } from "../repository/impl/protocols";
import { IUpgradeTaskParams } from "../repository/upgradeTask/implTaskParamsUp";

export class upgradeTaskController implements IController{
    
    upgradeTaskRepository: IUpgradeTaskRepository;

    constructor(upgradeTaskRepository: IUpgradeTaskRepository){
        this.upgradeTaskRepository = upgradeTaskRepository;
    }
    
    async handle(httpRequest: HttpRequest<IUpgradeTaskParams>): Promise<HttpResponse<Tarefa | string>> {

        try{

            const id = httpRequest?.params?.id;

            console.log(id)

            if(!id){
                return {
                    statusCode: 400,
                    body: "Missing task id"
                }
            }

            const body = httpRequest?.body;

            if(!body){
                return {
                    statusCode: 400,
                    body: "Missing body or wrong field"
                }
            }

            console.log(body)

            const taskUpgrade = await this.upgradeTaskRepository.upgradeTask(id, body);

            return {
                statusCode: 200,
                body: taskUpgrade
            }

        
        }catch(err){
            return{
                statusCode: 500,
                body: "something went wrong"
            }
        }
    }

}