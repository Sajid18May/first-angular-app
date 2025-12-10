import { Component, input, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';

const userIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
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
