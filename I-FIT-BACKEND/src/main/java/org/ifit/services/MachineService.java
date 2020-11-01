package org.i_fit.services;

import org.i_fit.entities.responsesgym.Machine;
import org.i_fit.repositorybd.MachineRepository;
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
