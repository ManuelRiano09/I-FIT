package org.ifit.services;

import org.ifit.entities.responsesgym.Machine;
import org.ifit.repositorybd.MachineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MachineService {

    @Autowired
    private MachineRepository machineRepository;

    public List<Machine> getMachines(){
        return machineRepository.findAll();
    }
}
