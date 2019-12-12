package fr.team.benks.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Vehicle implements IdEntity{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6222968970154783614L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	@Enumerated(EnumType.STRING)
	private CategorieVehicle category;
	
	@Column
	private String brand;
	
	@Column
	private String model;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CategorieVehicle getCategory() {
		return category;
	}

	public void setCategory(CategorieVehicle category) {
		this.category = category;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}
	
}
