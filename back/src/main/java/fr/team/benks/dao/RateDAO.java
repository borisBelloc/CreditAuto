package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import fr.team.benks.model.Rate;

public class RateDAO implements DAO<Rate> {
	
	private EntityManager entityManager;

	@Override
	public Optional<Rate> get(long id) {
		
		return Optional.ofNullable(entityManager.find(Rate.class, id));
	
	}

	@Override
	public List<Rate> getAll() {
		
		Query query = entityManager.createQuery("SELECT e FROM User e");
		return query.getResultList();
	}

	@Override
	public void save(Rate t) {
		
		executeInsideTransaction(entityManager -> entityManager.persist(t));
		
	}

	@Override
	public void update(Rate t, String[] params) {
		
	}

	@Override
	public void delete(Rate t) {
		
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
