package fr.team.benks.controllers;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Client;
import fr.team.benks.model.Rate;
import fr.team.benks.services.CalculService;
import fr.team.benks.services.ClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/clients")
public class ClientController {
	
	@Autowired
	private ClientService cs;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Client resource) {

		cs.save(resource);

	}
	
	@RequestMapping(params = { "nom", "prenom"}, method = RequestMethod.GET)
	public List<Client> findByName(@RequestParam("nom") String nom,
			@RequestParam("prenom") String prenom) {

		List<Client> results = cs.getRate(nom,prenom);
		
		return results;

	}

}
