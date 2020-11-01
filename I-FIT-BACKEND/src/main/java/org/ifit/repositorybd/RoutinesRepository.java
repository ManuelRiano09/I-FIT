package org.ifit.repositorybd;

import org.ifit.entities.responsesgym.Routine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoutinesRepository extends MongoRepository<Routine, String> {
}
