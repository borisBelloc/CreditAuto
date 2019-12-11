package fr.team.benks.model;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class LoanContract {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private int numContract;
	
	@ManyToOne
	private Client client;
	
	@OneToOne
	private Vehicle vehicle;
	
	@Column
	private boolean isActive;
	
	@Column
	private LocalDate date;
	
	@Column
	private LocalDate dateStart;
	
	@Column
	private Duration duration;
	
	@Column
	private BigDecimal amount;
	
	@Column
	private BigDecimal rate;

}
