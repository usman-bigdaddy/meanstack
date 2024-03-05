import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-invites',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './view-invites.component.html',
  styleUrl: './view-invites.component.css',
})
export class ViewInvitesComponent implements OnInit {
  dropdownData: any;
  selectedItem: any;
  residentsInvites: any;
  constructor(private _service: ResidentService) {}
  ngOnInit(): void {
    this._service.getResident().subscribe((data: any) => {
      this.dropdownData = data.data;
    });
  }
  onSelectionChange() {
    this._service
      .getResidentInvites(`${this.selectedItem}`)
      .subscribe((data: any) => {
        this.residentsInvites = data.data;
        console.log(this.residentsInvites);
      });
    // // event.target.value contains the value of the selected option
    // const selectedValue = event.target.value;
    // console.log('Selected value:', selectedValue);
    // // You can do further processing with the selected value here
  }
}
