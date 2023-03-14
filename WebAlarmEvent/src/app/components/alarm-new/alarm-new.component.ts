import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-new',
  templateUrl: './alarm-new.component.html',
  styleUrls: ['./alarm-new.component.scss']
})
export class AlarmNewComponent implements OnInit {

  listDias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public crear():void{
    Swal.fire({
      icon: 'success',
      title: 'Alarma creada con éxito',
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
    }).then(res => {
      this.router.navigate(['/dashboard']);
    })
  }

}
