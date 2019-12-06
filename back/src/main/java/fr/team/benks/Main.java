package fr.team.benks;

import java.math.BigDecimal;

import fr.team.benks.services.CalculService;

public class Main {

	public static void main(String[] args) {
		CalculService cs = new CalculService();
		BigDecimal cost = cs.calcul(new BigDecimal(0.05), 24, new BigDecimal(10000));
	}

}
