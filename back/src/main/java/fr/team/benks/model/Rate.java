package fr.team.benks.model;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Rate {

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private BigDecimal value;
	
	@Column
	private CategorieVehicle categorie;
	
	@Column
	private int valMin;
	
	@Column
	private int valMax;
	
	@Column
	private int duree;
	
}
