import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alarm-login',
  templateUrl: './alarm-login.component.html',
  styleUrls: ['./alarm-login.component.scss']
})
export class AlarmLoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }


}
