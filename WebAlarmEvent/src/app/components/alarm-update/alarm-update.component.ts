import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-update',
  templateUrl: './alarm-update.component.html',
  styleUrls: ['./alarm-update.component.scss']
})
export class AlarmUpdateComponent implements OnInit {

  listDias: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public actualizar():void{
    Swal.fire({
      icon: 'success',
      title: 'Alarma actualizada con éxito',
      showCloseButton: true,
      confirmButtonText: 'Aceptar',
    }).then(res => {
      this.router.navigate(['/dashboard']);
    })
  }

}
