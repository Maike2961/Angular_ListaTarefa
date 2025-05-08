import { Tarefa } from "../models/tarefasModels";
import { HttpRequest, HttpResponse, IController } from "../repository/impl/interfaceBasic";
import { IDeleteTaskRepository } from "../repository/impl/protocols";

export class deleteTaskController implements IController{
    
    constructor(private readonly deleteRepository: IDeleteTaskRepository){}
    
    async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<Tarefa | string>> {
        try{

            const id = httpRequest?.params?.id;

            if(!id){
                return {
                    statusCode: 400,
                    body: "Missing task id"
                }
            }

            const task = await this.deleteRepository.deleteTask({id: id})

            return {
                statusCode: 200,
                body: task
            }
            
        }catch{
            return {
                statusCode: 500,
                body: "Erro Server"
            }
        }
    }

}