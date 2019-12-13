package fr.team.benks.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;

@Entity
@SequenceGenerator(name = "seq", initialValue = 1000, allocationSize = 500)
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

	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	@Column (unique = true)
	private long numClient;

	@Enumerated(EnumType.STRING)

	@Column
	private Gender gender;

	@Column
	private String lastName;

	@Column
	private String firstName;

	@DateTimeFormat(iso = ISO.DATE)
	@Column
	private LocalDate birthdate;

	@Column
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@JsonIgnore
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "client")
	private List<Contract> contracts;

	public Client() {
		super();
//		StringBuilder numClientSb = new StringBuilder();
//		if (this.gender.toString().equalsIgnoreCase("F")) {
//			numClientSb.append("2");
//		} else {
//			numClientSb.append("1");
//		}
//		numClientSb.append(birthdate.format(DateTimeFormatter.BASIC_ISO_DATE)).append(LocalDate.now().format(DateTimeFormatter.BASIC_ISO_DATE));
//		this.numClient = Long.parseLong(numClientSb.toString());
//		System.out.println(numClient);
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

	public long getNumClient() {
		return numClient;
	}

	public void setNumClient() {
		StringBuilder numClientSb = new StringBuilder();
		if (this.gender.toString().equalsIgnoreCase("F")) {
			numClientSb.append("2");
		} else {
			numClientSb.append("1");
		}
		numClientSb.append(birthdate.format(DateTimeFormatter.ofPattern("yyMM")))
				.append(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHHmmss")));
				
		this.numClient = Long.parseLong(numClientSb.toString());
		System.out.println(numClient);
	}

	public void setNumClient(long numClient) {
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
		return contracts;
	}

	public void setContract(List<Contract> contract) {
		this.contracts = contract;
	}

	public void addContract(Contract contract) {
		this.contracts.add(contract);
	}

	public void setId(long id) {
		this.id = id;
	}

}
