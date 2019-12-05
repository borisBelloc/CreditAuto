package fr.team.benks.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vehicle {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private char category;
	
	@Column
	private String brand;
	
	@Column
	private String model;

}
