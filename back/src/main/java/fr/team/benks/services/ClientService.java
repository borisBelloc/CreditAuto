package fr.team.benks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.team.benks.dao.ClientDAO;
import fr.team.benks.model.Client;
import fr.team.benks.model.Contract;
import fr.team.benks.model.Rate;

@Service
@Transactional
public class ClientService {
	
	@Autowired
	private ClientDAO clientDAO;

	public List<Client> findByFirstnameAndLastname(String firstName, String lastName) {
		// TODO Auto-generated method stub
		return clientDAO.findByFirstnameAndLastname(firstName, lastName);
	}
	
	public List<Client> findByFirstnameAndLastnameAndEmail(String firstName, String lastName, String email) {
		// TODO Auto-generated method stub
		return clientDAO.findByFirstnameAndLastnameAndEmail(firstName, lastName, email);
	}

	public List<Contract> findContracts(long id){
		return clientDAO.findContracts(id);
	}
	
//	public Client addContract(long id, Contract contract) {
//		return clientDAO.addContract(id, contract);
//	}
	
	public Client save(Client resource) {
		resource.setNumClient();
		return clientDAO.save(resource);
		
	}
	


	public Client find(long id) {
		
		return clientDAO.find(id);
	
	}
	
	public Client update(Client client) {
		return clientDAO.update(client);
	}
	
	
	public List<Client> findAll() {
		return clientDAO.findAll();
	}
	
	public Client delete(Long id) {
		return clientDAO.delete(id);
	}
	
}
