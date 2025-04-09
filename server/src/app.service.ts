import { Injectable } from '@nestjs/common';
import { Task } from './database/entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class AppService {


  constructor( @InjectRepository(Task)
  private readonly taskRepository : Repository<Task>,) {}


  login(user) {
    console.log(user)
    if(!user.email || !user.password ){
      return {success : false , message : "Fill both email and pasword"}
    }

    if(user.email == 'akshay@gmail.com'){
         if(user.password == '1234'){
          return {success : true , message : "LOgged in successfully"}
         }else{
          return {success : false , message : "Incorrect password"}
         }
    }else{
      return {success : false , message : "Incoreect email"}
    } 
  }


  async newTask(data) {
     try {
         console.log("enetered",data)
          const newTask = this.taskRepository.create({email:'akshay@gmail.com', task : data.task })
          return await this.taskRepository.save(newTask)    

     } catch (error) {
      console.log(error)
     }
  }



  async updateTask(taskDto:UpdateTaskDto){
    try {
      console.log(taskDto) 

      const task =  await this.taskRepository.findOneBy({id:taskDto.id})


    if (!task) {
      throw new Error(`Task with ID ${taskDto.id} not found`);
    }

    task.task = taskDto.task

    return await this.taskRepository.save(task);

    } catch (error) {
      console.log(error)
    }
  }


  async deleteTask (deleteTask) {
    try {
       console.log("hahha",deleteTask.id)


       const task = await this.taskRepository.findOneBy({ id: deleteTask.id });

       if (!task) {
         return { message: "Task not found" };
       }
   
       return await this.taskRepository.remove(task);

    } catch (error) {
      console.log(error)
    }
  }


}
