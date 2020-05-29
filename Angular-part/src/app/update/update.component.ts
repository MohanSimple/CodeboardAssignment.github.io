import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service';
import { Observable } from 'rxjs';
import { Patient } from '../patient';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  deletePatient="";
  id:number;
  newPatientStaus: string;
  newPatientName: string;
  submitted: boolean= false;

  constructor(private patinetService : PatientServiceService) { }

  patients :Observable<Patient[]>;
  patient: Patient = new Patient();

  ngOnInit(): void {
  }

  onSubmitDlt(){
   this.id =parseInt(this.deletePatient);
    this.patinetService.deleteDetail(this.id).subscribe(data => this.getDetail()
    );
  }

  onSubmitAdd(){
    if(parseInt(this.newPatientStaus)>0){
      this.patient.isDeleted =this.newPatientStaus;
    }
    else{
      this.patient.isDeleted ="0";
    }
    this.patient.name=this.newPatientName;
    this.patinetService.createDetail(this.patient).subscribe(data => this.submitted=true)
  }

  getDetail(){
    this.patients = this.patinetService.getAllDetails();
  }

}
