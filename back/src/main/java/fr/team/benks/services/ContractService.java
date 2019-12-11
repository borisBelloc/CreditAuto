package fr.team.benks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.team.benks.dao.ContractDAO;
import fr.team.benks.model.Contract;
import fr.team.benks.model.Rate;

@Service
public class ContractService {
	
	@Autowired
	private ContractDAO cd;
	
	public void save(Contract t) {
		
		cd.save(t);
		
	}

	public void save(Rate resource) {
		// TODO Auto-generated method stub
		
	}

	public Contract get(int number) {
		// TODO Auto-generated method stub
		return null;
	}

}
