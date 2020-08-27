package org.i_fit.services;

import org.i_fit.entities.Apprentice;
import org.i_fit.repositorybd.ApprenticeReposiroty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApprenticeService {

    @Autowired
    private ApprenticeReposiroty apprenticeReposiroty;

    public List<Apprentice> getInfoForInstructor(){
        List<Apprentice> list = apprenticeReposiroty.findAll();
        return list;
    }
}
