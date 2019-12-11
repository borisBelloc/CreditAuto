package fr.team.benks.dao;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.team.benks.model.IdEntity;


@Transactional
@Repository
public class AbstractJpaRepository <T extends IdEntity> {

	@PersistenceContext
	protected EntityManager entityManager;

	private Class<T> type;

	protected Session getSession() {
		return entityManager.unwrap(Session.class);
	}
	
	protected AbstractJpaRepository(Class<T> type) {
		this.type = type;
	}

	public T save(T entity) {
		entityManager.persist(entity);
		return entity;
	}

	public T update(T entity) {
		return entityManager.merge(entity);
	}

	public T find(Long id) {
		return Optional.ofNullable(entityManager.find(type, id)).get();
	}

	public List<T> findAll() {
		return entityManager.createQuery("from " + type.getSimpleName(), type).getResultList();
	}

	public T delete(Long id) {

		T entity = find(id);
		if (entity != null) {
			entityManager.remove(entity);
		}
		return entity;
	}
	
}
