package org.i_fit.repositorybd;

import org.i_fit.entities.responsesgym.Apprentice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApprenticeReposiroty extends MongoRepository<Apprentice, Integer> {
}
