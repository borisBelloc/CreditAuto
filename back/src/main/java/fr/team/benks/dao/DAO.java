package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import fr.team.benks.model.Rate;
import fr.team.benks.model.User;

public interface DAO<T> {
	
    Optional<T> get(long id);
    
    List<T> getAll();
     
    T save(T t);
     
    void update(T t, String[] params);
     
    void delete(T t);

}

