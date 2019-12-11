package fr.team.benks.services;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.team.benks.dao.RateDAO;
import fr.team.benks.dao.UserDAO;
import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

@Service
public class RateService {
	
	@Autowired
	private RateDAO rateDAO;
	
	public RateService() {
		
	}
	
	public Optional<Rate> get(long id) {
		
		return rateDAO.get(id);
	
	}
	
	public void save(Rate t) {
		
		rateDAO.save(t);
		
	}
	
	public Optional<Rate> getRate(CategorieVehicle categorie, int montant, int duree) {
		
		return rateDAO.getRate(categorie, montant, duree);
		
	}

}
