import { HttpRequest, HttpResponse, IController } from "../repository/impl/interfaceBasic";
import { Tarefa } from "../models/tarefasModels";
import { ICreateTaskRepository } from "../repository/impl/protocols";

export class CreateTaskController implements IController{

    createTaskRepository: ICreateTaskRepository;

    constructor(createTaskRepository: ICreateTaskRepository){
        this.createTaskRepository = createTaskRepository;
    }
    
    async handle(httpRequest: HttpRequest<Tarefa>): Promise<HttpResponse<Tarefa | string>> {
        try{
            console.log(httpRequest.body)
            const taskCreated = await this.createTaskRepository.createTask(httpRequest.body!);
            return {
                statusCode: 201,
                body: taskCreated
            }
        }catch(err){
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    }

}