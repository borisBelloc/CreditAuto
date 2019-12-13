package fr.team.benks.model;

import java.math.BigDecimal;

import fr.team.benks.services.CalculService;

public class SimulationResult {

	private BigDecimal totalCost ;
	private BigDecimal monthlyCost ;
	private CalculService cs;
	
	public SimulationResult() {
		super();
	}
	
	public SimulationResult(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp) {
		monthlyCost = cs.calculMonthlyCost(txAnnuel, nbEch, mtEmp);
		totalCost = cs.calculTotalCost(txAnnuel, nbEch, mtEmp);
	}

	public BigDecimal getTotalCost() {
		return totalCost;
	}

	public void setTotalCost(BigDecimal totalCost) {
		this.totalCost = totalCost;
	}

	public BigDecimal getMonthlyCost() {
		return monthlyCost;
	}

	public void setMonthlyCost(BigDecimal monthlyCost) {
		this.monthlyCost = monthlyCost;
	}
	
	
}
