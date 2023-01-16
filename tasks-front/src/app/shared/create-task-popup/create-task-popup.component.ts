import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-create-task-popup',
  templateUrl: './create-task-popup.component.html',
  styleUrls: ['./create-task-popup.component.scss'],
})
export class CreateTaskPopupComponent {
  public today = new Date().toISOString().substring(0, 10);
  public formGroup: any;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      description: '',
      date: '',
    });
  }

  @Output()
  public sendTaskForm = new EventEmitter();

  createTask(form: NgForm) {
    this.sendTaskForm.emit(form);
  }
}
