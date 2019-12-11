package fr.team.benks.dao;

import fr.team.benks.model.Address;

public class AddressDAO extends AbstractJpaRepository<Address>{

	protected AddressDAO() {
		super(Address.class);
	}

}
