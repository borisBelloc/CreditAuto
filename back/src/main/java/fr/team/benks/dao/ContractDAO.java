package fr.team.benks.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
		
		return query.getSingleResult();
		
	}

}
