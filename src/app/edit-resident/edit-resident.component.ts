import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-resident',
  standalone: true,
  imports: [],
  templateUrl: './edit-resident.component.html',
  styleUrl: './edit-resident.component.css'
})
export class EditResidentComponent implements OnInit {
   id:any;
    constructor(private url:ActivatedRoute){
       
    }
    ngOnInit(): void {
      //this.id= this.url.snapshot.paramMap.get('id');
      this.id= this.url.snapshot.params["id"];
      console.log(this.id)
    }
}
