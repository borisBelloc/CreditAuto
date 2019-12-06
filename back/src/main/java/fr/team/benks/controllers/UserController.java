package fr.team.benks.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.team.benks.model.User;
import fr.team.benks.services.UserService;

@Controller
@RequestMapping("/users")
@ResponseBody
public class UserController {
	
	@Autowired
	private UserService us;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Optional<User> findById(@PathVariable Long id) {
		
		return us.get(id);
		
	}

}
