package fr.team.benks.services;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.team.benks.dao.RateDAO;
import fr.team.benks.dao.UserDAO;
import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Client;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

@Service
@Transactional
public class RateService {

	@Autowired
	private RateDAO rateDAO;

	public RateService() {

	}

	public Rate find(long id) {

		return rateDAO.find(id);

	}

	public Rate save(Rate t) {

		return rateDAO.save(t);

	}

	public List<Rate> saveAll(List<Rate> resource) {
		return rateDAO.saveAll(resource);

	}

	public Optional<Rate> getRate(CategorieVehicle categorie, int montant, int duree) {

		return rateDAO.getRate(categorie, montant, duree);

	}

	public List<Rate> findAll() {

		return rateDAO.getRates();
	}

	public List<Rate> updateAll(Object[][] ratesArray) {
		List<Rate> listRates = new ArrayList<Rate>();
		MathContext mc = new MathContext(2, RoundingMode.HALF_UP);
		for (Object[] newRate : ratesArray) {
			List<Rate> rates = rateDAO.findByRateName((String) newRate[0]);
			rates.forEach(r -> {
				r.setRateValue(new BigDecimal((Double) newRate[1], mc));
				rateDAO.update(r);
				listRates.add(r);
			});
		}
		return listRates;
	}

}
