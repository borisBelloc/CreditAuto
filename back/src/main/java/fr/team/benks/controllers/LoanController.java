package fr.team.benks.controllers;

import java.math.BigDecimal;

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
import fr.team.benks.services.CalculService;
import fr.team.benks.services.LoanService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/loans")
public class LoanController {

	@Autowired
	private LoanService ls;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Rate resource) {

		ls.save(resource);

	}
	
	@RequestMapping(value = "{number}", method = RequestMethod.GET)
	@ResponseBody
	public LoanContract findByNumber(@PathVariable int number) {

		return ls.get(number);

	}

	
}

