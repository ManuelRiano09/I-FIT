package org.ifit.repositorybd;

import org.ifit.entities.responsesgym.Machine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MachineRepository extends MongoRepository<Machine, String> {
}
