import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './dto/user.login.dto';
import { NewTaskDto } from './dto/new.task.dto';
import { DeleteTaskDto } from './dto/delete.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() loginDto : LoginDto ) {
    console.log("enetered")
    return this.appService.login(loginDto);
  }

  @Post('newTask')
  newTask(@Body() newTaskDto : NewTaskDto ){
    return this.appService.newTask(newTaskDto)
  }


  @Put('updateTask')
  updateTask(@Body() updateTaskDto : UpdateTaskDto ){
     console.log("entered",updateTaskDto)
     return this.appService.updateTask(updateTaskDto)
  }

  @Delete('deleteTask')
  deleteTask(@Body() deleteTaskDto : DeleteTaskDto ){
     console.log("entered",deleteTaskDto)
     return this.appService.deleteTask(deleteTaskDto)
  }


}
