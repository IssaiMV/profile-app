import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      birthdate: ['', Validators.required],
      listaContacto: this.fb.array([this.initControlContacto()])
    });
  }

  get listaContacto(): any | null {
    return this.userForm.get('listaContacto')
  }

  initControlContacto() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      numberPhone: new FormControl('', Validators.required)
    });
  }

  addFields() {
    const control = this.listaContacto as FormArray;
    control.push(this.initControlContacto());
  }

  removeFields(index: number) {
    const control = this.listaContacto as FormArray;
    if (control.length > 1) {
      control.removeAt(index)
    } else {
      control.reset()
    }
  }

  submit() {
    console.log(this.userForm.value);
  }

}
