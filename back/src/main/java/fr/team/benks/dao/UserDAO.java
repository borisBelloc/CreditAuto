package fr.team.benks.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.User;

@Repository
public class UserDAO extends AbstractJpaRepository<User> {

	protected UserDAO() {
		super(User.class);
	}
	
	@PersistenceContext
	private EntityManager entityManager;



}
