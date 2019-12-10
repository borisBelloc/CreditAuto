package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fr.team.benks.model.LoanContract;

@Repository
@Transactional
public class ContractDAO implements DAO<LoanContract>{
	
	@Autowired
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
	public void save(LoanContract t) {
		// TODO Auto-generated method stub
		entityManager.persist(t);
		
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
