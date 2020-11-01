package org.ifit.services;

import org.ifit.entities.responseserror.NotFoundJourney;
import org.ifit.entities.responsesgym.Apprentice;
import org.ifit.entities.responsesgym.Exercise;
import org.ifit.entities.responsesgym.Journey;
import org.ifit.entities.responsesgym.Routine;
import org.ifit.entities.responsesgym.Status;
import org.ifit.repositorybd.ApprenticeReposiroty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class InstructorService extends MainService {

    @Autowired
    private ApprenticeReposiroty apprenticeReposiroty;

    public List<Apprentice> getInfoForInstructor(String journey){

        try{
            Journey.JourneyEnum journeyEnum = Journey.JourneyEnum.valueOf(journey.toUpperCase());
            List<Apprentice> list = getAllBdDataInNameOrder();
            return list.stream().filter(apprentice -> apprentice.getJourneyEnum() == journeyEnum)
                    .collect(Collectors.toList());
        }catch(Exception e) {

            return NotFoundJourney.getInstance().getList();
        }
    }

    public Optional<Apprentice> searchId(String id){
        return apprenticeReposiroty.findById(id);
    }

    public Apprentice updateRoutine(Apprentice apprentice1){
        Routine newRoutine = apprentice1.getRoutine();
        newRoutine.setStatus(Status.StatusEnum.NOT_FINISHED);
        apprentice1.setRoutine(newRoutine);
        return apprenticeReposiroty.save(apprentice1);
    }

    public List<Apprentice> searchByStatus(String journey, String predicate){

        List<Apprentice> statusList = getInfoForInstructor(journey); //get list for journey
        Status.StatusEnum status = Status.StatusEnum.valueOf(predicate.toUpperCase()); // obtain the status
        Predicate<Apprentice> predicate1 = apprentice -> (apprentice.getRoutine().getStatus() == status); // create predicate whit the status condition

        return statusList.stream()
                .filter(predicate1)
                .collect(Collectors.toList());
    }

    public List<Exercise> searchExercises(String document){

        List<Apprentice> apprenticeList = apprenticeReposiroty.findAll();

        List<Exercise> exerciseList = new ArrayList<>();

        try {
            apprenticeList.stream()
                    .filter(apprentice -> apprentice.getId().equals(document))
                    .map(apprentice -> apprentice.getRoutine().getExercises())
                    .forEach(exerciseList::addAll);

            return exerciseList;
        }catch (Exception e){
            return new ArrayList<>();
        }


    }
}
