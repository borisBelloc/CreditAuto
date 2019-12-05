package main.java.models;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Client {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String adress;
	
	@Column
	private int numClient;
	
	@Column
	private char gender;
	
	@Column
	private String name;
	
	@Column
	private String firstname;
	
	@Column
	private LocalDate birthdate;

}
