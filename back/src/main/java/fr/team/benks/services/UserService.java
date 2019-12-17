package fr.team.benks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.team.benks.dao.UserDAO;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserDAO userDAO;
	
	public UserService() {
		
	}
	
	public User get(long id) {
		
		return userDAO.find(id);
	
	}
	
	public User save(User t) {
		
		return userDAO.save(t);
		
	}

	public List<User> getAll() {
		
		return userDAO.findAll();
	}
	
	public boolean checkPassword(String login, String password) {
		
		return userDAO.findByLogin(login).getPassword().equals(password);
		
	}
	
}
