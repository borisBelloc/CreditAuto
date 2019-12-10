package fr.team.benks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.team.benks.dao.ContractDAO;
import fr.team.benks.model.LoanContract;
import fr.team.benks.model.Rate;

@Service
public class ContractService {
	
	@Autowired
	private ContractDAO cd;
	
	public void save(LoanContract t) {
		
		cd.save(t);
		
	}

}