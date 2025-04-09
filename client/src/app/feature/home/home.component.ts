import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../constraints/endpoint';


interface Task {
  task: string;
  id: number;
}


@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  newTask : string = ""


   data : Task = { task : '',id : 0}

   tasks : Task[] = []


  constructor(private http : HttpClient) {}
  
  addTask() {
      try {
          console.log("eneterd")
          console.log(this.newTask)
          this.http.post<Task>(API_ENDPOINTS.newTask,{task : this.newTask}).subscribe({next : (response) =>{
            console.log(response)
            if(response){
              this.tasks.push({
                task: response.task,
                id: response.id
              });
            }
          }})
      } catch (error) {
         console.log(error , "error got ")
      }
  }


  async updateTask(index:number,task:string) {
     try {
      console.log(index,"updte")
      this.http.put(API_ENDPOINTS.updateTask,{id:index,task}).subscribe({next : (response) => {
        console.log(response)
        if(response){
           const taskIndex  = this.tasks.findIndex(t => t.id == index)

           if(taskIndex !== -1){
            this.tasks[taskIndex].task = task
           }
        }
      }})
     } catch (error) {
        console.log(error)
     }
  }


  async deleteTask(index:number) {
      try {
        console.log(index,"delete")
        this.http.delete<Task>(API_ENDPOINTS.deleteTask,{
          body: { id: index }
        }).subscribe({next : (response) =>{
          console.log(response)
          if(response){
              this.tasks = this.tasks.filter(task => task.id !== index)  
          }
        },      error: (err) => {
          console.error("Error deleting task", err);
        }})
      } catch (error) {
        console.log(error)
      }
  }


}
