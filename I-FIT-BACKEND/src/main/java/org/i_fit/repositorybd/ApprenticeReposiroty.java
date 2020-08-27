package org.i_fit.repositorybd;

import org.i_fit.entities.Apprentice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApprenticeReposiroty extends MongoRepository<Apprentice, Integer> {
}
