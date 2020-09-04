package org.i_fit.services;

import org.i_fit.entities.responseserror.NotFoundJourney;
import org.i_fit.entities.responsesgym.Apprentice;
import org.i_fit.entities.responsesgym.Journey;
import org.i_fit.repositorybd.ApprenticeReposiroty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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
            e.getMessage();
            return NotFoundJourney.getInstance().getList();
        }
    }

    public Optional<Apprentice> searchId(int id){
        return apprenticeReposiroty.findById(id);
    }

    public Apprentice updateRoutine(Apprentice apprentice){

        apprenticeReposiroty.save(apprentice);
        return apprentice;
    }
}
