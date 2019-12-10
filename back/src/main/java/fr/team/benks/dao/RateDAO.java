package fr.team.benks.dao;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;

@Repository
public class RateDAO implements DAO<Rate> {
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Optional<Rate> get(long id) {
		
		return Optional.ofNullable(entityManager.find(Rate.class, id));
	
	}
	
	public Optional<Rate> getRate(CategorieVehicle categorie, int montant, int duree) {
		
		Query query = entityManager.createQuery("SELECT e FROM Rate e WHERE e.categorie = ? and e.valMin <= ? and e.valMax > ? and e.dureeMin < ? and e.dureeMax >= ?");
		
		query.setParameter(1, categorie);
		query.setParameter(2, montant);
		query.setParameter(3, montant);
		query.setParameter(4, duree);
		query.setParameter(5, duree);
		
		return Optional.ofNullable((Rate) query.getSingleResult());

		
	}

	@Override
	public List<Rate> getAll() {
		
		Query query = entityManager.createQuery("SELECT e FROM Rate e");
		return query.getResultList();
	}

	@Override
	public Rate save(Rate t) {
		entityManager.persist(t);
		return t;
		
	}

	@Override
	public void update(Rate t, String[] params) {
		
	}

	@Override
	public void delete(Rate t) {
		
		entityManager.remove(t);
		
	}
	
	/*
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
    }*/

}
