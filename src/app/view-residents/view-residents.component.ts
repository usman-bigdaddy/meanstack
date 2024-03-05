import { Component } from '@angular/core';
import { ResidentService } from '../resident.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-view-residents',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './view-residents.component.html',
  styleUrl: './view-residents.component.css'
})
export class ViewResidentsComponent {
  residents:any;
  constructor(private _service:ResidentService) {
    this._service.getResident().subscribe((data:any)=>{
        this.residents = data.data;
    })
  }
  delete(id:any){
    console.log(id)
  }
}
