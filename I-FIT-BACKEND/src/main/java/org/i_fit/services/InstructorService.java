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

    public Apprentice updateRoutine(Apprentice apprentice1){
        Apprentice apprentice = new Apprentice();
        apprentice.setDocument(apprentice1.getDocument());
        apprentice.setComments(apprentice1.getComments());
        apprentice.setName(apprentice1.getName());
        apprentice.setAge(apprentice1.getAge());
        apprentice.setEmail(apprentice1.getEmail());
        apprentice.setHeight(apprentice1.getHeight());
        apprentice.setJourneyEnum(apprentice1.getJourneyEnum());
        apprentice.setLimitations(apprentice1.getLimitations());
        apprentice.setPassword(apprentice1.getPassword());
        apprentice.setWeight(800);
        apprentice.setRoutine(apprentice1.getRoutine());
        apprenticeReposiroty.save(apprentice);
        return apprentice;
    }
}
