import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  @Input() titulo: string;
  @Output() callback = new EventEmitter();
  labelTitulo: string;

  constructor() { }

  ngOnInit() {
    this.labelTitulo = this.titulo;
  }

}
