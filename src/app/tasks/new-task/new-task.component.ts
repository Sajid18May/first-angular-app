import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() taskCreated = new EventEmitter<boolean>();
  title: string = '';
  summary: string = '';
  due_date: string = '';

  private taskService= inject(TaskService)
  closeAddTask() {
    this.taskCreated.emit(false);
  }
  addNewTask() {
    this.taskService.addTask({
    title: this.title,
    summary: this.summary,
    dueDate: this.due_date
    }, this.userId);
    this.taskCreated.emit(false);
  }

}
