package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.CategorieVehicle;
import fr.team.benks.model.Rate;

@Repository
public class RateDAO extends AbstractJpaRepository<Rate> {
	

	@PersistenceContext
	private EntityManager entityManager;

	protected RateDAO() {
		super(Rate.class);
	}



	public Optional<Rate> getRate(CategorieVehicle categorie, int montant, int duree) {


		TypedQuery<Rate> query = entityManager.createQuery(
				"SELECT e FROM Rate e WHERE e.categorie =:categorie and e.valMin <=:montant"
				+ " and e.valMax >:montant and e.dureeMin <:duree and "
				+ "e.dureeMax >=:duree", Rate.class);

		query.setParameter("categorie", categorie);
		query.setParameter("montant", montant);
		query.setParameter("duree", duree);

		return Optional.ofNullable((Rate) query.getSingleResult());

	}
	
	public List<Rate> getRates(){
		
		TypedQuery<Rate> query = entityManager.createQuery(
				"SELECT DISTINCT e.ratename, e.ratevalue FROM Rate e order by ratename", Rate.class);
		
		return query.getResultList();
		
	}

}
