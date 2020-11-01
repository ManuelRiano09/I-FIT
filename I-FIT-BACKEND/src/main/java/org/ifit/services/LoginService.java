package org.i_fit.services;

import org.i_fit.entities.responsesgym.Apprentice;
import org.i_fit.entities.responsesgym.Journey;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService extends MainService{


    //return true if user already exists or false if user doesn't exists and is created
    public Apprentice  ifUserExists(Apprentice apprentice){

        Optional<Apprentice> newApprentice = apprenticeReposiroty.findById(apprentice.getId());

        if(newApprentice.isEmpty()){
            apprentice.setJourneyEnum(Journey.JourneyEnum.BYCONFIRM);
            apprentice.setAge(0);
            apprentice.setDocument((long) 111);
            apprenticeReposiroty.save(apprentice);
            return apprentice;
        }else{
            return newApprentice.get();
        }
    }

    public void registerUser(Apprentice apprentice) {
        apprenticeReposiroty.save(apprentice);
    }
}
