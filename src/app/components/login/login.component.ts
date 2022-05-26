import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // name: string = '';
  // faculty: string = '';
  // age: number = 18;
  // students: { name: string; faculty: string; age: number }[] = [];
  // checkInput = false;
  submition:string="";
  ourValidaion;

  constructor() {
    this.ourValidaion = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(4)]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngOnInit(): void {}
  get checkUsernameValidation(){
    return this.ourValidaion.controls['username'].valid
  }
  get checkAgeValidation(){
    return this.ourValidaion.controls['age'].valid
  }
  get checkEmailValidation(){
    return this.ourValidaion.controls['email'].valid
  }
  get checkPasswordValidation(){
    return this.ourValidaion.controls['password'].valid
  }
  SubmitLogin(){
    if ((this.checkUsernameValidation && 
      this.checkAgeValidation && this.checkEmailValidation 
      && this.checkPasswordValidation)) {
        this.submition="Sumition Done"
    }else{alert("Invalid Information ")}
  }
}
