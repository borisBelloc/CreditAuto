package fr.team.benks.model;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(name="seq", initialValue=1000, allocationSize=1)
public class Contract implements IdEntity{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1809283309135761715L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
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

	@Override
	public Long getId() {
		return id;
	}

	@Override
	public void setId(Long id) {
		this.id = id;
		
	}

}
