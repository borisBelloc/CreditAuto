package fr.team.benks.dao;

import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

@Repository
public class UserDAO extends AbstractJpaRepository<User> {

	protected UserDAO() {
		super(User.class);
	}
	
	@PersistenceContext
	private EntityManager entityManager;



}
