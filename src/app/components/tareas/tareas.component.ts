import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  public listaTareas: Tarea[] = [];

  public nombreTarea: string = '';

  public registrarTarea():void {

    const tarea: Tarea = {
      id: Math.random().toString(36).slice(2),
      nombre: this.nombreTarea,
      estado: false,
    };

    this.listaTareas.push( tarea );
    this.nombreTarea = '';

  }
  public onEstadoSeleccionado( value: any ):void {

    const miTarea = value.options[0].value;
   //Cambiar estado de la tarea
    this.listaTareas.map((tarea) => {
      if( tarea.id === miTarea.id ) {
          tarea.estado = !tarea.estado
      };
    })

    //Eliminar tarea a los segundos automaticamente
    setInterval(() => {
      this.listaTareas = this.listaTareas.filter((tarea) => tarea.estado === false);
    }, 5000)
  }

  public eliminarTarea( id: string ):void {
    console.log(id);
  }



}
