package fr.team.benks.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.team.benks.dao.UserDAO;
import fr.team.benks.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserDAO userDAO;
	
	public UserService() {
		
	}
	
	public Optional<User> get(long id) {
		
		return userDAO.get(id);
	
	}
	
	public User save(User t) {
		
		return userDAO.save(t);
		
	}

}
