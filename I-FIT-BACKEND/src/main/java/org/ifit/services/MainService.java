package org.i_fit.services;

import org.i_fit.entities.responsesgym.Apprentice;
import org.i_fit.repositorybd.ApprenticeReposiroty;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Collections;
import java.util.List;

public class MainService {

    @Autowired
    protected ApprenticeReposiroty apprenticeReposiroty;

    protected List<Apprentice> getAllBdDataInNameOrder() {
        List<Apprentice> orderList = apprenticeReposiroty.findAll();
        Collections.sort(orderList, ((apprentice, apprentice2) -> apprentice.getName().compareToIgnoreCase(apprentice2.getName())));
        return orderList;
    }

    protected List<Apprentice> getAllBdDataInDocumentOrder() {
        List<Apprentice> orderList = apprenticeReposiroty.findAll();
        Collections.sort(orderList, ((apprentice, apprentice2) -> apprentice.getDocument().compareTo(apprentice2.getDocument())));
        return orderList;
    }
}
