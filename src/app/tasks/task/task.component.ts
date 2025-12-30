import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { UiComponent } from "../../shared/ui/ui.component";
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UiComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input({ required: true }) selectedTask!: Task;
  private taskService= inject(TaskService)

  onCompleteTask() {
    this.taskService.removeTask(this.selectedTask.id);
  }
}
