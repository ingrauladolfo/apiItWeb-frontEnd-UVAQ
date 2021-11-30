import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { LoginService } from '../../_services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLoading = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required)
  });
  btnCss: any;
  imageUrl: string;

  constructor(
    private servLogin: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    if (this.loginForm.invalid) { return; }

    this.isLoading = true;
    this.servLogin.login(this.loginForm.getRawValue()).subscribe(response => {
      this.isLoading = false;
      if (response.status === true) {
        localStorage.setItem('sessionkey', response.data.session_key);
        this.router.navigateByUrl(`/system`);
      } else {
        Swal.fire('Error', response.message, 'error');
      }
    });

  }

}
