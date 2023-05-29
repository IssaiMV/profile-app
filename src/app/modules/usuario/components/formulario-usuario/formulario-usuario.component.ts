import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {
  userForm: FormGroup;

  @Input() user: IUser | undefined;
  @Output() onFormSubmit = new EventEmitter<IUser>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      contactList: this.fb.array([this.createContactoFormGroup()])
    });
  }
  ngOnInit(): void {
    if (this.user) {
      for (let i = 0; i < this.user.contactList.length - 1; i++) {
        this.addFields()
      }
      this.userForm.patchValue(this.user)
    }
  }


  get name(): any | null {
    return this.userForm.get('name')
  }

  get birthdate(): any | null {
    return this.userForm.get('birthdate')
  }

  get contactList(): any | null {
    return this.userForm.get('contactList')
  }

  dateFilter(date: Date | null): boolean {
    const current = new Date();
    current.setHours(0, 0, 0, 0);
    return date === null || date <= current;
  };

  createContactoFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      numberPhone: new FormControl('', Validators.required)
    });
  }

  addFields() {
    const control = this.contactList as FormArray;
    control.push(this.createContactoFormGroup());
  }

  removeFields(index: number) {
    const control = this.contactList as FormArray;
    if (control.length > 1) {
      control.removeAt(index)
    } else {
      control.reset()
    }
  }

  submit() {
    this.onFormSubmit.emit(this.userForm.value);
  }
}
