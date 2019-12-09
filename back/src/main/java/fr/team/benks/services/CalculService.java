package fr.team.benks.services;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.Date;

import org.springframework.stereotype.Service;

@Service
public class CalculService {

	/**
	 * 
	 * @param txAnnuel taux annuel
	 * @param nbEch    nombre d'échanges
	 * @param mtEmp    montant de l'emprunt
	 * @return BigDecimal Cost of the loan
	 */

	private static MathContext finalResultRounding = new MathContext(5, RoundingMode.HALF_UP);
	private static MathContext preciseRounding = new MathContext(20, RoundingMode.HALF_UP);

	public static BigDecimal calculTotalCost(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp) {

		BigDecimal mtEch = calculMonthlyCost(txAnnuel, nbEch, mtEmp);

		BigDecimal cost = mtEch.multiply(new BigDecimal(nbEch));
		System.out.println("cost : " + cost);

		return cost;

	}

	/**
	 * 
	 * @param txAnnuel
	 * @param nbEch
	 * @param mtEmp
	 * @return
	 */
	public static BigDecimal calculMonthlyCost(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp) {

		BigDecimal txPer = txAnnuel.divide(new BigDecimal(12), finalResultRounding);
		System.out.println("txPer : " + txPer);

		BigDecimal divided = mtEmp.multiply(txPer, preciseRounding)
				.multiply(BigDecimal.ONE.add(txPer).pow(nbEch, preciseRounding));
		BigDecimal divisor = BigDecimal.ONE.subtract(BigDecimal.ONE.add(txPer).pow(-nbEch, preciseRounding));
		BigDecimal mtEch = divided.divide(divisor, finalResultRounding);
		System.out.println("mtEch : " + mtEch);

		return mtEch;

	}

	
	/**
	 * 
	 * @param txAnnuel
	 * @param nbEch
	 * @param mtEmp
	 * @param souscription LocalDate
	 * 
	 */
	public static void afficherEcheancier(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp, LocalDate souscription) {
		
		BigDecimal mtEch = calculMonthlyCost(txAnnuel, nbEch, mtEmp);
		
		System.out.println("Date           Montant     Montant cumulé");
		for (int i = 0; i< nbEch; i++) {
			System.out.println(souscription.plusMonths(i)+"     "+mtEch+"     "
		+(mtEch.add(mtEch.multiply(new BigDecimal(i)))));
			
		}
		
	}
	
}
