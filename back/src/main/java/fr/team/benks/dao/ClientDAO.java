package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.Client;
import fr.team.benks.model.Contract;
import fr.team.benks.model.User;

@Repository
public class ClientDAO extends AbstractJpaRepository<Client> {

	protected ClientDAO() {
		super(Client.class);
	}

	/*
	 * TODO findByFirstNameAndLastName
	 * 
	 * findContract return List<Contract>
	 */

	public List<Client> findByFirstnameAndLastname(String firstName, String lastName) {

		TypedQuery<Client> query = entityManager.createQuery(
				"SELECT c FROM Client c WHERE c.firstName =:firstName and c.lastName =:lastName", Client.class);

		query.setParameter("firstName", firstName);
		query.setParameter("lastName", lastName);

		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;

	}

	
	public List<Contract> findContracts(long id){
		
		TypedQuery<Contract> query = entityManager.createQuery(
				"SELECT co FROM Contract co INNER JOIN fetch co.client cl WHERE cl.id =:id", Contract.class);

		query.setParameter("id", id);

		Optional<List<Contract>> result = Optional.ofNullable((List<Contract>) query.getResultList());
		return result.isPresent() ? result.get() : null;
	}
	
}
