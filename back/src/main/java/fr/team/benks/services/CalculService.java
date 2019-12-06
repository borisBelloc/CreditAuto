package fr.team.benks.services;


import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;

public class CalculService {

	/**
	 * 
	 * @param txAnnuel taux annuel
	 * @param nbEch nombre d'échanges
	 * @param mtEmp montant de l'emprunt
	 * @return BigDecimal Cost of the loan
	 */
	public BigDecimal calcul(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp) {

		MathContext finalResultRounding = new MathContext(4, RoundingMode.HALF_UP);
		MathContext preciseRounding = new MathContext(20, RoundingMode.HALF_UP);
		
		BigDecimal txPer = txAnnuel.divide(new BigDecimal(12), finalResultRounding);
		System.out.println("txPer : "+txPer);
		
		BigDecimal divided = mtEmp.multiply(txPer).multiply(BigDecimal.ONE.add(txPer).pow(nbEch));
		BigDecimal divisor = BigDecimal.ONE.subtract(BigDecimal.ONE.add(txPer).pow(nbEch, preciseRounding));
		BigDecimal mtEch = divided.divide(divisor, finalResultRounding);
		
//		BigDecimal mtEch = (mtEmp.multiply(txPer).multiply((txPer.add(new BigDecimal(1))).pow(nbEch, preciseRounding)))
//				.divide(new BigDecimal(1).subtract((txPer.add(new BigDecimal(1))).pow(-nbEch, preciseRounding)), finalResultRounding);
		System.out.println("mtEch : "+mtEch);
		
		BigDecimal cost = mtEch.multiply(new BigDecimal(nbEch));
		System.out.println("cost : "+cost);
		
		return cost;

	}

}
