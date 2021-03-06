package fr.team.benks.controllers;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;
import fr.team.benks.model.SimulationResult;
import fr.team.benks.services.RateService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/rates")
public class RateController {

	@Autowired
	private RateService rs;

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Rate resource) {

		rs.save(resource);

	}
	
	@RequestMapping(value = "{addRates}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createAll(@RequestBody List<Rate> resource) {

		rs.saveAll(resource);

	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Rate findById(@PathVariable Long id) {

		return rs.find(id);

	}
	
	@RequestMapping( method = RequestMethod.PUT)
	@ResponseBody
	public List<Rate> updateAll(@RequestBody List<Rate> rates) {
		rs.updateAll(rates);
		return getAll();
	}

//	//http://localhost:8080/benks/api/rates?categorie=A&montant=10001&duree=40
//	@RequestMapping( method = RequestMethod.GET)
//	public BigDecimal findByParams(@RequestParam("categorie") CategorieVehicle categorie, @RequestParam("montant") int montant, @RequestParam("duree") int duree) {
//		
//		Optional<Rate> rate = rs.getRate(categorie, montant, duree);
//		System.out.println(rate);
//		BigDecimal cost = CalculService.calculTotalCost(rate.get().getValue(), duree, new BigDecimal(montant));
//		return cost;
//		
//	}
//	

	@RequestMapping(params = { "categorie", "montant", "duree" }, method = RequestMethod.GET)
	public SimulationResult findByParams(@RequestParam("categorie") CategorieVehicle categorie,
			@RequestParam("montant") int montant, @RequestParam("duree") int duree) {

		Optional<Rate> rate = rs.getRate(categorie, montant, duree);
		System.out.println(rate);
		SimulationResult rs = new SimulationResult(rate.get().getRateValue(), duree, new BigDecimal(montant));
		return rs;

	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Rate> getAll() {

		return rs.findAll();
	}

}
