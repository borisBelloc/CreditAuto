package fr.team.benks.dao;

import java.time.LocalDate;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.Contract;
import fr.team.benks.model.User;

@Transactional
@Repository
public class ContractDAO extends AbstractJpaRepository<Contract>{

	protected ContractDAO() {
		super(Contract.class);
		// TODO Auto-generated constructor stub
	}
	
	@PersistenceContext
	private EntityManager entityManager;


	/*
	 * TODO
	 * findByContractNb return Contract
	 */
	public Contract findByNumber(int number) {
		
		TypedQuery<Contract> query = entityManager.createQuery(
				"SELECT u FROM Contract u WHERE u.numContract = ?", Contract.class);
		
		query.setParameter(1, number);
		
		
		return query.getResultList().isEmpty() ? null : query.getResultList().get(0);
		
	}
	
	public void activate(Long id) {
		
		Contract c = this.find(id);
		c.setActive(true);
		entityManager.merge(c);
		
		
	}
	
	public void deactivate(Long id) {
		
		Contract c = this.find(id);
		c.setActive(false);
		entityManager.merge(c);
		
		
	}
	
//	SELECT COUNT(*) FROM Contract u WHERE u.dateStart BETWEEN cast('1990-01-01' as date) AND cast('2019-12-31' as date)
	public int numberOfContractBetween(String start, String end){

		Query query = entityManager.createQuery(
				"SELECT u FROM Contract u WHERE u.dateStart BETWEEN cast(:start as date) AND cast(:end as date)");
		
		
		query.setParameter("start", start);
		query.setParameter("end", end);
		
		return query.getResultList().size();
		
	}
	

}
