import { Component, input, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { type User } from './user.model';
import { UiComponent } from "../shared/ui/ui.component";
const userIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() userSelect = new EventEmitter();
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onClickUser() {
    alert('User clicked!');
  }

  onSelectUser() {
    this.userSelect.emit(this.user.id);
  }
}
