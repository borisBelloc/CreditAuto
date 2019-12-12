package fr.team.benks.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Address implements IdEntity{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8424697508890000493L;

	@Id
	@GeneratedValue
	private long id;

	@Column
	private String address;
	
	@Column
	private int zipCode;
	
	@Column
	private String city;

	
	public Address() {
		super();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String adress) {
		this.address = adress;
	}

	public int getZipCode() {
		return zipCode;
	}

	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	

}
