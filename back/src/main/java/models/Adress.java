package main.java.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Adress {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String adress;
	
	@Column
	private int zipCode;
	
	@Column
	private String city;

}
