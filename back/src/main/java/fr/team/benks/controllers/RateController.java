package fr.team.benks.controllers;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;
import fr.team.benks.services.RateService;
import fr.team.benks.services.UserService;

@Controller
@RequestMapping("/api/rates")
@ResponseBody
public class RateController {
	
	@Autowired
	private RateService rs;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Rate resource){
		
		rs.save(resource);
		
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<Rate> findById(@PathVariable Long id) {
		
		return rs.get(id);
		
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public Optional<Rate> findByParams(@RequestParam("categorie") CategorieVehicle categorie, @RequestParam("valMin") int valMin, @RequestParam("valMax") int valMax, @RequestParam("duree") int duree) {
		
		return rs.getRate(categorie, valMin, valMax, duree);
		
	}

}
