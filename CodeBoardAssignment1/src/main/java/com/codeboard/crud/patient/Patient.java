package com.codeboard.crud.patient;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="patient_details")
public class Patient {

	@Id
	@Column(name="Patient_ID")
	@GeneratedValue(strategy= GenerationType.AUTO )
	private int id;
	
	@Column(name="Patient_Name")
	private String name;
	
	@Column(name="Is_Deleted")
	private String isDeleted;
	
	public int getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setIsDeleted(String isDeleted) {
		this.isDeleted = isDeleted;
	}
	public String getIsDeleted() {
		return isDeleted;
	}
	public Patient( String name, String isDeleted) {
		super();
		this.name = name;
		this.isDeleted = isDeleted;
	}
	
	public Patient(){}
	
	@Override
	public String toString() {
		return "Patient [id=" + id + ", naame=" + name + ", isDeleted=" + isDeleted + "]";
	}
	
}
