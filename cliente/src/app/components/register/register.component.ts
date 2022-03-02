import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup 
  emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  constructor(private rf: FormBuilder) { 
    this.registerForm = this.rf.group({
      user: ['', [Validators.required, Validators.pattern(this.emailValidation)]],
      password: ['', Validators.required]
    })
  }  

  ngOnInit(): void {
  }


  userAccess(){
    console.log(this.registerForm)
  }
}
