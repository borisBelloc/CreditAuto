package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import fr.team.benks.model.User;

public class UserDAO implements DAO<User> {
	
	private EntityManager entityManager;

	@Override
	public Optional<User> get(long id) {
		
		return Optional.ofNullable(entityManager.find(User.class, id));
	
	}

	@Override
	public List<User> getAll() {
		
		Query query = entityManager.createQuery("SELECT e FROM User e");
        return query.getResultList();
	}

	@Override
	public void save(User t) {
		
		executeInsideTransaction(entityManager -> entityManager.persist(t));
		
	}

	@Override
	public void update(User t, String[] params) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(User t) {
		
		executeInsideTransaction(entityManager -> entityManager.remove(t));
		
	}
	
    private void executeInsideTransaction(Consumer<EntityManager> action) {
        EntityTransaction tx = entityManager.getTransaction();
        try {
            tx.begin();
            action.accept(entityManager);
            tx.commit(); 
        }
        catch (RuntimeException e) {
            tx.rollback();
            throw e;
        }
    }

}
