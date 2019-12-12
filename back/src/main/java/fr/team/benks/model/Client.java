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

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;

@Entity
public class Client implements IdEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6278141315358559997L;

	@Id
	@GeneratedValue
	private long id;

	@OneToOne
	private Address address;

	@Column
	private int numClient;

	@Column
	private Gender gender;

	@Column
	private String lastName;

	@Column
	private String firstName;

	@DateTimeFormat(iso = ISO.DATE)
	@Column
	private LocalDate birthdate;

	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "client")
	private List<Contract> contract;

		
	public Client() {
		super();
	}

//	public Client(int numClient, Gender gender, String lastName, String firstname, LocalDate birthdate) {
//		super();
//		this.numClient = numClient;
//		this.gender = gender;
//		this.lastName = lastName;
//		this.firstName = firstname;
//		this.birthdate = birthdate;
//	}
//
//	public Client(Address address, int numClient, Gender gender, String lastName, String firstname,
//			LocalDate birthdate) {
//		super();
//		this.address = address;
//		this.numClient = numClient;
//		this.gender = gender;
//		this.lastName = lastName;
//		this.firstName = firstname;
//		this.birthdate = birthdate;
//	}

	@Override
	public Long getId() {
		return id;
	}

	@Override
	public void setId(Long id) {
		this.id = id;

	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public int getNumClient() {
		return numClient;
	}

	public void setNumClient(int numClient) {
		this.numClient = numClient;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstname) {
		this.firstName = firstname;
	}

	public LocalDate getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(LocalDate birthdate) {
		this.birthdate = birthdate;
	}

	@JsonIgnore
	public List<Contract> getContract() {
		return contract;
	}

	public void setContract(List<Contract> contract) {
		this.contract = contract;
	}

	public void setId(long id) {
		this.id = id;
	}

}
