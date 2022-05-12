import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-info',
  templateUrl: './error-info.component.html',
  styleUrls: ['./error-info.component.scss'],
})
export class ErrorInfoComponent implements OnInit {
  @Input() message!: string;

  constructor() {}

  ngOnInit(): void {}
}
