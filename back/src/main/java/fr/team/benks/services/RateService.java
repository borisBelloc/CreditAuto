package fr.team.benks.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.team.benks.dao.RateDAO;
import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;

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

	public List<Rate> updateAll(List<Rate> modifiedRates) {
		List<Rate> listRates = new ArrayList<Rate>();
		for (Rate newRate : modifiedRates) {
			List<Rate> rates = rateDAO.findByRateName(newRate.getRateName());
			rates.forEach(r -> {
				r.setRateValue(newRate.getRateValue());
				rateDAO.update(r);
				listRates.add(r);
			});
		}
//		for (Rate newRate : rates) {
//			rateDAO.update(newRate);
//		}
		return modifiedRates;
	}

}
