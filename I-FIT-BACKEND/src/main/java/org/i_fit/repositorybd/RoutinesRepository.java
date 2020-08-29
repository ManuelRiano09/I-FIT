package org.i_fit.repositorybd;

import org.i_fit.entities.responsesgym.Routine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoutinesRepository extends MongoRepository<Routine, String> {
}
