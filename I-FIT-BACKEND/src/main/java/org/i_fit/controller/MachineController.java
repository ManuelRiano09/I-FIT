package org.i_fit.controller;

import org.i_fit.entities.responsesgym.Machine;
import org.i_fit.services.MachineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/I_FIT")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class MachineController {

    @Autowired
    private MachineService machineService;

    @GetMapping("/machines")
    public List<Machine> getMachines(){
        return machineService.getMachines();
    }
}
