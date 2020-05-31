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

  patients =[]
  constructor(private patientService : PatientServiceService) { }

  ngOnInit(): void {
    this.patientDetails();
  }
  i:number;
  patientDetails(){
    this.patientService.getAllDetails().subscribe(data => {
    for(let j=0; j<data.length ;j++){
      if(this.check(data[j])===true){
        this.patients.push(data[j]);
    }
  }
  });
  }
  check(array){
    return array.isDeleted==="0";
  }
}