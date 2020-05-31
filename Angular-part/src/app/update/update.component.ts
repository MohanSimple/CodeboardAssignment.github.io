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
  submitted: boolean= false;
  newPatientName: string;
  public id: number=0;
  updatePatient: string;
  deleted: boolean = false;;

  constructor(private patinetService : PatientServiceService) { }
  patient: Patient = new Patient();
  updatedPatient : Patient = new Patient();
  ngOnInit(): void {
  }

  onSubmitAdd(){
    this.patient.name=this.newPatientName;
    this.patient.isDeleted="0";
    this.patinetService.createDetail(this.patient).subscribe(data => this.submitted=true)
  }

  onSubmitDlt(){
    this.id=parseInt(this.updatePatient);
    this.patinetService.getPatientDetails(this.id).subscribe(data =>{
      this.updatedPatient=data;
      this.updatedPatient.isDeleted="1";
      console.log(this.updatedPatient);
      this.patinetService.updateDetail(this.updatedPatient.id, this.updatedPatient).subscribe(data => this.deleted=true);
    } );
  }

}
