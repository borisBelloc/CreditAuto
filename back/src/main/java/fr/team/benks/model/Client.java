package fr.team.benks.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Client {
	
	@Id
	@GeneratedValue
	private long id;
	
	@OneToOne
	private Address address;
	
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
	
	@OneToMany(fetch = FetchType.EAGER,mappedBy = "client")
	private List<LoanContract> loanContrat;
	
}
