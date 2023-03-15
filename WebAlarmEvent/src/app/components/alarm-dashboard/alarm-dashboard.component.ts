import { Component, OnInit } from '@angular/core';
import  Swal  from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm-dashboard',
  templateUrl: './alarm-dashboard.component.html',
  styleUrls: ['./alarm-dashboard.component.scss']
})
export class AlarmDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eliminar():void{
    Swal.fire({
      title: '¿Estás seguro de eliminar la alarma?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminada!',
          'La alarma ha sido eliminada.',
          'success'
        )
      }
    })
  }

}
