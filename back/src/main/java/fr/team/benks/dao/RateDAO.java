package fr.team.benks.dao;

import java.util.ArrayList;
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

		TypedQuery<Rate> query = entityManager
				.createQuery(
						"SELECT e FROM Rate e WHERE e.categorie =:categorie and e.valMin <=:montant"
								+ " and e.valMax >:montant and e.dureeMin <:duree and " + "e.dureeMax >=:duree",
						Rate.class);

		query.setParameter("categorie", categorie);
		query.setParameter("montant", montant);
		query.setParameter("duree", duree);

		return Optional.ofNullable(query.getSingleResult());

	}

	public List<Rate> getRates() {
		List<Rate> result = new ArrayList<Rate>();
		
		TypedQuery<Rate> query = entityManager
				.createQuery("SELECT e FROM Rate e order by e.rateName", Rate.class);
		List<Rate> rates = query.getResultList();
		
		for (Rate r : rates) {
			if (!result.stream().anyMatch(rate -> rate.getRateName().equals(r.getRateName()))) {
				Rate rate = new Rate();
				rate.setRateName(r.getRateName());
				rate.setRateValue(r.getRateValue());
				result.add(rate);
			}
		}
		
		return result;
	}
	
	public List<Rate> findByRateName(String rateName) {
		TypedQuery<Rate> query = entityManager.createQuery(
				"SELECT e FROM Rate e WHERE e.rateName =:rateName",
				Rate.class);

		query.setParameter("rateName", rateName);

		return Optional.ofNullable(query.getResultList()).get();
	}

	

}
