package fr.team.benks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import fr.team.benks.dao.AbstractJpaRepository;
import fr.team.benks.dao.AddressDAO;
import fr.team.benks.model.Address;
import fr.team.benks.model.Client;

@Service
@Transactional
public class AddressService extends AbstractJpaRepository<Address> {

	
	protected AddressService() {
		super(Address.class);
	}

	@Autowired
	private AddressDAO addressDao;
	
	public Address save(Address resource) {

		return addressDao.save(resource);

	}
}
