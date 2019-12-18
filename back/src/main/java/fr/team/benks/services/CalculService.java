package fr.team.benks.services;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.time.LocalDate;

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

		BigDecimal txPer = txAnnuel.divide(new BigDecimal(12), finalResultRounding).divide(new BigDecimal(100),
				finalResultRounding);
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
	public static Object[][] afficherEcheancier(BigDecimal txAnnuel, int nbEch, BigDecimal mtEmp) {

		BigDecimal mtEch = calculMonthlyCost(txAnnuel, nbEch, mtEmp);
		LocalDate souscription = LocalDate.now();
		Object[][] repaymentSchedule = new Object[nbEch][3];
		int k = 0;
		System.out.println("Date           Montant     Montant cumulé");
		for (Object[] i : repaymentSchedule) {
			i[0] = souscription.plusMonths(k);
			i[1] = mtEch;
			i[2] = mtEch.add(mtEch.multiply(new BigDecimal(k)));
//			System.out.println(i[0] + "     " + i[1] + "     " + i[2]);
			k++;

		}
		return repaymentSchedule;

	}

}
