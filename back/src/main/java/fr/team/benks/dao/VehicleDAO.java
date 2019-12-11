package fr.team.benks.dao;

import fr.team.benks.model.Vehicle;

public class VehicleDAO extends AbstractJpaRepository<Vehicle>{

	protected VehicleDAO(Class<VehicleDAO> type) {
		super(Vehicle.class);
		// TODO Auto-generated constructor stub
	}

}
