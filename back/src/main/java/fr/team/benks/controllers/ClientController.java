package fr.team.benks.controllers;

import java.util.List;

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

import fr.team.benks.model.Client;
import fr.team.benks.model.Contract;
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

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Client findById(@PathVariable Long id) {

		return cs.find(id);

	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Client update(@PathVariable Long id, @RequestBody Client resource) {
		resource.setId(id);
		return cs.update(resource);
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Client> findAll() {

		return cs.findAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public Client delete(@PathVariable Long id) {
		return cs.delete(id);
	}

//	@RequestMapping(params = { "firstName", "lastName" }, method = RequestMethod.GET)
//	public List<Client> findByFirstnameAndLastname(@RequestParam("firstName") String firstName,
//			@RequestParam("lastName") String lastName) {
//
//		List<Client> result = cs.findByFirstnameAndLastname(firstName, lastName);
//
//		return result;
//
//	}

	@RequestMapping(params = { "firstName", "lastName", "email" }, method = RequestMethod.GET)
	public List<Client> findByFirstnameAndLastnameAndEmail(@RequestParam("firstName") String firstName,
			@RequestParam("lastName") String lastName, @RequestParam("email") String email) {

		List<Client> result = cs.findByFirstnameAndLastnameAndEmail(firstName, lastName, email);

		return result;

	}

	@RequestMapping(value = "/{id}/contracts", method = RequestMethod.GET)
	public List<Contract> findContracts(@PathVariable Long id) {

		List<Contract> result = cs.findContracts(id);

		return result;

	}
	
//	@RequestMapping(value = "/{id}/{contract}", method = RequestMethod.PUT)
//	public Client addContract(@PathVariable Long id, @PathVariable Contract contract) {
//
//		Client result = cs.addContract(id, contract);
//
//		return result;
//
//	}


}
