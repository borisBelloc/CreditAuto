package fr.team.benks.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Rate implements IdEntity{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6625790952359549394L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private BigDecimal rateValue;
	
	@Column
	@Enumerated(EnumType.STRING)
	private CategorieVehicle categorie;
	
	@Column
	private int valMin;
	
	@Column
	private int valMax;
	
	@Column
	private int dureeMin;
	
	@Column
	private int dureeMax;
	
	@Column
	private String rateName;
	
	public Rate() {
		super();
	}

//	public Rate(BigDecimal rateValue, CategorieVehicle categorie, int valMin, int valMax, int dureeMin, int dureeMax) {
//		super();
//		this.rateValue = rateValue;
//		this.categorie = categorie;
//		this.valMin = valMin;
//		this.valMax = valMax;
//		this.dureeMin = dureeMin;
//		this.dureeMax = dureeMax;
//	}


	public void setId(long id) {
		this.id = id;
	}

	public String getRateName() {
		return rateName;
	}

	public void setRateName(String rateName) {
		this.rateName = rateName;
	}

	public BigDecimal getRateValue() {
		return rateValue;
	}

	public void setRateValue(BigDecimal rateValue) {
		this.rateValue = rateValue;
	}

	public CategorieVehicle getCategorie() {
		return categorie;
	}

	public void setCategorie(CategorieVehicle categorie) {
		this.categorie = categorie;
	}

	public int getValMin() {
		return valMin;
	}

	public void setValMin(int valMin) {
		this.valMin = valMin;
	}

	public int getValMax() {
		return valMax;
	}

	public void setValMax(int valMax) {
		this.valMax = valMax;
	}

	public int getDureeMin() {
		return dureeMin;
	}

	public void setDureeMin(int dureeMin) {
		this.dureeMin = dureeMin;
	}

	public int getDureeMax() {
		return dureeMax;
	}

	public void setDureeMax(int dureeMax) {
		this.dureeMax = dureeMax;
	}

	
	@Override
	public String toString() {
		return "Rate [id=" + id + ", value=" + rateValue + ", categorie=" + categorie + ", valMin=" + valMin + ", valMax="
				+ valMax + ", dureeMin=" + dureeMin + ", dureeMax=" + dureeMax + "]";
	}

	@Override
	public Long getId() {
		return id;
	}

	@Override
	public void setId(Long id) {
		this.id = id;
	}
}
