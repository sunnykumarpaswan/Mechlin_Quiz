import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AdminService } from '../admin.service';
import {formErrorMessages, FormErrorMessages} from '../form-errors-constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public formValid: boolean;
  public loginForm: FormGroup;
  public formErrorMessages: FormErrorMessages;
  public service: AdminService
  

  constructor(public readonly formBuilder: FormBuilder,
    private router: Router,
    ) {
  }
  posts=[];

  ngOnInit() {
    this.formErrorMessages = formErrorMessages;

    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.service.adminlogin().subscribe(
    //   response =>{ console.log(response)
    //   this.posts=response.records;
    // }
    // )
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (!this.loginForm.valid) {
      this.formValid = false;
      return false;
    }
    this.formValid = true;
    console.log(this.loginForm.value);
  }
  login(){
    console.log(this.posts)
    if (this.loginForm.get("email").value == "import { Router } from '@angular/router';" && this.loginForm.get("password").value == "123456") {
      console.log("abc")
    // this.router.navigate(['second'])
  }
}
}
