package org.i_fit.controller;

import org.i_fit.entities.Apprentice;
import org.i_fit.services.ApprenticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/I_FIT")
public class MainController {

    @Autowired
    private ApprenticeService apprenticeService;

    @GetMapping("/apprenticedata")
    public List<Apprentice> getInfoForInstructor(){
        return apprenticeService.getInfoForInstructor();
    }
//    @GetMapping("user")
//    public String test2(){
//
//        Apprentice apprentice = new Apprentice();
//        Routine routine = new Routine();
//        Machine machine = new Machine();
//
//        machine.setName("Caminadora");
//        machine.setDescription("sirve para caminar");
//
//        routine.setExercise("caminadora");
//        routine.setRepetition(0);
//        routine.setSeries(1);
//        routine.setStatus(Status.StatusEnum.FINISHED);
//        routine.setMachine(machine);
//
//        apprentice.setDocument(1001310159);
//        apprentice.setEmail("manuel@hotmail");
//        apprentice.setPassword("1234");
//        apprentice.setName("Manuel Riaño");
//        apprentice.setJourneyEnum(Journey.JourneyEnum.MORNING);
//        apprentice.setWeight(56);
//        apprentice.setAge(18);
//        apprentice.setHeight(1.70);
//        apprentice.setComments("quiero subir mi masa corporal");
//        apprentice.setLimitations("ninguna");
//        apprentice.setRoutine(routine);
//
//        apprenticeReposiroty.save(apprentice);
//        return "ok";
//    }
}
