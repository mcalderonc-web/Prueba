import { Component } from '@angular/core';
import { tarea } from '../../Modelos/tarea';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  listadetareas : tarea[]=[];
  nombretarea:string='';

  agregartarea(){
    const nuevatarea:tarea = {
      nombre : this.nombretarea,
      estado : false
    }
  this.listadetareas.push(nuevatarea);
  this.nombretarea = '';
  }

  eliminartarea(i:number){
    this.listadetareas.splice(i,1);
  }  

  actualizartarea(tareaaactualizar : tarea, i:number){
    this.listadetareas[i].estado  = !tareaaactualizar.estado;
  }
}
