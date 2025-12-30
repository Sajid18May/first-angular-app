import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  task = input.required<string>();
  userId = input.required<string>();
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get userTasks() {
    return this.taskService.getUserTasks(this.userId());
  }

  addNewTask() {
    this.isAddingTask = true;
  }
  
  onCancelAddTask() {
    this.isAddingTask = false;
  }

}
