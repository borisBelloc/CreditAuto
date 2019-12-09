package fr.team.benks.dao;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;

public class RateDAO implements DAO<Rate> {
	
	private EntityManager entityManager;

	@Override
	public Optional<Rate> get(long id) {
		
		return Optional.ofNullable(entityManager.find(Rate.class, id));
	
	}
	
	public Optional<Rate> getRate(BigDecimal value, CategorieVehicle categorie, int valMin, int valMax, int duree) {
		
		Query query = entityManager.createQuery("SELECT e FROM Rate e WHERE e.value = ? and e.categorie = ? and e.valMin = ? and e.valMax = ? and e.duree = ?");
		
		query.setParameter(1, value);
		query.setParameter(2, categorie);
		query.setParameter(3, valMin);
		query.setParameter(4, valMax);
		query.setParameter(5, duree);
		
		return Optional.ofNullable((Rate) query.getSingleResult());

		
	}

	@Override
	public List<Rate> getAll() {
		
		Query query = entityManager.createQuery("SELECT e FROM Rate e");
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
