package main.java.models;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class LoanContact {
	
	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private int numContract;
	
	@Column
	private Client client;
	
	@Column
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
