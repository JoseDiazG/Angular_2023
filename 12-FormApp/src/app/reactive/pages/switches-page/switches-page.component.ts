import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html'
})
export class SwitchesPageComponent {

  constructor( private fb: FormBuilder){}

  public myForm: FormGroup = this.fb.group({
    gender:['M', Validators.required],
    wanNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  })

  //creacion del objeto person
  public person = {
    gender: 'F',
    wantNotifications: false,
  }

  ngOnInit(): void{
    this.myForm.reset(this.person)
  }

  isValidField(field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSave(){

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);

  }

}
