package fr.team.benks.controllers;

import java.util.List;

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

import fr.team.benks.model.Contract;
import fr.team.benks.model.Rate;
import fr.team.benks.services.ContractService;


//@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contracts")
public class ContractController {

	@Autowired
	private ContractService cs;
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void create(@RequestBody Contract resource) {
		cs.save(resource);
	}
	
	@RequestMapping(value = "/{number}", method = RequestMethod.GET)
	@ResponseBody
	public Contract findByNumber(@PathVariable int number) {
		return cs.get(number);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Contract> findAll() {
		return cs.getAll();
	}
	
	@RequestMapping(value = "/{number}", method = RequestMethod.PUT)
	@ResponseBody
	public void delete(@PathVariable long id) {
		
		cs.delete(id);
		
	}
	
	@RequestMapping(method = RequestMethod.PUT)
	public void update(@RequestBody Contract resource) {
		cs.update(resource);
	}

}

