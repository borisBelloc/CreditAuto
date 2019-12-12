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

	public List<Client> findByFirstnameAndEmail(String firstName, String email) {

		TypedQuery<Client> query = entityManager
				.createQuery("SELECT c FROM Client c WHERE c.firstName =:firstName and c.email =:email", Client.class);

		query.setParameter("firstName", firstName);
		query.setParameter("email", email);

		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;

	}

	public List<Client> findByLastnameAndEmail(String lastName, String email) {

		TypedQuery<Client> query = entityManager
				.createQuery("SELECT c FROM Client c WHERE c.lastName =:lastName and c.email =:email", Client.class);
		query.setParameter("lastName", lastName);
		query.setParameter("email", email);
		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;

	}

	public List<Client> findByEmail(String email) {
		TypedQuery<Client> query = entityManager.createQuery("SELECT c FROM Client c WHERE c.email =:email",
				Client.class);
		query.setParameter("email", email);
		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;
	}

	public List<Client> findByLastname(String lastName) {
		TypedQuery<Client> query = entityManager.createQuery("SELECT c FROM Client c WHERE c.lastName =:lastName",
				Client.class);
		query.setParameter("lastName", lastName);
		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;
	}
	
	public List<Client> findByFirstname(String firstName) {
		TypedQuery<Client> query = entityManager.createQuery("SELECT c FROM Client c WHERE c.firstName =:firstName",
				Client.class);
		query.setParameter("firstName", firstName);
		Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
		return result.isPresent() ? result.get() : null;
	}

	public List<Client> findByFirstnameAndLastnameAndEmail(String firstName, String lastName, String email) {

		TypedQuery<Client> query;
		System.out.println(firstName + " " + lastName + " " + email);
		if (firstName.isEmpty() && email.isEmpty() && lastName.isEmpty()) {
			System.out.println("first, last and email null");
			return findAll();

		}

		else if (firstName.isEmpty()) {

			if (email.isEmpty()) {
				System.out.println("first and email null");
				return findByLastname(lastName);

			} else if (lastName.isEmpty()) {
				System.out.println("first and last null");
				return findByEmail(email);
			} else {
				System.out.println("first null");
				return findByLastnameAndEmail(lastName, email);
			}

		} else if (email.isEmpty()) {
			if (lastName.isEmpty()) {
				System.out.println("last and email null");
				return findByFirstname(firstName);

			} else {
				System.out.println("email null");
				return findByFirstnameAndLastname(firstName, lastName);
			}
		} else if (lastName.isEmpty()) {
			System.out.println("last null");
			return findByFirstnameAndEmail(firstName, email);
		}

		else {
			System.out.println("all good");
			query = entityManager.createQuery(
					"SELECT c FROM Client c WHERE c.firstName =:firstName and c.lastName =:lastName and c.email =:email",
					Client.class);
			query.setParameter("firstName", firstName);
			query.setParameter("lastName", lastName);
			query.setParameter("email", email);
			Optional<List<Client>> result = Optional.ofNullable((List<Client>) query.getResultList());
			return result.isPresent() ? result.get() : null;
		}

	}

	public List<Contract> findContracts(long id) {

		TypedQuery<Contract> query = entityManager.createQuery(
				"SELECT co FROM Contract co INNER JOIN fetch co.client cl WHERE cl.id =:id", Contract.class);

		query.setParameter("id", id);

		Optional<List<Contract>> result = Optional.ofNullable((List<Contract>) query.getResultList());
		return result.isPresent() ? result.get() : null;
	}

}
