import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  patients : Observable<Patient[]>
  constructor(private patientService : PatientServiceService) { }

  ngOnInit(): void {
    this.patientDetails();
  }

  patientDetails(){
    this.patientService.getAllDetails().subscribe(response => this.patients = response);
    console.log(this.patients);
  }s

}
