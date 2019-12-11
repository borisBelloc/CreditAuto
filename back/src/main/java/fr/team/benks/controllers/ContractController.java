package fr.team.benks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.team.benks.model.LoanContract;
import fr.team.benks.model.Rate;
import fr.team.benks.services.ContractService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/loans")
public class ContractController {

	@Autowired
	private ContractService cs;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Rate resource) {

		cs.save(resource);

	}
	
	@RequestMapping(value = "{number}", method = RequestMethod.GET)
	@ResponseBody
	public LoanContract findByNumber(@PathVariable int number) {

		return cs.get(number);

	}

	
}

