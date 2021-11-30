import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { UsersService } from '../../_services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usersList: any;

  @ViewChild('templateModalUser', null) tmpModalUser: TemplateRef<any>;
  modalRef: BsModalRef;

  constructor(
    private servUsers: UsersService,
    private modal: BsModalService
  ) { }

  ngOnInit() {
    this.servUsers.getUsers().subscribe(response => {
      this.usersList = this.parseData(response.data);
    });
  }

  showUserModal() {
    const modalOptions: ModalOptions = {
      ignoreBackdropClick: true,
      keyboard: true
    };

    this.modalRef = this.modal.show(this.tmpModalUser, modalOptions);
  }

  private parseData(data: any) {
    const parsedArray = [];

    delete(data[0]);

    for (const index in data) {
      if (data[index]) {
        parsedArray.push(data[index]);
      }
    }

    return parsedArray;
  }

}
