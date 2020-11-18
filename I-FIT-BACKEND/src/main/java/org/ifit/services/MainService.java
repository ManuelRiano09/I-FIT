package org.ifit.services;

import org.ifit.entities.responsesgym.Apprentice;
import org.ifit.repositorybd.ApprenticeReposiroty;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Comparator;
import java.util.List;

public class MainService {

    @Autowired
    protected ApprenticeReposiroty apprenticeReposiroty;

    protected List<Apprentice> getAllBdDataInNameOrder() {
        List<Apprentice> orderList = apprenticeReposiroty.findAll();
        orderList.sort(((apprentice, apprentice2) -> apprentice.getName().compareToIgnoreCase(apprentice2.getName())));
        return orderList;
    }

    protected List<Apprentice> getAllBdDataInDocumentOrder() {
        List<Apprentice> orderList = apprenticeReposiroty.findAll();
        orderList.sort((Comparator.comparing(Apprentice::getDocument)));
        return orderList;
    }
}
