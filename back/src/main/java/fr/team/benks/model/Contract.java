package fr.team.benks.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Entity
@SequenceGenerator(name = "seq", initialValue = 1000, allocationSize = 1)
public class Contract implements IdEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1809283309135761715L;
	@Id
	@GeneratedValue
	private long id;

	@Column
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq")
	private int numContract;

	@ManyToOne
	private Client client;

	@OneToOne
	private Vehicle vehicle;

	@Column
	private boolean isActive;

	@DateTimeFormat(iso = ISO.DATE)
	@Column
	private LocalDate dateContract;

	@DateTimeFormat(iso = ISO.DATE)
	@Column
	private LocalDate dateStart;

	// duree en mois
	@Column
	private int duration;

	@Column
	private BigDecimal amount;

	@Column
	private BigDecimal rate;

	@Override
	public Long getId() {

		return id;

	}

	@Override
	public void setId(Long id) {

		this.id = id;

	}

	public int getNumContract() {
		return numContract;
	}

	public void setNumContract(int numContract) {
		this.numContract = numContract;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public LocalDate getDateContract() {
		return dateContract;
	}

	public void setDateContract(LocalDate dateContract) {
		this.dateContract = dateContract;
	}

	public LocalDate getDateStart() {
		return dateStart;
	}

	public void setDateStart(LocalDate dateStart) {
		this.dateStart = dateStart;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public BigDecimal getAmount() {
		return amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public BigDecimal getRate() {
		return rate;
	}

	public void setRate(BigDecimal rate) {
		this.rate = rate;
	}

	public void setId(long id) {
		this.id = id;
	}

}

