import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-users-modal-adduser',
  templateUrl: './modal-adduser.component.html',
  styleUrls: ['./modal-adduser.component.css']
})
export class ModalAdduserComponent implements OnInit {

  @Input() modalRef: BsModalRef;

  form = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gender: new FormControl('M', Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(
    private servUsers: UsersService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.hide();
  }

  saveUser() {
    if (this.form.invalid) { return; }

    this.servUsers.addUser(this.form.getRawValue()).subscribe(response => {
      if (response.status === true) {
        Swal.fire('Cool!', 'User added successfully', 'success');
        this.form.reset();
      } else {
        Swal.fire('Oops..', response.message, 'error');
      }
    });
  }

}
