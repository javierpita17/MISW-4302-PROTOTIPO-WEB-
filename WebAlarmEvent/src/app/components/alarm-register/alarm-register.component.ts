import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-register',
  templateUrl: './alarm-register.component.html',
  styleUrls: ['./alarm-register.component.scss']
})
export class AlarmRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public login():void{
    Swal.fire({
      icon: 'success',
      title: 'Usuario creado con éxito',
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
    }).then(res => {
      this.router.navigate(['']);
    })
  }

}
