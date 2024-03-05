import { Component, OnInit } from '@angular/core';
import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  dashboard: any;
  constructor(private _service: ResidentService) {}
  ngOnInit(): void {
    this._service.getDashbaord().subscribe((data: any) => {
      this.dashboard = data;
    });
  }
}
