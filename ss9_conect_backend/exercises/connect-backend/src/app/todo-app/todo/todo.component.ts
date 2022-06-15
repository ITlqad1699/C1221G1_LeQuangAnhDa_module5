import {Component, OnInit} from '@angular/core';
import {Todo} from './model/todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from './todo.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  contentForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    content: new FormControl(''),
    complete: new FormControl(true),
  });

  constructor(private todoService: TodoService,
              private route: Router) {
  }

  ngOnInit() {
    this.getTodo();
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const todo = this.contentForm.value;
    this.todoService.saveTodo(todo).subscribe(() => {
      console.log('save complete');
      this.contentForm.reset();
      this.ngOnInit();
    });
  }

  getTodo() {
    this.todoService.getAll().subscribe(todos => {
        this.todos = todos;
        console.log(this.todos);
      },
      e => {
        console.log(e);
      });
  }

  deleteTodo(id: number) {
  }
}
