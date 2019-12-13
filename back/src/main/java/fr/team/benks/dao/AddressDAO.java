package fr.team.benks.dao;

import org.springframework.stereotype.Repository;

import fr.team.benks.model.Address;

@Repository
public class AddressDAO extends AbstractJpaRepository<Address> {

	protected AddressDAO() {
		super(Address.class);
	}

}
