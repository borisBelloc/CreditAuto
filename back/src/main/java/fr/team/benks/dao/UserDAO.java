package fr.team.benks.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

@Repository
public class UserDAO extends AbstractJpaRepository<User> {

	protected UserDAO() {
		super(User.class);
	}
	
	@PersistenceContext
	private EntityManager entityManager;
	
	public User findByLogin(String login) {
		
		TypedQuery<User> query = entityManager.createQuery(
				"SELECT u FROM User u WHERE u.userName = ?", User.class);
		
		query.setParameter(1, login);
		
		return query.getSingleResult();
		
	}



}
