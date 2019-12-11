package fr.team.benks.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user_") 
public class User implements IdEntity{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8449559893644101468L;

	@Id
	@GeneratedValue
	private long id;
	
	@Column
	private String firstName;
	
	@Column
	private String lastName;
	
	@Column
	private String userName;
	
	@Column
	private String password;
	
	@Column
	private String email;

	@Override
	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}

	@Override
	public void setId(Long id) {
		this.id = id;
		
	}

}
