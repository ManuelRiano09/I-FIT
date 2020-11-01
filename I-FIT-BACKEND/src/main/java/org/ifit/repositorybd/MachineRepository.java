package org.i_fit.repositorybd;

import org.i_fit.entities.responsesgym.Machine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MachineRepository extends MongoRepository<Machine, String> {
}
