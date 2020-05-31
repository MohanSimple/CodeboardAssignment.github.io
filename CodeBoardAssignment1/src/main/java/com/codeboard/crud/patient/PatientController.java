package com.codeboard.crud.patient;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientRepository patientRepository;

	@GetMapping("/patients")
	public ResponseEntity<List<Patient>> getAllDetails(){
		List<Patient> list = new ArrayList<>();
		int i=0;
		try {
		patientRepository.findAll().forEach(list::add);
		if(list.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR); 
		}
	}
	
	@GetMapping("/patients/{id}")
	public ResponseEntity<Patient> getPatientDetail(@PathVariable("id") int id){
		Optional<Patient> patientdata= patientRepository.findById(id);
		if(patientdata.isPresent()) {
			return new ResponseEntity<>(patientdata.get(), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(value="/patients")
	public ResponseEntity<Patient> addPatient(@RequestBody Patient patient){
		try {
			Patient _patient= patientRepository.save(new Patient( patient.getName(), patient.getIsDeleted()));
			return new ResponseEntity<>(_patient, HttpStatus.CREATED);
		}

		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);			
		}
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<HttpStatus> deletePatient(@PathVariable("id") int id){
		try {
			patientRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	@PutMapping("/patients/{id}")
	public ResponseEntity<Patient> updatePatient(@PathVariable("id") int id, @RequestBody Patient patient){
		Optional<Patient> patientdata= patientRepository.findById(id);
		if(patientdata.isPresent()) {
			Patient _patient = patientdata.get();
			_patient.setName(patient.getName());
			_patient.setIsDeleted(patient.getIsDeleted());
			return new ResponseEntity<>(patientRepository.save(_patient),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
	}
}
