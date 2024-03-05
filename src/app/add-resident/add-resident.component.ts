import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResidentService } from '../resident.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-resident',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-resident.component.html',
  styleUrl: './add-resident.component.css'
})
export class AddResidentComponent {
  formData = {
    firstname: "",
    lastname: "",
    gender: "",
    dob: "",
    housenumber: "",
    nin: "",
    occupation: "",
    phone: {
      home: "",
      mobile: "",
    },
    email: "",
    role: "user",
    password: "1234",
  };
  //addResidentForm: FormGroup;
  constructor(private fb: FormBuilder, routes:Router,private _service:ResidentService) {
    // this.addResidentForm = this.fb.group({
    //   firstname: ['', Validators.required],
    //   lastname: ['', Validators.required],
    //   email: ['', Validators.required],
    //   dob: ['', Validators.required],
    //   gender: ['', Validators.required],
    //   occupation: ['', Validators.required],
    //   housenumber: ['', Validators.required],
    //   phone: this.fb.group({
    //     home: ['', Validators.required],
    //     mobile: ['', Validators.required]
    //   }),
    //   nin: ['', Validators.required]
    // });
  }

  onSubmit() {
    // if (this.addResidentForm.valid) {
    //   console.log(this.addResidentForm.firstname.value);
    //   return;
    //   this._service.addResident(this.addResidentForm.value).subscribe((data:any) => {
    //     console.log(data)
    //     // Handle successful submission
    //   }, error => {
    //     console.error('Error:', error);
    //     // Handle error
    //   });
    // }
    if(true){
        this._service.addResident(this.formData).subscribe((data:any) => {
        console.log(data)
        // Handle successful submission
      }, error => {
        console.error('Error:', error);
        // Handle error
      });
    }
    else{
      console.log("not valid")
    }
  }
}
