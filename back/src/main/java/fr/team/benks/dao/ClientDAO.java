package fr.team.benks.dao;

import fr.team.benks.model.Client;

public class ClientDAO extends AbstractJpaRepository<Client>{

	protected ClientDAO() {
		super(Client.class);
	}

}
