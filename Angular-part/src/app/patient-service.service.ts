import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private url: string ="http://localhost:8080/api/patients";

  constructor(private httpClient :HttpClient) { }

getAllDetails(): Observable<any>{
  return this.httpClient.get<Patient>(this.url);
}

getPatientDetails(id:number):Observable<any>{
  return this.httpClient.get(`${this.url}/${id}`);
}

deleteDetail(id:number):Observable<any>{
  return this.httpClient.delete(`${this.url}/${id}`);
}

updateDetail(id:number , patient: any): Observable<any>{
return this.httpClient.put(`${this.url}/${id}`, patient)
}

createDetail(patient:any): Observable<any>{
  return this.httpClient.post(this.url, patient);
}

}
