package org.i_fit.controller;

import org.i_fit.entities.responsesgym.Apprentice;
import org.i_fit.services.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/I_FIT")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @GetMapping("/apprenticedata")
    public List<Apprentice> getInfoForInstructor(@RequestParam String journey){
        return instructorService.getInfoForInstructor(journey);
    }

    @PutMapping("/saveroutine")
    public void updateRoutine(@RequestBody Apprentice apprentice){
        instructorService.updateRoutine(apprentice);
    }

    @GetMapping("/apprenticedata/filter")
    public List<Apprentice> filterData(@RequestParam String journey, @RequestParam String condition){
        return instructorService.searchByStatus(journey, condition);
    }



//    @GetMapping("/test")
//    public String test1(){
//        Apprentice apprentice = new Apprentice();
//        Routine routine = new Routine();
//        Exercise exercise1 = new Exercise();
//        Exercise exercise2 = new Exercise();
//        Exercise exercise3 = new Exercise();
//        Machine machine1 = new Machine();
//        Machine machine2 = new Machine();
//        Machine machine3 = new Machine();
//
//        machine1.setName("elipctia");
//        machine1.setDescription("descripcion de eliptica");
//        machine2.setName("Caminadora");
//        machine2.setDescription("descripcion de Caminadora");
//        machine3.setName("bici");
//        machine3.setDescription("descripcion de bici");
//
//        exercise1.setMachine(machine1);
//        exercise1.setRepetition(3);
//        exercise1.setSeries(4);
//        exercise1.setName("eliptica ejericicio");
//        exercise1.setDescription("una breve descripcion");
//
//        exercise2.setMachine(machine2);
//        exercise2.setRepetition(2);
//        exercise2.setSeries(6);
//        exercise2.setName("caminadora ejericicio");
//        exercise2.setDescription("una breve descripcion");
//
//        exercise3.setMachine(machine3);
//        exercise3.setRepetition(1);
//        exercise3.setSeries(2);
//        exercise3.setName("bici ejericicio");
//        exercise3.setDescription("una breve descripcion");
//
//        List<Exercise> exercises = new ArrayList<>();
//        exercises.add(exercise1);
//        exercises.add(exercise2);
//        exercises.add(exercise3);
//
//        routine.setStatus(Status.StatusEnum.NOT_FINISHED);
//        routine.setExercises(exercises);
//
//        apprentice.setDocument(1001310159);
//        apprentice.setName("Manuel");
//        apprentice.setEmail("Manuel@hotmail");
//        apprentice.setRoutine(routine);
//        apprentice.setComments("quiero bajr de peso");
//        apprentice.setAge(18);
//        apprentice.setWeight(56);
//        apprentice.setHeight(1.71f);
//        apprentice.setJourneyEnum(Journey.JourneyEnum.MORNING);
//        apprentice.setPassword("1234");
//        apprentice.setLimitations("ninguna");
//        apprenticeReposiroty.save(apprentice);
//        return "ok";
//    }
//
//    @GetMapping("/test2")
//    public String test2(){
//        Apprentice apprentice = new Apprentice();
//        Routine routine = new Routine();
//        Exercise exercise1 = new Exercise();
//        Exercise exercise2 = new Exercise();
//        Exercise exercise3 = new Exercise();
//        Machine machine1 = new Machine();
//        Machine machine2 = new Machine();
//        Machine machine3 = new Machine();
//
//        machine1.setName("elipctia");
//        machine1.setDescription("descripcion de eliptica");
//        machine2.setName("Caminadora");
//        machine2.setDescription("descripcion de Caminadora");
//        machine3.setName("bici");
//        machine3.setDescription("descripcion de bici");
//
//        exercise1.setMachine(machine1);
//        exercise1.setRepetition(3);
//        exercise1.setSeries(4);
//        exercise1.setName("eliptica ejericicio");
//        exercise1.setDescription("una breve descripcion");
//
//        exercise2.setMachine(machine2);
//        exercise2.setRepetition(2);
//        exercise2.setSeries(6);
//        exercise2.setName("caminadora ejericicio");
//        exercise2.setDescription("una breve descripcion");
//
//        exercise3.setMachine(machine3);
//        exercise3.setRepetition(1);
//        exercise3.setSeries(2);
//        exercise3.setName("bici ejericicio");
//        exercise3.setDescription("una breve descripcion");
//
//        List<Exercise> exercises = new ArrayList<>();
//        exercises.add(exercise1);
//        exercises.add(exercise2);
//        exercises.add(exercise3);
//
//        routine.setStatus(Status.StatusEnum.NOT_FINISHED);
//        routine.setExercises(exercises);
//
//        apprentice.setDocument(123456789);
//        apprentice.setName("Felipe");
//        apprentice.setEmail("felipe@hotmail");
//        apprentice.setRoutine(routine);
//        apprentice.setComments("quiero bajr de peso");
//        apprentice.setAge(18);
//        apprentice.setWeight(56);
//        apprentice.setHeight(1.71f);
//        apprentice.setJourneyEnum(Journey.JourneyEnum.WEEKEND);
//        apprentice.setPassword("1234");
//        apprentice.setLimitations("ninguna");
//        apprenticeReposiroty.save(apprentice);
//        return "ok";
//    }
//
//    @GetMapping("/tes3")
//    public String test3(){
//        Apprentice apprentice = new Apprentice();
//        Routine routine = new Routine();
//        Exercise exercise1 = new Exercise();
//        Exercise exercise2 = new Exercise();
//        Exercise exercise3 = new Exercise();
//        Machine machine1 = new Machine();
//        Machine machine2 = new Machine();
//        Machine machine3 = new Machine();
//
//        machine1.setName("elipctia");
//        machine1.setDescription("descripcion de eliptica");
//        machine2.setName("Caminadora");
//        machine2.setDescription("descripcion de Caminadora");
//        machine3.setName("bici");
//        machine3.setDescription("descripcion de bici");
//
//        exercise1.setMachine(machine1);
//        exercise1.setRepetition(3);
//        exercise1.setSeries(4);
//        exercise1.setName("eliptica ejericicio");
//        exercise1.setDescription("una breve descripcion");
//
//        exercise2.setMachine(machine2);
//        exercise2.setRepetition(2);
//        exercise2.setSeries(6);
//        exercise2.setName("caminadora ejericicio");
//        exercise2.setDescription("una breve descripcion");
//
//        exercise3.setMachine(machine3);
//        exercise3.setRepetition(1);
//        exercise3.setSeries(2);
//        exercise3.setName("bici ejericicio");
//        exercise3.setDescription("una breve descripcion");
//
//        List<Exercise> exercises = new ArrayList<>();
//        exercises.add(exercise1);
//        exercises.add(exercise2);
//        exercises.add(exercise3);
//
//        routine.setStatus(Status.StatusEnum.NOT_FINISHED);
//        routine.setExercises(exercises);
//
//        apprentice.setDocument(439876);
//        apprentice.setName("Maria");
//        apprentice.setEmail("Maria@hotmail");
//        apprentice.setRoutine(routine);
//        apprentice.setComments("quiero bajr de peso");
//        apprentice.setAge(18);
//        apprentice.setWeight(56);
//        apprentice.setHeight(1.71f);
//        apprentice.setJourneyEnum(Journey.JourneyEnum.NIGHT);
//        apprentice.setPassword("1234");
//        apprentice.setLimitations("ninguna");
//        apprenticeReposiroty.save(apprentice);
//        return "ok";
//    }
}
