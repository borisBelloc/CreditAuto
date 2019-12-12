package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.team.benks.model.LoanContract;

@Repository
public class ContractDAO implements DAO<LoanContract>{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Optional<LoanContract> get(long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<LoanContract> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoanContract save(LoanContract t) {
		// TODO Auto-generated method stub
		entityManager.persist(t);
		return t;
		
	}

	@Override
	public void update(LoanContract t, String[] params) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(LoanContract t) {
		// TODO Auto-generated method stub
		
	}

}
