package fr.team.benks.services;

import java.time.LocalDate;
import java.util.List;

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

	public Contract findByNumber(int number) {
		// TODO Auto-generated method stub
		return cd.findByNumber(number);
	}
	
	public void update(Contract c) {
		cd.update(c);
	}
	
	public List<Contract> getAll(){
		
		return cd.findAll();
		
	}

	public void delete(Long id) {
		// TODO Auto-generated method stub
		cd.delete(id);
		
	}
	
	public void activate(Long id) {
		
		cd.activate(id);
		
	}
	
	public void deactivate(Long id) {
		
		cd.deactivate(id);
		
	}
	
	public int numberOfContractBetween(LocalDate start, LocalDate end) {
		
		return cd.numberOfContractBetween(start, end);
		
	}

}
