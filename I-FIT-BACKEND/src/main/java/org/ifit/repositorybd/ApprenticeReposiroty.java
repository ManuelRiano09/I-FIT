package org.ifit.repositorybd;

import org.ifit.entities.responsesgym.Apprentice;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ApprenticeReposiroty extends MongoRepository<Apprentice, String> {
}
