package org.i_fit.entities.responseserror;

import org.i_fit.entities.responsesgym.Apprentice;

import java.util.ArrayList;
import java.util.List;


public class NotFoundJourney {

    private static NotFoundJourney instance;
    private final String name = "journey not found";
    private final String description = "the journy that yoy trie search doesn't exist, try whit : MORNING, AFTERNOON, NIGHT, WEEKEND";
    private final Apprentice apprentice;
    private final List<Apprentice> list = new ArrayList<>();
    {
        apprentice = new Apprentice();
        apprentice.setName(name);
        apprentice.setComments(description);
        list.add(apprentice);
    }

    private NotFoundJourney() {

    }

    public static NotFoundJourney getInstance(){

        if (instance == null){

            instance = new NotFoundJourney();
        }
        return instance;
    }

    public List<Apprentice> getList() {
        return list;
    }
}
