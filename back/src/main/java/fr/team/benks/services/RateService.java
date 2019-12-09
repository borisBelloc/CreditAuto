package fr.team.benks.services;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import fr.team.benks.dao.RateDAO;
import fr.team.benks.dao.UserDAO;
import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

public class RateService {
	
	@Autowired
	private RateDAO rateDAO;
	
	public Optional<Rate> get(long id) {
		
		return rateDAO.get(id);
	
	}
	
	public void save(Rate t) {
		
		rateDAO.save(t);
		
	}
	
	public Rate getRate(BigDecimal value, CategorieVehicle categorie, int valMin, int valMax, int duree) {
		
		return rateDAO.getRate(value, categorie, valMin, valMax, duree);
		
	}

}
