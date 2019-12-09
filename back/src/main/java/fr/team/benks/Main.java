package fr.team.benks;

import java.math.BigDecimal;
import java.time.LocalDate;

import fr.team.benks.services.CalculService;

public class Main {

	public static void main(String[] args) {
		CalculService cs = new CalculService();
		BigDecimal cost = cs.calculTotalCost(new BigDecimal(0.05), 24, new BigDecimal(10000));

		LocalDate date = LocalDate.parse("2018-11-13");
		cs.afficherEcheancier(new BigDecimal(0.05), 24, new BigDecimal(10000), date);

	}

}