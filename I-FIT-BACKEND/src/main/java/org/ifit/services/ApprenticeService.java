package org.i_fit.services;

import org.i_fit.entities.responsesgym.Apprentice;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ApprenticeService extends MainService {

    public Optional<Apprentice> getApprentice(String id){
        Optional<Apprentice> apprenticeResponse = apprenticeReposiroty.findById(id);
        if (apprenticeResponse.isEmpty()){
            return null;
        }else{
            return apprenticeResponse;
        }

    }
}
