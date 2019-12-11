package fr.team.benks.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.Contract;

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

}
